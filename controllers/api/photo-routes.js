const router = require('express').Router();

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();
const uuid = require('uuid');
const path = require('path');

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      const { originalname } = file;
      const ext = path.extname(file.originalname);
      const str = `${uuid.v4()}${ext}`;
      cb(null, str);
    }
  })
});

router.post('/single', upload.single('recipe_photo'), (req, res) => {
  return res.json({ status: 'OK-AWS', pathname: req.file.key });
});

router.post('/multiple', upload.array('recipe_photo'), (req, res) => {
  return res.json({ status: 'OK-AWS' });
});

module.exports = router;
