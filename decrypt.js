import { createDecipheriv } from 'node:crypto'

const encryptionKey = '' // 32-byte string

, decrypt = async (text: any) => {
  const textArray = text.split(':')
  , iv = Buffer.from(textArray.shift(), 'hex')
  , encryptedText = Buffer.from(textArray.join(':'), 'hex')
  , decipher = createDecipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv)
  , decryptedText = Buffer.concat([decipher.update(encryptedText), decipher.final()])
 
  return decryptedText.toString()
}

export default decrypt
