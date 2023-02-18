import { createContext , useReducer , useContext} from 'react'

export const    UserContext = createContext()

export const usersReducer = (state, action) => {
   switch (action.type){
    case 'SET_USERS':
        return {
            admins: action.payload
        }
  
    case 'DELETE_USERS':
        return{
            users: state.admins.filter((w) => w._id !== action.payload._id)
        }
    case 'PATCH_USERS':
        return {
                users: action.payload
            }
    case 'UPDATE_STATUS':
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
        return { ...state, currentUser: action.payload };
    default:
        return state
   }
}


const Context = createContext();
export const useValue = () => {
    return useContext(Context);
  };
  
  
  
export const UserContextProvider =  ({ children}) => {
    const [state, dispatch]  = useReducer(usersReducer, {
        admins: null
    })
   
    return(
        <UserContext.Provider value={{...state, dispatch}}>
          { children}
        </UserContext.Provider>
    )
}