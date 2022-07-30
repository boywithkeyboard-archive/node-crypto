import { createDecipheriv } from 'node:crypto'

const encryptionKey = '' // 32-byte string

export const decrypt = async (text: string) => {
  const textArray = text.split(':')
  , iv = Buffer.from(textArray.shift() as string, 'hex')
  , encryptedText = Buffer.from(textArray.join(':'), 'hex')
  , decipher = createDecipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv)
  , decryptedText = Buffer.concat([decipher.update(encryptedText), decipher.final()])
 
  return decryptedText.toString()
}
