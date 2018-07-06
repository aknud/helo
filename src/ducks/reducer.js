const initialState = {
    username: '',
    password: '',
    profile_pic: '',
    id: 0
}

const UPDATER_FN = 'UPDATER_FN';

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATER_FN:
            return Object.assign({}, state, {id: action.payload, username: action.payload, profile_pic: action.payload })
        default: return state;
    }
}

export function updaterFn(id, username, profile_pic){
    return {
        type: UPDATER_FN,
        payload: {
            id: id,
            username: username,
            profile_pic: profile_pic
        }
    }
}