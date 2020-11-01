package core

import (
	"github.com/joho/godotenv"
	"github.com/labstack/gommon/log"
	"github.com/lscarpi/finterest/src/database"
	"github.com/lscarpi/finterest/src/helpers"
)

// Boot is responsible for loading up the main application configs
func Boot(appRootPath string) {
	// Set app root path
	setAppRootPath(appRootPath)
	// Load up .env file
	loadDotEnvFile(appRootPath)
	// Connect to DB
	connectToDatabase()
	// Run migrations
	migrateDatabase()
}

func setAppRootPath(appRootPath string) {
	helpers.SetAppRootPath(appRootPath)
}

func loadDotEnvFile(appRootPath string) {
	err := godotenv.Load(appRootPath + "/.env")
	if err != nil {
		log.Info("No .env file found.")
	}
}

func connectToDatabase() {
	err := database.ConnectToDatabase()
	if err != nil {
		panic(err)
	}
}

func migrateDatabase() {
	err := database.Migrate()
	if err != nil {
		panic(err)
	}
}
