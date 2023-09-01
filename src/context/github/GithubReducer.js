// Reducer is used to consolidate all the state update logic outside your component 
// in a single function

// action is an object that is used to tell info about what happened. Its type is mostly a string
const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            // the returned object will update the initialState object inside context
            // so it should be an object with initialState's props.
            return {
                ...state, // current state values
                users: action.payload, // but update its user.
                loading: false,
            };

        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false,
            };

        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            };

        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false,
            };

        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            };

        default:
            // If there is no action, we return the state bcz we do not wanna change it.
            return state;
    }
};

export default githubReducer;

// If we use reducers, we do not need a useState, we need a useReducer.
// We also need to import the our reducer.
// We put useReducer inside context because our logics inside of it.

// returns a state, and a dispatch function(updates state and trigger a re-render).
// const [state, dispatch] = useReducer(reducer, initialState)

// After switching the reducer, we do not need states, and its methods inside context.
// States should be replaced with an initialState which is an object that stores props
// Set methods should be replaced with dispatch methods.

// dispatch takes an 'action' object which is for reducer's action param. with a type prop, 
// dispatch({
        // type: JOB
        // payload: DATA (if needed)
// })

// Ex of state to reducer

// const [user, setUser] = useState([])
// const [loading, setLoading] = useState(true)

// const initialState = {
//     user: [], // -> stateName: defaultValue
//     loading: true,
// }