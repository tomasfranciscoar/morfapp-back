const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  ingredients: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Amateur', 'Semi-Pro', 'Professional', 'World Class']
  },
  images: {
    type: String,
    default: "https://topekacivictheatre.com/wp-content/uploads/2019/01/no-image.jpg"
  },
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);