import React, { useState } from "react"

import {
    SafeAreaView,
    StyleSheet,
    Text, View
} from "react-native"
import TodoHeader from "./common/TodoHeader"
import { Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TodoList = ({navigation}) => {
    const [text, setText] = useState("")

    return (
        <SafeAreaView>
            <TodoHeader title="할 일 추가" icon="save-outline" onIconClicked={
                () => {
                    navigation.navigate("목록", {addTodo: text})
                    setText("")
                }
            } />

            <View>
                <Text style={Styles.Title}>할 일을 입력하세요.</Text>
                <Input 
                    placeholder="할 일을 입력하세요."
                    leftIcon={<Ionicons name="pencil-outline" size={18} color="#2d3436" /> }
                    value={text}
                    onChangeText={value => setText(value)}
                    style={{fontSize: 12}} />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    Title: {
        color: "#2d3436",
        fontSize: 20,
        textAlign: "center",
        margin: 16
    }
})

export default TodoList