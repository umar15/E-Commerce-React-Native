import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmployeeDetails = ({ route }) => {
	const { name, job } = route.params.employee;
	return (
		<View>
			<Text>Employees details</Text>
			<View>
				<Text>{name}</Text>
				<Text>{job}</Text>
			</View>
		</View>
	);
};

export default EmployeeDetails;

const styles = StyleSheet.create({});
