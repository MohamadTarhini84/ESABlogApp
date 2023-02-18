

// import user from '../pages/User'

export const getUsers = async (dispatch) => {
   const result = await fetch('/api/users',{
   method: 'GET' }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_USERS', payload: result });
  }
};

// export const updateStatus = async (updatedFields, _id, dispatch) => {
//   const response= await fetch('/api/users/' + _id, {
//     method:'PATCH'
//    })
//    const json = await response.json()

//    if (response.ok){
//     dispatch({type: 'UPDATE_USERS' , payload:json})
//    }
   
//   };

export const updateStatus = (updatedFields, _id, dispatch) => {
  return fetch('/api/users')(
    {
      url: `${'/api/users'}/updateStatus/${_id}`,
      method: 'PATCH',
      body: updatedFields,
    },
    dispatch
  );
};

  
