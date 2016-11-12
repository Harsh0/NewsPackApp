
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var newsDetailsSchema = new Schema({
  author: String,
  title: String,
  description:String,
  url:String,
  urlToImage:String,
  publishedAt:String,
  category:String,
  comment:String,
  UserID:{type:Schema.Types.ObjectId,ref:"userdetails"}
})
module.exports = mongoose.model('newsdetails',newsDetailsSchema);
