// responses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const responses = new Schema({
    text: { type: String, required: true },
    group: { type: Number, required: true, default:0},
    questionIds: {type: Array, required: false, default:[]},
    isReviewed: {type: Boolean, required: true, default: false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('responses', responses);
};
