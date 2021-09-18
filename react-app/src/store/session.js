import { getUsers } from './users'
// constants
const SET_USER = 'session/SET_USER';
// const DEMO_USER = 'session/DEMO_USER';
const REMOVE_USER = 'session/REMOVE_USER';

// action creators
const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

// const demoUser = (userId) => ({
//     type: DEMO_USER,
//     userId
// })

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null };

// thunk action creators
export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
        'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
        return;
        }

        dispatch(setUser(data));
    }
}

export const demo = (userId) => async (dispatch) => {
    const response = await fetch(`/api/auth/demo/${userId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(setUser(data))
    }
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        email,
        password
        })
    });


    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data))
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

}

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/auth/logout', {
        headers: {
        'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        dispatch(removeUser());
    }
};


export const signUp = (firstName, lastName, username, email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username,
            email,
            password,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data))
        dispatch(getUsers());
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}



export const updateUser = (firstName, lastName, username, email, password, imgFile, userId) => async (dispatch) => {

    const form = new FormData()
    form.append("first_name", firstName)
    form.append("last_name", lastName)
    form.append("username", username)
    form.append("email", email)
    form.append("password", password)
    form.append("img_file", imgFile)
    form.append("user_id", userId)

    const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        body: form
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data))
        dispatch(getUsers());
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};

// export const updateUser = (firstName, lastName, username, email, password, imgFile, userId) => async (dispatch) => {

//     const response = await fetch(`/api/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             first_name: firstName,
//             last_name: lastName,
//             username,
//             email,
//             password,
//             img_file: imgFile,
//             user_id: userId
//         }),
//     });

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(setUser(data))
//         dispatch(getUsers());
//         return null;
//     } else if (response.status < 500) {
//         const data = await response.json();
//         if (data.errors) {
//             return data.errors;
//         }
//     } else {
//         return ['An error occurred. Please try again.']
//     }
// };

export const deleteUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/auth/${userId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeUser());
        dispatch(getUsers());
        return null;
    } else {
        return "Uh oh, guess you're stuck with us, haha!"
    }
};

export const addToPath = (lessonId, userId) => async (dispatch) => {
    const response = await fetch('/api/aspirations/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lesson_id: lessonId,
            user_id: userId,
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data))
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const editAspiration = (aspirationId) => async(dispatch) => {
    const response = await fetch(`/api/aspirations/${aspirationId}`, {
        method: 'PUT'
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data))
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const deleteAspiration = (aspirationId) => async (dispatch) => {
    const response = await fetch(`/api/aspirations/${aspirationId}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data))
        return null;
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload }
        // case DEMO_USER:
            // const user = state[action.userId]
            // return { user: user }
            // return { user: action.payload }
        case REMOVE_USER:
            return { user: null }
            // delete stateCopy.user;
            // return stateCopy;
        default:
            return state;
    }
}
