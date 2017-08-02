/**
 * Created by Waviq on 7/28/17.
 */

let Product = require('./../models/product');
let mongoose = require ('mongoose');

mongoose.connect('localhost:27017/shopping');


let seedProduct = (req, res) => {
    const products = [
        {imagePath: 'images/shop/apple.png', title: 'Apple', description: 'Apple groak!', price: 10},
        {imagePath: 'images/shop/kampak.png', title: 'Video Game', description: 'Awesome Game!', price: 20},
        {imagePath: 'images/shop/mumi.png', title: 'Mumi Game', description: 'Mumi Game!', price: 15},
        {imagePath: 'images/shop/apple.png', title: 'Apple Game', description: 'Apple Game!', price: 15}
    ]

    for (product of products){
        let newProduct = new Product(product);
        newProduct.save();
    }

    res.send('Database seeded');
};


/*let products = [
    new Product({
        imagePath: 'images/shop/apple.png',
        title: 'Apple',
        description: 'Apple groak!',
        price: 10
    }),
    new Product({
        imagePath: 'images/shop/kampak.png',
        title: 'Video Game',
        description: 'Awesome Game!',
        price: 20
    }),
    new Product({
        imagePath: 'images/shop/mumi.png',
        title: 'Mumi Game',
        description: 'Mumi Game!',
        price: 15
    }),
    new Product({
        imagePath: 'images/shop/sky.png',
        title: 'Sky Game',
        description: 'Sky Game!',
        price: 15
    }),
    new Product({
        imagePath: 'images/shop/apple.png',
        title: 'Apple Game',
        description: 'Apple Game!',
        price: 15
    })
];*/

/*
let done = 0;

for (let i=0; i < products.length; i++){
    products[i].save((err, result) => {
        done++;
        if (done === products.length){
            exit()
        }
    });
}

let exit = () => {
    mongoose.disconnect();
};*/
