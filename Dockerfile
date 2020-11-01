# Latest alpine image
FROM  golang:alpine

# https://github.com/golang/go/issues/28065
ENV CGO_ENABLED=0

# Create main folder
RUN mkdir /app

# Add current folder to /app
ADD . /app

# Define workdir
WORKDIR /app

# Compile the code
RUN \
    # Run the tests
    # TODO: Add testing
    # Build the executable
    go build -o bin/web cmd/web.go

# Define the command to run
CMD ["/app/bin/web"]