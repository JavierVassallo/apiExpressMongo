const autorSchema = require("../../models/autorSchema");
const publicacionesSchema = require("../../models/publicacionesSchema");
const mongoose = require("mongoose");
const { Schema } = mongoose;

let unionController = {};

/* GET */

unionController.getUnion = async () => {
  const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
  });

  const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: "Person" },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
  });

  const Story = mongoose.model("Story", storySchema);
  const Person = mongoose.model("Person", personSchema);

  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: "Ian Fleming",
    age: 50,
  });

  //return await author.save();
  const story1 = new Story({
    title: "Casino Royale",
    author: "642626c1729a512bf94bdb6c", // assign the _id from the person
  });

  const story2 = new Story({
    title: "pepe el visionario",
    author: "642626c1729a512bf94bdb6c", // assign the _id from the person
  });

  return await story2.save();
  /*return await Story.findOne({ title: "Casino Royale" })
    .populate("author")
    .exec();*/
};

module.exports = unionController;
