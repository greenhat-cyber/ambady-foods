const express = require("express");
const ProductModel = require("../models/ProductSchema");

const router = express.Router();

router.get("/list", (req, res) => {
    // Fetch the list of products from the database
    ProductModel.find()
        .then((products) => {
            res.json({
                results: products,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "Failed to fetch products.",
            });
        });
});

router.post("/add", (req, res) => {
    const { title, description, wishList, price, images, image } = req.body;

    // Create a new product document using the ProductModel
    const newProduct = new ProductModel({
        title,
        description,
        wishList,
        price,
        images,
        image,
    });

    // Save the new product to the database
    newProduct
        .save()
        .then((product) => {
            res.status(201).json({
                message: "Product created successfully.",
                product,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "Failed to create product.",
            });
        });
});


module.exports = router;
