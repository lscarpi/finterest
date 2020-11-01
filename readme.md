# Finterest

This is a test project, written in Go and React

The backend part uses the following golang libraries:
- [GORM](https://gorm.io/index.html)
- [Validate](https://github.com/go-playground/validator)
- [Echo Framework](https://echo.labstack.com/)
- [godotenv](https://github.com/joho/godotenv)
- [jwt-go](https://github.com/dgrijalva/jwt-go)

## Running the app

#### Make sure to set up your `.env` file properly set up.

#### Via docker: 
Run ./startup.sh

#### Manually:
- Make sure to be at project root folder
- `go run cmd/web.go` (use `go build` to generate an executable instead)

## TODOS:
- Write tests
- Move data storage to repositories
- Check for possible places where code could be decoupled