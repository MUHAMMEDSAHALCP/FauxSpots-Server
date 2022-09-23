const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        turf_creator_id: { type: String },
        turf_name: { type: String },
        turf_place: { type: String },
        turf_muncipality: { type: String },
        turf_district: { type: String },
        turf_catogery:
        {
            turf_cricket: { type: String },
            turf_football: { type: String },
            turf_badminton: { type: String },
            turf_yoga: { type: String },
        }
        ,
        turf_type:
        {
            turf_sevens: { type: String },
            turf_sixes: { type: String },
        }
        ,
        turf_isAvailale: { type: String },
        amenities:
        {
            turf_washroom: { type: String },
            turf_water: { type: String },
            turf_dressing: { type: String },
            turf_parcking: { type: String },
            turf_gallery: { type: String },
            turf_cafeteria: { type: String },
        }
        ,
        turf_images:
        {
            turf_images1: { type: String },
            turf_images2: { type: String },
            turf_images3: { type: String },
        }
        ,
        turf_time:
        {
            time_morning: { type: String },
            time_afternoon: { type: String },
            time_evening: { type: String },
        }

    }
)

const model = mongoose.model("turfList", productSchema)

module.exports = model