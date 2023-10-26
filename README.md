# Weather Curation QraphQL API Server

REST API와 GraphQL 서버를 연동하여 클라이언트가 필요로 하는 데이터만 로드할 수 있도록 설계하였습니다.

배포 이후 CORS 에러 상황을 겪으면서, apollo server 단독 사용에서 express middleware 사용으로 구조를 변경하여 CORS를 해결하였습니다.

## Tech Stack

<div align=center>

|    Area     |                                                                                                                                                                                                                                                                         Tech Stack                                                                                                                                                                                                                                                                          |
| :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **Backend** | <img src="https://img.shields.io/badge/GraphQL-E10098.svg?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-000000.svg?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/github_actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"> <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> |

</div>

## Features

- 네이버 검색 쇼핑 API, Accuweather API 사용
- Accuweather API의 경우 파라미터가 50개 이상인 응답도 있었기 때문에 GQL 쿼리를 이용하여 작은 용량의 데이터를 로드할 수 있다는 장점이 있었습니다.
- GitHub Actions를 활용해 배포 자동화
- Heroku sleep 방지를 위한 Kaffeine 설정

## Project Structure

```
📦
├── 📂 .github
│   └── 📂 workflows
├── 📂 constants
├── 📂 node_modules
├── 📂 utils
├── 📂 graphql
│   ├──  resolvers.js
│   ├──  typeDefs.js
│   ├──  shoppingAPI.js
│   └──  weatherAPI.js
└── index.mjs
```

## Getting Started

```bash
npm install
```

```bash
npm start
```
