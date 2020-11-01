package controllers

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/lscarpi/finterest/src/auth"
	"github.com/lscarpi/finterest/src/database"
	"github.com/lscarpi/finterest/src/helpers"
	"github.com/lscarpi/finterest/src/models"
	"net/http"
	"time"

	"github.com/labstack/echo"
)

// AuthController basic struct for method isolation
type AuthController struct{}

type LoginRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required"`
}

type LoginResponse struct {
	Token string `json:"token"`
}

type MeResponse struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

// Login => POST /auth/login
func (AuthController) Login(c echo.Context) error {

	loginRequest := new(LoginRequest)

	if err := c.Bind(loginRequest); err != nil {
		return err
	}

	if err := c.Validate(loginRequest); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}

	// Try to find user on DB
	var user models.User
	result := database.GetDatabaseConnection().Where("email = ?", loginRequest.Email).First(&user)

	if result.Error != nil || !auth.CheckPasswordHash(loginRequest.Password, user.Password) {
		return echo.ErrUnauthorized
	}

	token, err := generateJwtToken(&user)

	if err != nil {
		return echo.ErrInternalServerError
	}

	return c.JSON(http.StatusOK, LoginResponse{
		Token: token,
	})
}

func generateJwtToken(user *models.User) (string, error) {

	// If reaches here, then generate new JWT token and send back
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["name"] = user.Name
	claims["email"] = user.Email
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	return token.SignedString([]byte(helpers.GetAppKey()))
}

// Me => POST /auth/me
func (AuthController) Me(c echo.Context) error {

	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := fmt.Sprintf("%s", claims["name"])
	email := fmt.Sprintf("%s", claims["email"])

	return c.JSON(http.StatusOK, MeResponse{
		Name:  name,
		Email: email,
	})
}
