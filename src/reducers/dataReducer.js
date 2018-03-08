const dataReducer = (state, action)=>{
  switch (action.type){
    case 'LOAD_DATA':
      state = {
        ...state,
        ...action.payload
      };
      break;
    case 'APPEND_DATA':
      const photos = state.photos.concat(action.payload.photos);
      state = {
        ...state,
        ...action.payload,
        photos
      };
      break;
    case 'VIEW':
      state = {
        ...state,
        view: action.payload
      };
      break;

   }
  return state;
};
export default dataReducer;