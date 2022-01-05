const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Category } = require('../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

router.get('/homepage', (req, res) => {
  Post.findAll({
    attributes: ['id', 'recipe_name', 'recipe_body', 'filename', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all posts
router.get('/user-dashboard', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'username']
  });
  // .then((dbPostData) => {
  //   const posts = dbPostData.map((post) => post.get({ plain: true }));
  res.render('user-dashboard');
});
// .catch((err) => {
//   console.log(err);
//   res.status(500).json(err);
// });
// });

// // get all posts
// router.get('/', (req, res) => {
//   Post.findAll({
//     attributes: ['id', 'recipe_name', 'recipe_body', 'filename', 'created_at'],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       },
//       {
//         model: Category,
//         attributes: ['category_name']
//       }
//     ]
//   })
//     .then((dbPostData) => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       res.render('homepage', { posts });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// get one post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'recipe_name', 'recipe_body', 'filename', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize the data
      const post = dbPostData.get({ plain: true });
      console.log('post', post);
      // pass data to template
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
