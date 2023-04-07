import { Text, Image, View, StyleSheet } from "react-native"
import React from 'react';
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Images } from "../constants";

const imageSize = Dimensions.get('screen').width * .35

export default ProductCard = ({ title, image, price, discount, rating, variants }) => {

	return (
		<View style={styles.cardContainer}>
			<View style={styles.subContainer}>
				<Image source={image} style={styles.image} />
				<Text style={styles.title} >
					{title}
				</Text>

				<View style={styles.priceBox}>
					<Text style={styles.price}>
						₹ {price}
					</Text>

					{discount &&
						<>
							<Text style={styles.sellingPrice}>
								₹ {price + discount}
							</Text>

							<Text style={styles.discount}>
								{' - ₹'} {discount}
							</Text>
						</>
					}

				</View>

				<View style={styles.footer}>
					<FontAwesome
						name="star"
						color={'gold'}
						size={15}

					/>
					<Text style={{ paddingLeft: 5 }}>
						{rating}
					</Text>

					{variants &&
						<View style={{ flex: 1 }} >
							<Image
								source={Images.Variant}
								resizeMode={'contain'}
								style={styles.variantBox}
							/>
							<Text style={styles.variantText}>
								{variants} Variants
							</Text>
						</View>
					}
				</View>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		width: Dimensions.get('screen').width * .5,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	subContainer: {
		backgroundColor: 'white',
		width: '100%',
		flex: 1,
		borderRadius: 10,
		elevation: 10,
		alignItems: 'center'
	},
	title: {
		width: '90%',
		fontWeight: 'bold',
		overflow: 'hidden',
	},
	priceBox: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'flex-start',
		width: '90%',
	},
	price: {
		fontWeight: 'bold',
		paddingEnd: 10
	},
	discount: {
		color: '#EC4E0F',
	},
	sellingPrice: {
		textDecorationStyle: 'solid',
		textDecorationLine: 'line-through',
	},
	variantBox: {
		height: 25,
		width: 80,
		position: 'absolute',
		top: -11,
		right: -8
	},
	variantText: {
		position: 'absolute',
		right: -5,
		top: -7,
		color: 'white',
		fontSize: 12
	},
	footer: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10
	},
	image: {
		height: imageSize,
		width: imageSize,
		margin: 10
	}

})