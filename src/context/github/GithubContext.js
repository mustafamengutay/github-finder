import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer'; // import it to use reducer

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    // instead we use a state object for reducers (like a different type of states).
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };

    // reducer hook
    const [state, dispatch] = useReducer(githubReducer, initialState);

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;