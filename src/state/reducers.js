import * as types from './actionTypes';

const initialValue = {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
};

export function carReducer(car = initialValue, action) {
    switch(action.type) {
        case types.ADD: {
            console.log(action.payload);
            
            return {
                ...car,
                features: [...car.features, action.payload.feature]
            };
        }
        default:
            return car;
    }
}
