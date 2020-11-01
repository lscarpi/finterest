package database

import "github.com/lscarpi/finterest/src/models"

var modelsToMigrate = []interface{}{
	&models.User{},
}

func Migrate() error {

	// get the current connection
	db := GetDatabaseConnection()

	// Loop all models to migrate and run the command
	for _, model := range modelsToMigrate {
		err := db.AutoMigrate(model)
		if err != nil {
			return err
		}
	}

	return nil
}
