
import { ADD_TASK, DELETE_TASK, DONE_TASK } from "./ActionType";

const initialState = {
  tasks: [
    {
        id: 1,
        title: 'Complete React Project',
        description: 'Finish the React project by the end of the week.',
        completed: false,
      },
      {
        id: 2,
        title: 'Write Blog Post',
        description: 'Write a blog post about React development.',
        completed: true,
      },
  ]
};

const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state, tasks: [...state.tasks, payload]
      };
    case DONE_TASK:
      return {
        ...state, tasks: state.tasks.map((el) => el.id === payload ? { ...el, completed: !el.completed } : el)
      };
   
    case DELETE_TASK:
      return {
        ...state, tasks: state.tasks.filter((el) => el.id !== payload)
      };
    default:
      return state;
  }
};

export default tasksReducer;
