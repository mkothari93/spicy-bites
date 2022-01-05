const router = require('express').Router();
const { Post, User, Category, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//The `/api/posts` endpoint

router.get('/', (req, res) => {
  //Finds all posts
  Post.findAll({
    attributes: ['id', 'recipe_name', 'recipe_body', 'filename', 'created_at'],
    //Includes its associated Category and User
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((postData) => res.json(postData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  //Finds one post by its `id` value
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'recipe_name', 'recipe_body', 'filename', 'created_at'],
    //Includes its associated Categories and User
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
      },
      {
        model: User,
        attributes: ['id', 'username']
      }
    ]
  })
    .then((postData) => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id.' });
        return;
      }
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  //Creates a new post
  Post.create({
    recipe_title: req.body.recipe_title,
    recipe_body: req.body.recipe_body,
    user_id: req.session.user_id
  })
    .then((newPost) => res.json(newPost))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  //Updates a post by its `id` value
  Post.update(
    {
      recipe_title: req.body.recipe_title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedPost) => {
      if (!updatedPost[0]) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  //Deletes a post by its `id` value
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedPost) => {
      if (!deletedPost) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(deletedPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
