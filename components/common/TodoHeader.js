import React from "react"
import {
	TouchableOpacity
} from 'react-native';
import { Header } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons';


const RightComponent = ({icon, onIconClicked}) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity onPress={
			(onIconClicked ? onIconClicked : () => navigation.navigate("추가")) }>
			<Ionicons name={(icon ? icon : "ios-add")} size={24} color="white" />
		</TouchableOpacity>
	)
}

const TodoHeader = ({title, icon, onIconClicked}) => {

    return (
        <Header 
            centerComponent={{ text: (title ? title : "볼봇의 TODO"), style: { color: '#fff' } }}
            rightComponent={<RightComponent icon={icon} onIconClicked={onIconClicked}/>} />
    )
}

export default TodoHeader