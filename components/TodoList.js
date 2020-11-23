import React, { useEffect, useState } from "react"

import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, View
} from "react-native"
import TodoHeader from "./common/TodoHeader"
import TodoListItem from "./TodoListItem"

const TodoList = ({route}) => {
    const [todos, setTodos] = useState([])
    const addTodo = route.params ? route.params.addTodo : null

    // 새로운 아이템 추가 
    useEffect(() => {
        if(addTodo) {
            setTodos([
                ...todos,
                addTodo
            ])
        }
    }, [addTodo])

    const onRemove = data => {
        let newTodos = [...todos]
        newTodos = newTodos.filter(todo => todo !== data)
        setTodos(newTodos)
    }

    return (
        <SafeAreaView>
            <TodoHeader />
            <ScrollView style={{padding: 8}}>
                {
                    todos.map((item, index) => (
                        <TodoListItem index={index+1} data={item} key={index} onRemove={onRemove} />
                    ))
                }
            </ScrollView>
        </SafeAreaView>

    )
}

export default TodoList