import { AsyncStorage } from 'react-native'

function fetchUser() {
  return fetch('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => saveUsers(users))
}

async function saveUsers(users) {
  try {
    await AsyncStorage.setItem('@users', JSON.stringify(users))
  } catch (error) {
    console.log(error)
  }
  return users
}

function getUsers() {
  return AsyncStorage.getItem('@users')
    .then((value) => JSON.parse(value))
}

export {
  fetchUser,
  getUsers,
}
