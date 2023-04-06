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
