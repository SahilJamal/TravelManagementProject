import mongoose from "mongoose";

const activitiesSchema = new mongoose.Schema(
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
    },

    {
        timestamps: true,
    }
);

const Activities = mongoose.model("Activities", activitiesSchema);

export default Activities;
