import fetch from 'node-fetch';

const API_URL = 'https://openapi.naver.com/v1/search/shop.json';

export const getShoppingList = (keyword) => {
  if (!keyword || keyword.trim() === '') {
    throw new Error('키워드를 입력해 주세요.');
  }

  return fetch(`${API_URL}?query=${keyword}&display=8`, {
    method: 'get',
    headers: {
      'X-Naver-Client-Id': process.env.API_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.API_CLIENT_SECRET,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API 호출에 실패했습니다. 에러 상태: ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      return {
        keyword,
        shoppingData: json.items,
      };
    });
};
