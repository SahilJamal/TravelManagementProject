import mongoose from "mongoose";
const detailsSchema = mongoose.Schema(
    {
      detail_price: { type: String, required: true },
      detail_title: { type: String, required: true },
      detail_description: { type: String, required: true },
      images:{ type:String}
    }
  );
  const itenarySchema = mongoose.Schema(
    {
      title : { type: String, required: true },
      list : { type: Array, required: true },
      note : { type: String, required: true }
    }
  );
const packageSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        thumbnail_image: {
            type: String
        },
        price: {
            type: Number
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        category: {
            type: String
        },
        details : [detailsSchema],
        pickUp_drop :{
            type:String
        },
        duration:{ 
            type:String 
        },
        inclusions:{
            type: Array
        },
        itinerary : [itenarySchema],
        inclusionDetail:{
            type:[String]
        },
        exclusionDetail:{
            type:[String]
        },
        note:{
            type:String
        }
    },

    {
        timestamps: true,
    }
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
