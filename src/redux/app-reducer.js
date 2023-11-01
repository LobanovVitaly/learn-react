import {getAuthInfo} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state= initialState, action) => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitialized = () => {
    return {type: INITIALIZED_SUCCESS}
}

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthInfo());

    console.log(promise)

    //dispatch(somethingElse);
    // может быть несколько диспатчей  с какими то санками
    // нужно дождать завершения всех санок

    // чтобы дождаться диспатча всех санок (например, завершения запросов api), нужно возвращать их результат (then), тогда промис будет возвращаться наружу
    // т.к. в getAuthInfo есть запрос с axios, он возвращает then, а then тоже возвращает promise (этот then и нужно вернуть)

    // поэтому все dispatch можно завернуть в массив и с помощью Promise.all дождаться выполнения всех dispatch

    Promise.all([promise])
        .then(() => {
                dispatch(setInitialized())
            });
}

export default appReducer;