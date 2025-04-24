#!/bin/sh

echo "Running Prisma migrate..."
npx prisma migrate deploy

echo "Starting application..."
npm start
