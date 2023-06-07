import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer"


const INITIAL_STATE = {
    user: {
        _id: "643d5985749b31fe3d44f821",
        username: "noka",
        email:"boss@gmail.com",
        profilePicture:"Person/nora.jpg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []

    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider value = {{
            user:state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}