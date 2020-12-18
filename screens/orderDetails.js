import React from "react";
import { View, Text } from "react-native";

const orderDetails = ({ route }) => {
	const {
		order_no,
		name,
		price,
		customer,
		date,
		shipping_status,
	} = route.params.order;
	return (
		<View>
			<Text>OrderDetails</Text>
			<View>
				<Text>{order_no}</Text>
				<Text>{name}</Text>
				<Text>{price}</Text>
				<Text>{customer}</Text>
				<Text>{date}</Text>
				<Text>{shipping_status}</Text>
			</View>
		</View>
	);
};

export default orderDetails;
