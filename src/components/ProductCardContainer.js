export default ProductCardContainer = ({ item, index }) => {
	return (
		<ProductCard
			title={item.title}
			image={item.image}
			price={item.price}
			discount={item.discount}
			rating={item.rating}
			variants={item.variants}
		/>
	)
}