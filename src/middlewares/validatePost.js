const validatePost = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
 
    if (!title.length || !content.length || !categoryIds.length) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }
  
    return next();
  };
  
  module.exports = {
    validatePost,
  };