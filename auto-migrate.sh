#!/bin/sh

# This script is a startup entrypoint for the Docker container.
# It handles database schema updates and seeding before starting the application.

# Echo a message to the console to indicate that the database schema is being pushed.
echo "Running Prisma db push..."

# The 'npx prisma db push' command pushes the schema to the database.
# This is great for development but should be used with caution in production.
# The '|| exit 1' part ensures the script stops if the command fails.
npx prisma db push || exit 1

# Check if the database has been seeded before running the seed command.
# This prevents duplicate data from being inserted on every container restart.

# The `npx prisma db execute` command runs a raw SQL query.
# We're checking for the existence of the `User` table. You can change this to any
# table you know is created by your seed script.
# if ! npx prisma db execute --schema="prisma/schema.prisma" --url="$DATABASE_URL" --stdin <<EOF
#   SELECT 1 FROM \`User\` LIMIT 1;
# EOF
# then
#   # If the check fails (i.e., the table doesn't exist), then we run the seed command.
#   echo "Running Prisma database seeding..."
#   npx prisma db seed || exit 1
# else
#   # If the table exists, we assume the database has already been seeded.
#   echo "Database already seeded, skipping."
# fi

# Echo a message to indicate that the application is starting.
echo "Starting application..."

# This command starts the Node.js application.
# The 'exec' command ensures that the Node.js process replaces the shell script process,
# which is a best practice for Docker containers.
exec npm start
