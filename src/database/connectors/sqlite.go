package connectors

import (
	"errors"
	"fmt"
	"github.com/lscarpi/finterest/src/helpers"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"os"
)

type SQLite struct{}

func (SQLite) Connect() (*gorm.DB, error) {

	databaseName := os.Getenv("DATABASE_NAME")
	databasePath := fmt.Sprintf("%s/%s", helpers.GetCurrentWorkingDir(), databaseName)

	db, err := gorm.Open(sqlite.Open(databasePath), &gorm.Config{})

	if err != nil {
		return nil, errors.New(fmt.Sprintf("Failed to connect to database %s", databaseName))
	}

	return db, nil
}
