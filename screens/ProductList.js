import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Products = [
	{
		id: 1,
		p_name: "Mobile",
		price: 500,
		image: "",
	},
	{
		id: 2,
		p_name: "Earphones",
		price: 100,
		image: "",
	},
	{
		id: 3,
		p_name: "Chager",
		price: 150,
		image: "",
	},
];

const ProductList = ({ navigation }) => {
	const [products, setProducts] = useState(Products);
	return (
		<View>
			<Text>Products</Text>
			<Text>
				{products.map((product) => (
					<TouchableOpacity
						key={product.id}
						onPress={() => navigation.navigate("ProductDetails", product)}
					>
						<Text>{product.p_name}</Text>
						<Text>{product.price}</Text>
					</TouchableOpacity>
				))}
			</Text>
		</View>
	);
};

export default ProductList;
