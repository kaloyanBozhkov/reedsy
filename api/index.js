import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const parentDirectory = path.resolve(__dirname, '..')

fs.readdir(parentDirectory, (err, files) => {
  if (err) {
    console.error('Error reading parent directory:', err)
    return
  }

  console.log('Files in the parent directory:', files)
})

export default {}
