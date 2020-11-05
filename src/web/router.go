package web

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/lscarpi/finterest/src/helpers"
	"github.com/lscarpi/finterest/src/web/controllers"
	"os"
)

// RegisterRoutes is the main function in the router
func RegisterRoutes(e *echo.Echo) {

	// Enable secure middleware
	e.Use(middleware.Secure())

	// Enable CORS
	e.Use(middleware.CORS())

	// Enable logging?
	if os.Getenv("APP_ENV") == "local" {
		e.Use(middleware.Logger())
	}

	/* * * * * * * * * * * * * * * * * * *
	          Frontend Routes
	* * * * * * * * * * * * * * * * * * */

	//TODO: Make this better (relative paths might break)
	e.File("/", "frontend/index.html")
	e.Static("/assets", "frontend/assets")

	/* * * * * * * * * * * * * * * * * * *
				Backend Routes
	 * * * * * * * * * * * * * * * * * * */

	// Home route (mainly for test)
	homeController := controllers.HomeController{}
	e.GET("/api/", homeController.Index)

	// Auth Routes
	authController := controllers.AuthController{}
	e.POST("/api/auth/login", authController.Login)

	// All routes in the this group will require auth, using the R router
	r := e.Group("/api")
	r.Use(middleware.JWT([]byte(helpers.GetAppKey())))

	r.GET("/auth/me", authController.Me)
}
