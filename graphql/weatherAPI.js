import fetch from 'node-fetch';

const API_URL = 'https://dataservice.accuweather.com';

const weatherFetch = ({ params, endPoint, method = 'get' }) => {
  const weatherParams = new URLSearchParams(params);

  return fetch(`${API_URL}${endPoint}?${weatherParams.toString()}`, {
    method,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API 호출에 실패했습니다. 에러 상태: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCurrentCondition = async (locationKey) => {
  const params = {
    apikey: process.env.ACCUWEATHER_API_KEY,
    language: 'ko',
    details: 'true',
  };

  const endPoint = `/currentconditions/v1/${locationKey}`;

  const response = await weatherFetch({ params, endPoint });
  return response[0];
};

export const getFiveDaysForecast = (locationKey) => {
  const params = {
    apikey: process.env.ACCUWEATHER_API_KEY,
    language: 'ko',
    details: 'true',
    metric: 'true',
  };

  const endPoint = `/forecasts/v1/daily/5day/${locationKey}`;

  return weatherFetch({ params, endPoint });
};
