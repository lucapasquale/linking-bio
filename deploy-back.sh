# Recreate /app folder
rm -rf app
mkdir app

# Copy contents
cp -r packages/backend/* app
cd app

# Install and build application
yarn install
yarn build

# Generate tar file
cd ..
tar -cvf ./deploy.tar ./captain-definition ./app

caprover deploy -h https://captain.lucapasquale.dev -b main -a linking-bio-api
