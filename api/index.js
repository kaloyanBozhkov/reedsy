import fs from 'fs'
import path from 'path'

const parentDirectory = path.resolve(__dirname, '..')

fs.readdir(parentDirectory, (err, files) => {
  if (err) {
    console.error('Error reading parent directory:', err)
    return
  }

  console.log('Files in the parent directory:', files)
})

export default {}
