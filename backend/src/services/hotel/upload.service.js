import crypto from "crypto"
import multerS3 from "multer-s3"
import aws from "aws-sdk"
import multer from "multer"
import * as multerConfig from "../../config/multer"
import path from "node:path"

aws.config.update({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    region: process.env.REGION
})

const upload = multer({
    storage: multerS3({
        s3: new aws.S3(),
        bucket: process.env.BUCKET_NAME || '',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                const fileName = `uploads/${hash.toString("hex")}-${file.originalname}`;
                cb(null, fileName);
            });
        },
        local: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
            },
            filename: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    if (err) 
                        cb(err, null);

                    file.key = `${hash.toString("hex")}-${file.originalname}.${file.mimetype}`;

                    cb(null, file.key);
                });
            },
        })
    }),
    limits: { fileSize: multerConfig.fileSize["5mb"] },
});

export default upload