#!/bin/sh
set -e

echo "🚀 Building Astro app..."
yarn build

echo "✅ Starting Astro preview..."
exec yarn preview --host 0.0.0.0 --port ${APP_SERVER_PORT}