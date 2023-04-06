import { Text, Image, View } from "react-native"
import React from 'react';

export default function CategoryItem( {item, index} ) {
	const { title, image } = item
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
			<Image source={image} style={{ height: 60, width: 60 }} />
			<Text>
				{title}
			</Text>
		</View>
	)
}