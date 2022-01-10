# <strong>Spicy Bites</strong>
Spicy Bites is an application that allows user to post and view recipes. Once the user signs up, they can create posts to share their recipes, as well as edit and delete them and check comments made by other users. Comments can be added on all recipes by all users. User can also check when the recipe and comments have been posted.

<br/>

## <strong>Built With</strong>
---
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
---
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

<br/>

## <strong>Installation</strong>
---
You can clone the repository and run the $npm i command in your terminal. Create an .env file and configure your MySQL login information and AWS Bucket. You can check for examples on this README file.

<br/>

## <strong>Setting Up</strong>
---
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

## <strong>Contributing</strong>
---
To contibute with this project, please contact one of the collaborators.

<br/>

## <strong>Collaborators</strong>
---
If you have questions or suggetions, please reach out: <br/>
[GitHub - Monika Kothari](https://github.com/mkothari93) -- <mkothari.1993@gmail.com><br/>
[GitHub - Letícia Nardi](https://github.com/leticianardi) -- <leticia.tnardi@gmail.com><br/>
[GitHub - Rafael Cardoso](https://github.com/raf203) -- <rrafa203@gmail.com><br/>
[GitHub - Hares Nayabkhil](https://github.com/greenlight510) -- <nayabkhil@yahoo.com><br/>

<br/>

## <strong>Deployed</strong>
---
You can visit the deployed application here: <https://spicy-bites.herokuapp.com>

<br/>