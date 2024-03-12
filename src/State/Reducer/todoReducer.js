const initState = {
  todos: []
};

const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_NEW_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    default:
      return state;
  }
};

export default todoReducer;
