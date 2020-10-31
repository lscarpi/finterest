package controllers

import (
	"github.com/lscarpi/finterest/src/web/controllers/responses"
	"net/http"

	"github.com/labstack/echo"
)

// AuthController basic struct for method isolation
type AuthController struct{}

type LoginRequest struct {
	Email    string `json:"email" required:"true"`
	Password string `json:"password" required:"true"`
}

// Login => POST /auth/login
func (AuthController) Login(c echo.Context) error {

	loginRequest := LoginRequest{}

	if c.Bind(loginRequest) != nil {
		return c.JSON(http.StatusBadRequest, responses.CreateGenericErrorResponse("Missing login data"))
	}

	// Chill we will finish this
	return nil
}

// Me => POST /auth/me
func (AuthController) Me(c echo.Context) error {
	return c.String(http.StatusOK, "Shows data about me")
}
