# <strong>Spicy Bites</strong>
![badge](https://img.shields.io/badge/License-MIT-blue.svg)

Spicy Bites is an application that allows user to post and view recipes. Once the user signs up, they can create posts to share their recipes. In addition, the user will also be able to edit and delete these posts. Users will also be able to view comments made by other users on their posts and other recipe posts. Comments can be added on all recipes by all users. User can also check when the recipe and comments have been posted.

<br/>

## <strong>Built With</strong>
* HTML
* CSS / Bootstrap
* JavaScript
* Node.js, Express
* Express-Session
* MySQL, Sequelize ORM
* AWS-S3
* Multer/Multer-S3
* UUID
* bcrypt
* Dotenv
* Insomnia
* Heroku
* Handlebars.js

<br/>

## <strong>Table of contents</strong>
- [Installation](#Installation)
- [Setting Up](#Setting-Up)
- [Contributing](#Contributing)
- [Collaborators](#Collaborators)
- [Deployed](#Deployed)

<br/>

## <strong>Installation</strong>
---
To install this application, clone this repository. Run $npm i command in the terminal. Create an .env file and add appropriate values to the following information:
```
 DB_NAME=''
 DB_USER=''
 DB_PW=''
 JAWSDB_URL=''
 AWS_ACCESS_KEY_ID=''
 AWS_SECRET_ACCESS_KEY=''
 AWS_BUCKET_NAME= ''
```
<br/>

<br/>

## <strong>Setting Up</strong>

### Setting Up MySQL
<br/>
To set up your MySQL credentials, use the following exemple:

```
DB_NAME='recipes_db'
DB_USER='root'
DB_PW='your-password'
```

<br/>

### Setting Up Your Own AWS Bucket
<br/>
To set up your AWS buket, add the following lines to your .env file:

```
AWS_BUCKET_NAME='your-bucket-name'
AWS_ACCESS_KEY_ID='your-access-key'
AWS_SECRET_ACCESS_KEY='your-secret-access-key'
AWS_DEFAULT_REGION='your-region'

```
On views > dashboard, homepage, edit-post, single-post, you also have to update the `<img>` tag according to your bucket information:
```
https://your-bucket-name.s3.us-region.amazonaws.com/>
```
<br/>

## <strong>Contributing</strong>
To contibute with this project, please contact one of the collaborators.

<br/>

## <strong>Collaborators</strong>
If you have questions or suggetions, please reach out: <br/>
[GitHub - Monika Kothari](https://github.com/mkothari93) -- <mkothari.1993@gmail.com><br/>
[GitHub - Letícia Nardi](https://github.com/leticianardi) -- <leticia.tnardi@gmail.com><br/>
[GitHub - Rafael Cardoso](https://github.com/raf203) -- <rrafa203@gmail.com><br/>
[GitHub - Hares Nayabkhil](https://github.com/greenlight510) -- <nayabkhil@yahoo.com><br/>

<br/>

## <strong>Deployed</strong>
You can visit the deployed application here: <https://spicy-bites.herokuapp.com>

<br/>
