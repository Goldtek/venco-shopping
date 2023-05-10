/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Server} from 'miragejs';
import App from './App';
import {name as appName} from './app.json';
// import 'react-native-gesture-handler/jestSetup';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000',
});

// Create a new instance of the MockAdapter class and pass it the Axios instance
const mock = new MockAdapter(api);

mock.onPost('/login').reply(config => {
  return [
    200,
    {
      user: {
        id: 123,
        name: 'John Doe',
        email: 'johndoe@example.com',
      },
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      expiresIn: 3600,
    },
  ];
});

mock.onGet('/profile').reply(config => {
  return [
    200,
    {
      id: 123,
      name: 'Chisom Dike',
      email: 'dike4mii4real@gmail.com',
      address: {
        city: 'Lagos',
        country: 'Nigeria',
        zip: '100242',
      },
      phone: '+2348066379681',
      avatar: 'https://i.imgur.com/GfkNpVG.jpg',
    },
  ];
});

mock.onPost('/profile/update').reply(config => {
  const token = config.headers.Authorization.split(' ')[1];
  return [200, {}];
});

export default mock;


// const server = new Server({
//   routes() {
//     this.namespace = 'api';

//     this.get('/users', () => {
//       return {
//         users: [
//           {id: 1, name: 'John Doe'},
//           {id: 2, name: 'Jane Smith'},
//         ],
//       };
//     });

//     this.onPost('/login').reply(config => {
//       return [
//         200,
//         {
//           user: {
//             id: 123,
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//           },
//           token:
//             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
//           expiresIn: 3600,
//         },
//       ];
//     });

//     this.onGet('/profile').reply(config => {
//       return [
//         200,
//         {
//           id: 123,
//           name: 'Chisom Dike',
//           email: 'dike4mii4real@gmail.com',
//           address: {
//             city: 'Lagos',
//             country: 'Nigeria',
//             zip: '100242',
//           },
//           phone: '+2348066379681',
//           avatar: 'https://i.imgur.com/GfkNpVG.jpg',
//         },
//       ];
//     });

//     this.onPost('/profile/update').reply(config => {
//       const token = config.headers.Authorization.split(' ')[1];
//       return [200, {}];
//     });
//   },
// });

AppRegistry.registerComponent(appName, () => App);
