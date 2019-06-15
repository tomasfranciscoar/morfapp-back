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
    // required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Amateur', 'Semi-Pro', 'Professional', 'World Class']
  },
  image: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);