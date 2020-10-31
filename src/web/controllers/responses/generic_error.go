package responses

type GenericErrorResponse struct {
	Message string `json:"message" required:"true"`
}

// CreateGenericErrorResponse is a quick way to create an GenericErrorResponse struct
func CreateGenericErrorResponse(message string) GenericErrorResponse {
	return GenericErrorResponse{
		Message: message,
	}
}
