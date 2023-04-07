export const Images = {
    Logo: require('../assets/Images/Logo.png'),
    Featured: require('../assets/Images/Featured.png'),
    Variant: require('../assets/Images/variant.png'),
    Category: {
        Electronics: require('../assets/Images/Cat1.png'),
        Grocery: require('../assets/Images/Cat2.png'),
        Pharmacy: require('../assets/Images/Cat3.png'),
        Fashion: require('../assets/Images/Cat4.png'),
        Healthcare: require('../assets/Images/Cat5.png'),
        Education: require('../assets/Images/Cat6.png'),
    },
    Banner: {
        MobileSale: require('../assets/Images/Banner2.png'),
        HeadphoneSale: require('../assets/Images/Banner1.png')
    },
    Products: {
        headphones: require('../assets/Images/Products/headphones.png'),
        oranges: require('../assets/Images/Products/oranges.png'),
        apple: require('../assets/Images/Products/apple.png'),
        moong: require('../assets/Images/Products/moong.png'),
        suit: require('../assets/Images/Products/suit.png'),
        kurta: require('../assets/Images/Products/kurta.png'),
    }

}


export const Categories = [
    { title: 'Electronics', image: Images.Category.Electronics },
    { title: 'Grocery', image: Images.Category.Grocery },
    { title: 'Pharmacy', image: Images.Category.Pharmacy },
    { title: 'Fashion', image: Images.Category.Fashion },
    { title: 'Healthcare', image: Images.Category.Healthcare },
    { title: 'Education', image: Images.Category.Education }
]

export const EcomData = {
    new_arrival: [
        {
            title: "TMA-2 HD Wireless",
            image: Images.Products.headphones,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Orange Nagpur- 1kg",
            image: Images.Products.oranges,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Blue Churidar Suit",
            image: Images.Products.suit,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Apple Shimla- 2 kg",
            image: Images.Products.apple,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Blue Churidar Suit",
            image: Images.Products.suit,
            price: 1500,
            discount: 500,
            rating: 4.6
        },
    ],
    suggested: [
        {
            title: "Apple Shimla- 2 kg",
            image: Images.Products.apple,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "TMA-2 HD Wireless",
            image: Images.Products.headphones,
            price: 100,
            rating: 4.6
        }, {
            title: "Orange Nagpur- 1kg",
            image: Images.Products.oranges,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Blue Churidar Suit",
            image: Images.Products.suit,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Apple Shimla- 2 kg",
            image: Images.Products.apple,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "Blue Churidar Suit",
            image: Images.Products.suit,
            price: 1500,
            discount: 500,
            rating: 4.6
        },
    ],
    trending: [
        {
            title: "TMA-2 HD Wireless",
            image: Images.Products.headphones,
            price: 1500,
            discount: 500,
            rating: 4.6
        }, {
            title: "TMA-2 HD Wired",
            image: Images.Products.headphones,
            price: 1500,
            rating: 4.6,
            variants: 3
        }, {
            title: "Dolby Atmos",
            image: Images.Products.headphones,
            price: 2500,
            discount: 500,
            rating: 5
        }, {
            title: "HomeTheater",
            image: Images.Products.headphones,
            price: 150000,
            rating: 4.6,
            variants: 7
        },
    ],
    Grocery: [
        {
            title: "Moong Dal    - 1 KG ",
            image: Images.Products.moong,
            price: 150,
            discount: 50,
            rating: 4.6,
        }, {
            title: "Moong Dal    - 5 KG "
            ,
            image: Images.Products.moong,
            price: 1500,
            // discount={500,
            rating: 4.6,
        }
    ],
    Fashion: [
        {
            title: "Blue Churidar Suit",
            image: Images.Products.suit,
            price: 1500,
            discount: 500,
            rating: 4.6,
        }, {
            title: "Green Flared Kurta",
            image: Images.Products.kurta,
            price: 1500,
            rating: 4.6,
            variants: 3,
        }, {
            title: "Green Flared Kurta",
            image: Images.Products.kurta,
            price: 1500,
            rating: 4.6,
        }, {
            title: "Blue Churidar Suit",
            image: Images.Products.suit,
            price: 1000,
            discount: 500,
            rating: 4.6,
        }
    ],
    FruitsNVegs: [
        {
            title: "Orange Nagpur- 1 Kg",
            image: Images.Products.oranges,
            price: 150,
            discount: 50,
            rating: 4.6,
        },
        {
            title: "Apple Shimla- 1kg",
            image: Images.Products.apple,
            price: 100,
            rating: 4.6,
            variants: 3,
        },
        {
            title: "Orange Nagpur- 5Kg",
            image: Images.Products.oranges,
            price: 2500,
            discount: 50,
            rating: 4.6,
        },
        {
            title: "Apple Shimla- 5kg",
            image: Images.Products.apple,
            price: 2000,
            rating: 4.6,
            variants: 3,
        }
    ]


}