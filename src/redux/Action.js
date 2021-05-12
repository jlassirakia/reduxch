export const ADD_TODO = "ADD_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const SEARCH_TODO = "SEARCH_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(state) {
  return {
    type: ADD_TODO,
    payload: state,
  };
}

export function delete_todo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function searchToDo(isDone) {
  return {
    type: SEARCH_TODO,
    payload: isDone,
  };
}

export function update_ToDo(task) {
  return {
    type: UPDATE_TODO,
    payload: task,
  };
}
