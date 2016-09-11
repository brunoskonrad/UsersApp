/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import {
  UserListScene
} from './scene'

class UsersApp extends Component {
  render() {
    return (
      <UserListScene />
    )
  }
}

export default UsersApp
