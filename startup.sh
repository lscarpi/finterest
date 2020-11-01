

ENV_FILE=.env

if [ ! -f $ENV_FILE ]; then
  echo "$ENV_FILE doesn't exists. Please init one before running this script."
  exit 1;
fi

# Build the images
docker-compose build

# Run them, using the
docker-compose up

exit 0;