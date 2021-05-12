import { ADD_TODO, DELETE_TODO, SEARCH_TODO, UPDATE_TODO } from "./Action";

const initState = {
  task: [
    {
      id: 1,
      description: "je prépare mes etude ",
      isDone: true,
    },
    {
      id: 2,
      description: "j'assiste ma formation",
      isDone: true,
    },
    {
      id: 3,
      description: "je prépare le plan de révision",
      isDone: false,
    },
    {
      id: 7,
      description: " la collection des informations",
      isDone: true,
    },
    {
      id: 4,
      description: "je visite mes camarades ",
      isDone: false,
    },
    {
      id: 5,
      description: "je fais des recherches ",
      isDone: false,
    },
    {
      id: 6,
      description: "je fais le design pour mon app",
      isDone: true,
    },
  ],
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TODO:
      console.log(state);
      const newTasks = state.task.filter((task) => task.id !== action.payload);
      console.log({ newTasks });
      return { ...state, task: newTasks };

    case SEARCH_TODO:
      state = initState;
      const filtredTasks = state.task.filter(
        (task) => task.isDone === action.payload
      );
      return { ...state, task: filtredTasks };

    case UPDATE_TODO:
      const updateTodo = [...state];
      let index = -1;
      for (let i = 0; i < updateTodo.length; i++) {
        index++;
        if (updateTodo[i].id === action.payload.id) {
          break;
        }
      }

      if (index !== -1) {
        updateTodo[index] = action.payload;
        return updateTodo;
      }
      break;
    default:
      return state;
  }
};

export default Reducer;
