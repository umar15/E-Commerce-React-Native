import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Orders = [
	{
		id: 1,
		order_no: Math.floor(Math.random() * 10000000),
		name: "Iphone X",
		price: 1000,
		customer: "Micheal",
		date: "12-12-202",
		shipping_status: "shipped",
	},
	{
		id: 2,
		order_no: Math.floor(Math.random() * 10000000),
		name: "Samsung",
		price: 800,
		customer: "Johnson",
		date: "2-11-20",
		shipping_status: "shipped",
	},
	{
		id: 3,
		order_no: Math.floor(Math.random() * 10000000),
		name: "Huawei",
		price: 500,
		customer: "Will",
		date: "18-12-20",
		shipping_status: "not shipped",
	},
];

const OrderList = ({ navigation }) => {
	const [orders, setOrders] = useState(Orders);
	return (
		<div>
			<h1>Orders</h1>
			<Text>
				{orders.map((order) => (
					<TouchableOpacity
						id={order.id}
						onPress={() => navigation.navigate("OrderDetails", order)}
					>
						<Text>{order.order_no}</Text>
						<Text>{order.name}</Text>
						<Text>{order.price}</Text>
					</TouchableOpacity>
				))}
			</Text>
		</div>
	);
};

export default OrderList;
