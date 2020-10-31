package database

import (
	"errors"
	"fmt"
	"github.com/lscarpi/finterest/src/database/connectors"
	"gorm.io/gorm"
	"os"
)

type connector interface {
	Connect() (*gorm.DB, error)
}

const SQLiteDriverName = "sqlite"
const MySQLDriverName = "mysql"

var supportedDrivers = map[string]connector{
	SQLiteDriverName: connectors.SQLite{},
	MySQLDriverName:  connectors.MySQL{},
}

var databaseConnection *gorm.DB

// ConnectToDatabase is the main function that decides the driver and tries to connect to the respective DB
func ConnectToDatabase() error {

	databaseDriver := os.Getenv("DATABASE_DRIVER")

	// Check if driver is supported
	driver, ok := supportedDrivers[databaseDriver]
	if !ok {
		return errors.New(fmt.Sprintf("Driver %s not supported!", driver))
	}

	// Try to connect
	db, err := driver.Connect()
	if err != nil {
		return err
	}

	// Save current connection and finish
	databaseConnection = db
	return nil
}

// GetDatabaseConnection will return the connected DB if any
func GetDatabaseConnection() *gorm.DB {
	return databaseConnection
}
