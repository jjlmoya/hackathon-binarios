exports.createSchemas = function (mongoose) {
  var placeSchema = new mongoose.Schema({
      name: String,
      extension: Number,
      pageUrl: String,
      theme: String,
  });

  var characterSchema = new mongoose.Schema({
      name: String,
      demographicData: Array,
      placeOfBirth: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place',
      },
      alive: Boolean,
      imageUrl: String,
      pageUrl: String,
      theme: String,
  });

  var filmSchema = new mongoose.Schema({
      name: String,
      releaseYear: Number,
      duration: Number,
      storyTimeOrder: Number,
      characters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character',
      }],
      places: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place',
      }],
      imageUrl: String,
      pageUrl: String,
      theme: String,
    });

  return {
    Place: mongoose.model('Place', placeSchema),
    Character: mongoose.model('Character', characterSchema),
    Film: mongoose.model('Film', filmSchema),
  };
}
