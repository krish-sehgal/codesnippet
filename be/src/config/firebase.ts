import { cert, initializeApp } from 'firebase-admin'
import { readFileSync } from 'fs'

const serviceAccount = JSON.parse(
    readFileSync('./service-account.json', 'utf8')
)

initializeApp({
    credential: cert(serviceAccount)
})