package database

import (
	"github.com/lscarpi/finterest/src/auth"
	"github.com/lscarpi/finterest/src/models"
)

var users = []models.User{

	models.User{
		Name:     "Dummy user 1",
		Email:    "user1@gmail.com",
		Password: "1234",
	},

	models.User{
		Name:     "Dummy user 2",
		Email:    "user2@gmail.com",
		Password: "4321",
	},
}

// For now this is simple, but who knows in the future?
func InsertDummyData() error {

	dbConnection := GetDatabaseConnection()

	// For each user
	for _, user := range users {

		// Hash the user pw
		user.Password, _ = auth.HashPassword(user.Password)

		// Try to find by email or create a new one
		result := dbConnection.Where(
			&models.User{
				Email: user.Email,
			},
		).FirstOrCreate(&user)

		if result.Error != nil {
			return result.Error
		}
	}
	return nil
}
