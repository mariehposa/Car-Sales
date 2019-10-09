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
            // const newFeatures = car.features.concat(action.payload.feature)
            //console.log(action.payload);
            return {
                ...car, 
                price: car.price + action.payload.feature.price,
                features: [...car.features, action.payload.feature],
            };
        }
        case types.REMOVE: {
            // console.log(action.payload);
            const featureThatWasClickedOn = action.payload.xxx;
            console.log(featureThatWasClickedOn);
            const remainingFeatures = car.features.filter(carFeature => carFeature.id !== featureThatWasClickedOn.id)
            return { 
                // name: car.name,
                // image: car.image,
                // price: car.price,
                ...car,
                price: car.price - featureThatWasClickedOn.price,
                features: remainingFeatures
             }
        }
        default:
            return car;
    }
}
