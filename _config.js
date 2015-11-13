module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
  MONGOLAB_URI: process.env.MONGOLAB_URI || 'mongodb://localhost/dry-users' && 'mongodb://localhost/dry-posts',
  SALT_WORK_FACTOR: 10
};


//mongodb://localhost/dryUsers' && 'mongodb://localhost/dryPosts
