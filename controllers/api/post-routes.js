const router = require('express').Router();
const { Post, Category, User, Comment } = require('../../models');

//The `/api/posts` endpoint

router.get('/', (req, res) => {
  //Finds all posts
  Post.findAll({
    order: [['created_at', 'DESC']],
    attributes: ['id', 'recipe_name', 'recipe_body', 'created_at'],
    //Includes its associated Category and User
    include: [
      {
        model: Comment,
        attributes: ['id', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['id', 'username']
      },
      {
        model: Category,
        attributes: ['id', 'category_name']
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
    //Includes its associated Categories and User
    include: [
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

router.post('/', (req, res) => {
  //Creates a new post
  Post.create(req.body)
    .then((newPost) => res.json(newPost))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  //Updates a post by its `id` value
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
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

router.delete('/:id', (req, res) => {
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
