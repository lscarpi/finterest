package core

import (
	"fmt"
	"github.com/joho/godotenv"
	"github.com/lscarpi/finterest/src/database"
	"github.com/lscarpi/finterest/src/helpers"
	"log"
	"os"
)

// Boot is responsible for loading up the main application configs
func Boot() {
	// Check if running on docker to adjust configs
	prepareRuntime()
	// Load up .env file
	loadDotEnvFile()
	// Connect to DB
	connectToDatabase()
	// Run migrations
	migrateDatabase()
}

func prepareRuntime() {

	if isRunningOnDocker() {
		log.SetOutput(os.Stdout)
		log.Println("Docker runtime detected")
	}

}

func isRunningOnDocker() bool {
	// If .dockerenv file is in found, then we're on docker
	_, err := os.Stat("/.dockerenv")
	return err == nil
}

func loadDotEnvFile() {
	// Load .env file if any found
	cwd := helpers.GetCurrentWorkingDir()
	envFile := fmt.Sprintf("%s/.env", cwd)
	// Try to load the dotenv file
	if err := godotenv.Load(envFile); err == nil {
		log.Println(
			fmt.Sprintf(".env file found and loaded at %s", envFile),
		)
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
