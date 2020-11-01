package main

import (
	"github.com/labstack/echo"
	"github.com/lscarpi/finterest/src/core"
	"github.com/lscarpi/finterest/src/web"
	"os"
)

func main() {

	// Boot up main application items (like .env file and possible configs)
	core.Boot()

	// Create new echo instance
	e := echo.New()

	// Register the Validator Service
	web.RegisterValidator(e)

	// Get web package and register the routes
	web.RegisterRoutes(e)

	// Start the server
	e.Logger.Fatal(
		e.Start(":" + os.Getenv("APP_PORT")),
	)
}
