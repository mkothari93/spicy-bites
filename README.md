# Spicy Bites

Spicy Bites is an application that allows user to post and view recipes. Once the user signs up, they can create posts to share their recipes, as well as edit and delete them and check comments made by other users. Comments can be added on all recipes by all users. User can also check when the recipe and comments have been posted.

## Built With

- HTML
- CSS / Bootstrap
- JavaScript
- Node.js, Express
- Express-Session
- MySQL, Sequelize ORM
- AWS-S3
- Multer / Multer-S3
- UUID
- bcrypt
- Dotenv
- Insomnia
- Heroku
- Handlebars.js

## Table of contents

- [Description](#description)
- [Installation](#Installation)
- [Setting Up](#SettingUp)
- [Setting Up Your Own AWS Bucket](#Setting-Up-Your-Own-AWS-Bucket)
- [Setting Up MySQL](#SettingUpMySQL)
- [Installing Packages](#Installing-Packages)
- [Contributing](#contributing)
- [Collaborators](#Collaborators)
- [Questions](#questions)
- [Deployed](#Deployed)

## Installation

You can clone the repository and run the command `npm i`. Create your .env file and configure your MySQL login information and AWS Bucket. You can check for exemples on this README file.

## Setting Up

### Setting Up MySQL

To set up your MySQL credentials, use the following exemple:

```
DB_NAME='recipes_db'
DB_USER='root'
DB_PW='your-password'
```

### Setting Up Your Own AWS Bucket

To set up your AWS buket, add the following lines to your .env file:

```
AWS_BUCKET_NAME='your-bucket-name'
AWS_ACCESS_KEY_ID='your-access-key'
AWS_SECRET_ACCESS_KEY='your-secret-access-key'
AWS_DEFAULT_REGION='your-region'

```

On views > dashboard, homepage, edit-post, single-post, you also have to update the `<img>` tag according to your bucket information:

```
https://bucket-name.s3.us-region.amazonaws.com/>
```

## Installing Packages

To install all the required packages, run the following command:

```

npm i express-session connect-session-sequelize dotenv express mysql2 sequelize email-validator bcrypt aws-s3 multer multer-s3 uuid

```

## Contributing

To contibute with this project, please contact one of the collaborators.

### Collaborators

If you have questions or suggetions, please reach out:
[Hares Nayabkhil](https://github.com/greenlight510)
[Leticia Nardi](https://github.com/leticianardi)
[Monika Kothari](https://github.com/mkothari93)
[Rafael Cardoso](https://github.com/raf203)

## Deployed

You can visit the deployed application [here]
