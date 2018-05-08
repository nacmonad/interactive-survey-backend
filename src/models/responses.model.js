// responses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const responses = new Schema({
    text: { type: String },
    scaleA: {type: Number, min: 0, max: 100 },
    scaleB: {type: Number, min: 0, max: 100 },
    scaleC: {type: Number, min: 0, max: 100 },
    scaleD: {type: Number, min: 0, max: 100 },
    group: { type: Number, min: 1, max: 11, required: true },
    location: { type: String, required: true},
    questionId: {type: Number, min: 1, max: 3, required: true },
    questionType: {type: String, enum: ['text', 'scale'], required: true},
    isReviewed: {type: Boolean, required: true, default: false}
  }, {
    timestamps: true
  });

  return mongooseClient.model('responses', responses);
};
