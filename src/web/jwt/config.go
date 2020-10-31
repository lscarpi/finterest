package jwt

var jwtKey []byte = []byte("ABC123")

// GetJwtKey returns the byte slice of the jwt key
func GetJwtKey() *[]byte {
	return &jwtKey
}
