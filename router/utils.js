import express from 'express'
import {
    checkWordCount,
    Lowercase,
    removeWhitespace,
    Uppercase
} from '../controller/utils.js'

const router = express.Router()

router.post('/check-wordCount', checkWordCount)
router.post('/remove-whitespace', removeWhitespace)
router.post('/uppercase', Uppercase)
router.post('/lowercase', Lowercase)

export default router