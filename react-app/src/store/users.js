const LOAD_USERS = "comment/LOAD_USERS";

const loadUsers = (data) => ({
    type: LOAD_USERS,
    data
});

export const getUsers = () => async (dispatch) => {
    const response = await fetch("/api/users/")

    if (response.ok) {
        const data = await response.json();
        dispatch(loadUsers(data))
        return null;
    }
};

const initialState = {}

export default function reducer(state = initialState, action ) {
    switch (action.type) {
        case LOAD_USERS:
            let stateCopy = {}
            action.data.users.forEach(user => {
                stateCopy[user.id] = user
            });
            return stateCopy
        default:
            return state;
    };
};
