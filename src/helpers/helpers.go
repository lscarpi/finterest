package helpers

import "os"

const (
	EnvironmentLocal      = "local"
	EnvironmentProduction = "production"
	EnvironmentTesting    = "testing"
)

func GetCurrentWorkingDir() string {
	cwd, _ := os.Getwd()
	return cwd
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
