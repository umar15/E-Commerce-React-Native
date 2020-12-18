import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductDetails = ({ route }) => {
	const { p_name, price, image } = route.params.product;
	return (
		<View>
			<Text>Product details</Text>
			<View>
				<Text>{p_name}</Text>
				<Text>{price}</Text>
			</View>
		</View>
	);
};

export default ProductDetails;

const styles = StyleSheet.create({});
