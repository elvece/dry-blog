var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;


var Post = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  company: String,
  img: String,
  homeImage: String,
  content: [],
  summary: String,
  social: {
    github: String,
    website: String,
    twitter: String,
    linkedin: String,
    instagram: String
  }
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/posts');
module.exports = mongoose.model('posts', Post);

//for heroku in .env
// mongodb://heroku_2f6rnbss:ndlmvji6tfpdre47nkan86oo9l@ds035674.mongolab.com:35674/heroku_2f6rnbss
