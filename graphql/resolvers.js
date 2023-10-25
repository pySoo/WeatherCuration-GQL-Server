import { getShoppingList } from './shoppingAPI.js';
import { getCurrentCondition, getFiveDaysForecast } from './weatherAPI.js';

const resolvers = {
  Query: {
    getShoppingList: (_, { keyword }) => getShoppingList(keyword),
    getCurrentCondition: (_, { locationKey }) => getCurrentCondition(locationKey),
    getFiveDaysForecast: (_, { locationKey }) => getFiveDaysForecast(locationKey),
  },
};

export default resolvers;
