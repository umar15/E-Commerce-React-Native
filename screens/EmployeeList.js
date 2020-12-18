import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Employees = [
	{
		id: 1,
		name: "susan smith",
		job: "web developer",
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
	},
];

const EmployeeList = ({ navigation }) => {
	const [employees, setEmployees] = useState(Employees);
	return (
		<div>
			<h1>Employees</h1>
			<Text>
				{employees.map((employee) => (
					<TouchableOpacity key={employee.id}>
						{" "}
						onPress=
						{() => navigation.navigate("EmployeeDetails", employee)}
						<Image
							source={{ uri: employee.image }}
							style={{ width: 40, height: 40 }}
						/>
						<Text>{employee.name}</Text>
						<Text>{employee.job}</Text>
					</TouchableOpacity>
				))}
			</Text>
		</div>
	);
};

export default EmployeeList;
