const router = require('express').Router();
require('dotenv').config();

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const shortid = require('shortid');
const path = require('path');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });

const s3 = new aws.S3({ 
  apiVersion: '2006-03-01'
  // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const upload = multer({
  // console.log(file.fieldname),
  storage: multerS3 ({
    s3: s3,
    bucket: 'project2-photo-storage',
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
        const { originalname } = file;
        const extend = path.extname(file.originalname);
        const fileName = shortid.generate() + `${extend}`
      cb(null, fileName);
    }
  })
});

router.post('/single'), upload.single('recipe_photo'), (req, res) => {
  console.log("--------------This single route is working----------------")
    // res.send('successfully uploaded fine!')
    return res.json({status: 'OK', pathname: req.file.key});
    
}

router.post('/multiple', upload.array('recipe_photo'), (req, res) => {
    res.json({ status: 'OK'});
  
  });

module.exports = router; 