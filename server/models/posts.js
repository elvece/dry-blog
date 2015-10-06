var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var Schema = mongoose.Schema;


var Post = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  company: String,
  img: Array,
  content: [],
  social: {
    gitHub: String,
    website: String,
    twitter: String,
    linkedIn: String,
    instagram: String,
    facebook: String
  }
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/posts');
module.exports = mongoose.model('posts', Post);
