import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "./screens/ProductList";
import EmployeeList from "./screens/EmployeeList";
import OrderList from "./screens/OrderList";
import OrderDetails from "./screens/orderDetails";
import EmployeeDetails from "./screens/EmployeeDetails";
import ProductDetails from "./screens/ProductDetails";

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<TouchableOpacity
				title="Products"
				onPress={() => navigation.navigate("Products")}
			/>
			<TouchableOpacity
				title="Employees"
				onPress={() => navigation.navigate("Employees")}
			/>
			<TouchableOpacity
				title="Orders"
				onPress={() => navigation.navigate("Orders")}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Products" component={ProductList} />
				<Stack.Screen name="Employees" component={EmployeeList} />
				<Stack.Screen name="Orders" component={OrderList} />
				<Stack.Screen name="ProductDetails" component={ProductDetails} />
				<Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
				<Stack.Screen name="OrderDetails" component={OrderDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
