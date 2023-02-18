import { createContext , useReducer , useContext} from 'react'

export const AdminsContext = createContext()

export const adminsReducer = (state, action) => {
   switch (action.type){
    case 'SET_ADMINS':
        return {
            admins: action.payload
        }
    case 'CREATE_ADMIN':
         return {
            admins: [action.payload,...state.admins]
         }
    case 'DELETE_ADMIN':
        return{
            admins: state.admins.filter((w) => w._id !== action.payload._id)
        }
    case 'PATCH_ADMINS':
        return {
                admins: action.payload
            }
    
    default:
        return state
   }
}


const Context = createContext();
export const useValue = () => {
    return useContext(Context);
  };
  
  
  
export const AdminsContextProvider =  ({ children}) => {
    const [state, dispatch]  = useReducer(adminsReducer, {
        admins: null
    })
   
    return(
        <AdminsContext.Provider value={{...state, dispatch}}>
          { children}
        </AdminsContext.Provider>
    )
}