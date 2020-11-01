package helpers

import "os"

const (
	EnvironmentLocal      = "local"
	EnvironmentProduction = "production"
	EnvironmentTesting    = "testing"
)

var appRootPath string

// SetAppRootPath will keep track of the root path for future usage
func SetAppRootPath(path string) {
	appRootPath = path
}

// GetAppRootPath quick way to get the root path of the app
func GetAppRootPath() string {
	return appRootPath
}

func GetAppKey() string {
	return os.Getenv("APP_KEY")
}

func GetAppEnv() string {
	return os.Getenv("APP_ENV")
}

func IsLocalEnv() bool {
	return GetAppEnv() == EnvironmentLocal
}

func IsProductionEnv() bool {
	return GetAppEnv() == EnvironmentProduction
}

func IsTestingEnv() bool {
	return GetAppEnv() == EnvironmentTesting
}
