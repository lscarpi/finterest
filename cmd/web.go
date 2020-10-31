package main

import (
	"fmt"
	"github.com/labstack/echo"
	"github.com/lscarpi/finterest/src/core"
	"github.com/lscarpi/finterest/src/web"
	"os"
)

func main() {
	// Define where is the app root path
	dir, err := os.Getwd()
	if err != nil {
		panic("Coult not find current working dir to start up application")
	}
	appRootPath := fmt.Sprintf("%s/..", dir)

	// Boot up main application items (like .env file and possible configs)
	core.Boot(appRootPath)

	// Create new echo instance
	e := echo.New()

	// Get web package and register the routes
	web.RegisterRoutes(e)

	// Start the server
	e.Logger.Fatal(
		e.Start(":1323"),
	)
}
