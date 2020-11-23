import React from "react"

import {
    Text, View,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

const TodoListItem = ({data, index, onRemove}) => {
    return (
        <View style={Styles.Item}>
            <View style={Styles.Index}>
                <Text style={{color: "white"}}>{index}</Text>
            </View>
            <View style={Styles.Content}>
                <Text style={{color: "black"}}>{data}</Text>
            </View>
            <TouchableOpacity style={Styles.Remove} onPress={(e) => onRemove(data)}>
                <Ionicons name="trash-outline" size={16} color="white" />
            </TouchableOpacity>
        </View>

    )
}

const Styles = StyleSheet.create({
    Item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        margin: 8
    },
	Index: {
        backgroundColor: "#2c3e50",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 40
    },
    Content: {
        flex: 5,
        backgroundColor: "#ecf0f1",
        justifyContent: "center",
        padding: 16,
        height: 40
    },
    Remove: {
        backgroundColor: "#e74c3c",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 40
    }
});

export default TodoListItem