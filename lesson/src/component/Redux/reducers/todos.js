const init = [
    {
        id: 1,
        content: "Learn React",
        completed: true
    },
    {
        id: 2,
        content: "Learn Redux",
        completed: false
    },
    {
        id: 3,
        content: "Learn React-Redux",
        completed: false
    }
]

const todosReducer = (state = init, action) => {
    let newState = [...state];
    console.log(state, action);
    switch (action.type) {
        case "CREATE_TODO":
            newState = [...newState,
            { id: Date.now(), content: action.content, completed: false }];
            return newState;
        case "COMPLETE_TODO":
            const index = newState.findIndex(item => { return item.id === action.id });
            newState[index].completed = true;
            console.log(newState)
            return newState;
        case "UNDO_TODO":
            const index2 = newState.findIndex(item => { return item.id === action.id });
            newState[index2].completed = false;
            return newState;
        case "DELETE_TODO":
            newState = newState.filter(item => { return item.id !== action.id });
            return newState;
        default:
            return state;
    }
}

export default todosReducer;