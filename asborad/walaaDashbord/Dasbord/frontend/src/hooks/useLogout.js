import { useAuthContext } from "./useAuthContext"
// import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
   // const { dispatch: workoutsDispatch }  = useWorkoutsContext()

   const logout = () => {
     //send request to backend how do we logout of the application
     //remove user from stotage
     localStorage.removeItem('admin')

     //dispatch logout action
     dispatch({type: 'LOGOUT'})
     //workoutsDispatch({ type: 'SET_WORKOUTS', payload: null})
  }

   return { logout}
}