// questions-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const questions = new Schema({
    text: { type: String, required: true },
    isVerified: { type: Boolean, default: false, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('questions', questions);
};
