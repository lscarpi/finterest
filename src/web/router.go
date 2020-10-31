package web

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/lscarpi/finterest/src/web/controllers"
	"github.com/lscarpi/finterest/src/web/jwt"
	"os"
)

// RegisterRoutes is the main function in the router
func RegisterRoutes(e *echo.Echo) {

	// Enable logging?
	if os.Getenv("APP_ENV") == "local" {
		e.Use(middleware.Logger())
	}

	// Home route (mainly for test)
	homeController := controllers.HomeController{}
	e.GET("/", homeController.Index)

	// Auth Routes
	authController := controllers.AuthController{}
	e.POST("/auth/login", authController.Login)

	// All routes in the this group will require auth, using the R router
	r := e.Group("")
	r.Use(middleware.JWT(jwt.GetJwtKey()))

	r.GET("/auth/me", authController.Me)
}
