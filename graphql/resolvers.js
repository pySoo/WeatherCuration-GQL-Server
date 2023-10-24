import { getShoppingList } from './shoppingAPI.js';
import {
  getCoordLocation,
  getCurrentCondition,
  getFiveDaysForecast,
  getTwelveHoursForecast,
} from './weatherAPI.js';

const resolvers = {
  Query: {
    shoppingList: (_, { keyword }) => getShoppingList(keyword),
    coordLocation: (_, { coordinates }) => getCoordLocation(coordinates),
    currentCondition: (_, { locationKey }) => getCurrentCondition(locationKey),
    fiveDaysForecast: (_, { locationKey }) => getFiveDaysForecast(locationKey),
    twelveHoursForecast: (_, { locationKey }) => getTwelveHoursForecast(locationKey),
  },
};

export default resolvers;
