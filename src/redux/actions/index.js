// our async operations, like fetches, will be done here
// redux-thunk will allow us to create more powerful action creators
// that are now not just capable of returning an object, the action,
// but they will be able now to return FUNCTIONS

export const addToCartAction = (book) => ({
  type: 'ADD_TO_CART',
  payload: book,
})

export const removeFromCartAction = (index) => ({
  type: 'REMOVE_FROM_CART',
  payload: index,
})

export const setUserNameAction = (name) => ({
  type: 'SET_USERNAME',
  payload: name,
})
