import mongoose from "mongoose";
const detailsSchema = mongoose.Schema(
    {
      detail_price: { type: String, required: true },
      detail_title: { type: String, required: true },
      detail_description: { type: String, required: true },
      duration:{ type:String },
      images:{ type:[String]}
    },
    {
      timestamps: true,
    }
  );
const destinationSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        thumbnail_image: {
            type: [String]
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
        details : [detailsSchema]
    },

    {
        timestamps: true,
    }
);

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
