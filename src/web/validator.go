package web

import (
	"errors"
	"fmt"
	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo"
)

type ValidatorService struct {
	validator *validator.Validate
}

func (vs *ValidatorService) Validate(i interface{}) error {

	err := vs.validator.Struct(i)

	if err != nil {
		var message string
		for _, err := range err.(validator.ValidationErrors) {
			message += formatValidationErrorMessage(err) + "\n"
		}
		return errors.New(message)
	}

	return nil
}

func formatValidationErrorMessage(err validator.FieldError) string {
	switch err.Tag() {
	case "required":
		return fmt.Sprintf("The field %s is required", err.Field())
	case "email":
		return fmt.Sprintf("The field %s must be a valid email address", err.Field())
	default:
		return fmt.Sprintf("Error while validating field %s", err.Field())
	}
}

// RegisterValidator will register the validator service to Echo
func RegisterValidator(e *echo.Echo) {
	e.Validator = &ValidatorService{validator: validator.New()}
}
