import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constant';

const initialTodoState = {
    isLoading: false,
    isSuccess: false,
    todoDataList: [],
};

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todoDataList: [...state.todoDataList, {
                    status: false,
                    todoText: action.payload,
                    id: Math.random()
                }]
            }
        }

        case DELETE_TODO: {
            return {
                ...state,
                todoDataList: state.todoDataList.filter(item => item.id !== action.payload)
            }
        }

        case TOGGLE_TODO: {
            return {
                ...state,
                todoDataList: state.todoDataList.map(item => {
                    if (item.id == action.payload) {
                        return { ...item, status: !item.status }
                    } else {
                        return item;
                    }
                }
                )
            }
        }

        default:
            {
                return state
            }
    }
}