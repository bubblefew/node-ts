import dotenv from 'dotenv'
// Load environment variables from the .env file
dotenv.config({ path: '.env' })

// Define types for environment variables
type EnvironmentDB = {
  DB_URL: string
  DB_NAME: string
  DB_USER: string
  DB_PASSWORD: string
}

type EnvironmentServer = {
  PORT: string | number
}

// Export the environment variables
export const env: EnvironmentDB = {
  DB_URL: process.env.DB_URL || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
}

export const server: EnvironmentServer = {
  PORT: process.env.PORT || 3000,
}
