const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
// const newPostRoutes = require('./new-post-routes');
// const categoryRoutes = require('./category-routes');
// const tagRoutes = require('./tag-routes');

router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// router.use('/new-post', newPostRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
