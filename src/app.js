/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Navigator,
} from 'react-native'

import {
  UserListScene,
  UserDetailScene,
} from './scene'

class UsersApp extends Component {
  configureScene = () => {
    return Navigator.SceneConfigs.FadeAndroid
  }

  renderScene = (route, navigator) => {
    switch (route.index) {
      case 'detail':
        return (
          <UserDetailScene user={route.user}
            navigator={navigator}
          />
        )
      default:
        return <UserListScene navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'Users', index: 'list'}}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    )
  }
}

export default UsersApp
