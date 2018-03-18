var mongoose =  require('mongoose');

var FileSchema = new mongoose.Schema({
    uploadedAt: {type: Date, default: Date.now},
    originalname: {type: String, required: true},
    path: {type: String, required: true},
    size: {type: String, required: true}
  }, {
    collection: 'files'
});

module.exports = mongoose.model('File', FileSchema);
