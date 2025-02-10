import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Clean the house", completed: false },
    { id: 3, text: "Go for a run", completed: false },
    { id: 4, text: "Finish homework", completed: false },
    { id: 5, text: "Call mom", completed: false },
    { id: 6, text: "Buy groceries", completed: false },
    { id: 7, text: "Walk the dog", completed: false },
    { id: 8, text: "Read a book", completed: false },
    { id: 9, text: "Do laundry", completed: false },
    { id: 10, text: "Write code", completed: false },
];

const TodoContainer = () => {
    const [todos, setTodos] = useState(SAMPLE_TODOS);

    const addTodos = (text) => {
        setTodos([{ id: crypto.randomUUID(), text }, ...todos]);
    };

    const toggleTodoCompleted = (id) => {
        // 1. todos 배열의 각 항목을 순회하고, 수정된 항목을 반환하여 새로운 배열을 만든다.
        const updatedTodos = todos.map((todo) => {
            // 2. 현재 항목의 id가 수정하려는 id와 일치하는지 확인한다.
            if (todo.id === id) {
                // 3. id가 일치하면 completed 상태를 반전시킨 새로운 항목을 반환한다.
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            } else {
                // 4. id가 일치하지 않으면 기존 항목을 그대로 반환한다.
                return todo;
            }
        });

        // 5. 상태를 새로운 배열로 업데이트한다.
        setTodos(updatedTodos);
    };

    // 1. Todo 항목을 삭제하는 함수를 정의한다.
    const deleteTodo = (id) => {
        // 2. 선택된 항목을 제외한 새로운 배열을 생성한다.
        const deleteTodos = todos.filter((todo) => {
            // 조건을 명확히 이해할 수 있도록 if문을 사용한다.
            if (todo.id === id) {
                return false; // 만약 내가 찾는 아이디가 맞다면, false 값을 줘서 삭제한다.
            }

            return true; // 만약 내가 찾는 아이디가 아니라면, true 값을 줘서 유지한다.
        });

        // 3. 새로운 배열로 상태를 업데이트한다.
        setTodos(deleteTodos);
    };

    return (
        <TodoContainerWrapper>
            <TodoDashboard />
            <TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted} deleteTodo={deleteTodo} />
            <TodoForm addTodos={addTodos} />
        </TodoContainerWrapper>
    );
};

const TodoContainerWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export default TodoContainer;
