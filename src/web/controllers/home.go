package controllers

import (
	"net/http"

	"github.com/labstack/echo"
)

// HomeController basic struct for method isolation
type HomeController struct{}

// Index is responsible for loading root route
func (HomeController) Index(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, world!")
}
