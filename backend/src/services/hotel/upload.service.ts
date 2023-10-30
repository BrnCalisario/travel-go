import 'dotenv/config'

import crypto from 'crypto'
import multer, { Options } from "multer"
import multerS3 from 'multer-s3'

import { S3Client } from '@aws-sdk/client-s3'

import { fileSize, fileType } from '../../config/multer'

const accessKeyId = process.env.AWS_KEY
const bucketName = process.env.BUCK
const secretAccessKey = process.env.BUCKET_NAME

if (!accessKeyId || !bucketName || !secretAccessKey)
    throw new Error("Config AWS file")

const s3Config = new S3Client({
    region: 'us-east-2',
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
})

const option: Options = {
    storage: multerS3({
        s3: s3Config,
        bucket: bucketName,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (_, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                const fileName = `uploads/${hash.toString('hex')}-${file.originalname
                    }`

                cb(null, fileName)
            })
        }
    }),

    limits: { fileSize: fileSize['5mb'] }
}

const upload = multer(option)

export default upload