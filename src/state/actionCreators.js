import * as types from './actionTypes';

export function add(item) {
    return { 
        type: types.ADD,
        payload: {feature: item}
    };
}

export function remove(item) {
    return {
        type: types.REMOVE,
        payload: {xxx: item}
    }
}