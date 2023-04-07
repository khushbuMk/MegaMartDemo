import { Text, Image, View } from "react-native"
import React from 'react';
import { StyleSheet } from "react-native";

export default function CategoryItem({ item, index }) {
	const { title, image } = item
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.image} />
			<Text style={styles.text}>
				{title}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	image: {
		height: 60,
		width: 60
	},
	text: {
		fontWeight: 'bold',
		fontSize:20
	}
})