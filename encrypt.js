import { createCipheriv, randomBytes } from 'node:crypto'

const encryptionKey = '' // 32-byte string

, encrypt = async (text: string) => {
  const iv = randomBytes(16)
  , cipher = createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv)
  , encryptedText = Buffer.concat([cipher.update(text), cipher.final()])
 
  return `${iv.toString('hex')}:${encryptedText.toString('hex')}`
}

export default encrypt
