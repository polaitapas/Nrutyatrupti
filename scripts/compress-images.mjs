import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import path from 'path'

const dir = path.resolve('public/images')
const MAX_WIDTH = 2200

const files = await readdir(dir)
let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const ext = path.extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const filePath = path.join(dir, file)
  const before = (await stat(filePath)).size
  totalBefore += before

  const image = sharp(filePath)
  const meta = await image.metadata()
  const rotate = image.rotate() // apply EXIF orientation permanently before resize

  let pipeline = rotate
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH })
  }

  const buffer =
    ext === '.png'
      ? await pipeline.png({ compressionLevel: 9, quality: 85 }).toBuffer()
      : await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer()

  // only overwrite if it actually saved space (avoids re-compressing already-small files worse)
  if (buffer.length < before) {
    await sharp(buffer).toFile(filePath + '.tmp')
    await import('fs/promises').then((fs) => fs.rename(filePath + '.tmp', filePath))
    totalAfter += buffer.length
  } else {
    totalAfter += before
  }

  console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(buffer.length / 1024 / 1024).toFixed(2)}MB`)
}

console.log(`\nTOTAL: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`)
