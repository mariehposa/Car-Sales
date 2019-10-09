import * as types from './actionTypes';

const initialValue = 0;
export function carReducer(count = initialValue, action) {
    switch(action.type) {
        case types.ADD:
            return count + 1;
    }
}