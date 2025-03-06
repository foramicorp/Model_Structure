const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true
    },
    Image: {
        type: [String],  // Fixed incorrect array definition
        required: true
    },
    Location: {
        Country: String,
        State: String,
        City: String,
        Address: String
    },
    Amenities: {
        type: [String],
        required: true
    },
    Ratings: {
        type: Number,
        min: 1,
        max: 5
    },
    Ratingscount: {
        type: Number,
        default: 0
    },
    Reviews: {
        type: [String],
        default: []
    },
    HostedBy: {
        hostId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",  // Assuming a 'User' model exists
            required: true
        },
        hostType: {
            type: String,
            required: true
        },
        HostingExperience: {
            type: String
        }
    },
    Specialities: {
        type: [String],
        required: true
    },
    Description: {
        type: String,
        required: true
    },

    // PRICING MODEL 
    PricePerNight: {
        type: Number,
        required: true
    },
    DiscountPercentage: {
        type: Number,
        default: 0  // Optional default value
    },
    CleaningFee: {
        type: Number,
        required: true  
    },
    AirBnbServiceFee: {
        type: Number,
        required: true
    },
    TotalPrice: {
        type: Number,
        required: true
    },

    // BOOKING MODEL
    CheckIn: {
        type: Date,
        required: true
    },
    CheckOut: {
        type: Date,
        required: true
    },
    TotalGuest: {
        type: Number,
        required: true,
        min: 1
    },
    GuestType: {
        Adults: { type: Number, default: 0 },
        Children: { type: Number, default: 0 },
        Infants: { type: Number, default: 0 },
        Pets: { type: Number, default: 0 }
    }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
