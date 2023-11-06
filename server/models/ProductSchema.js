const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    wishList: {
        type: Boolean,
    },
    price: {
        type: String,
        require: true,
    },
    images: {
        type: Array,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
