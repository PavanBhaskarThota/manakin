

const initialState = {

  isLoading: false,
  isError: false,
  isAuth: false,
  users: [],
}


export const reducer = (state=initialState, {type, payload}) =>{

  switch(type){
    default:
      return state;
  }
}