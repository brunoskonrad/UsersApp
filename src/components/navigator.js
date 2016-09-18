import React, { Component } from 'react'
import {
  Navigator,
  BackAndroid,
} from 'react-native'

import {
  UserListScene,
  UserDetailScene,
} from '../scene'

class AppNavigator extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
  }

  handleBack = () => {
    const {navigator} = this.refs
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    }

    return false
  }

  configureScene = () => {
    return Navigator.SceneConfigs.FadeAndroid
  }

  userListForward = (user) => {
    this.refs.navigator.push({
      title: user.name,
      index: 'detail',
      user: user,
    })
  }

  backScene = (route) => {
    this.refs.navigator.pop()
  }

  renderScene = (route, navigator) => {
    switch (route.index) {
      case 'detail':
        return (
          <UserDetailScene user={route.user} />
        )
      default:
        return (
          <UserListScene onForward={this.userListForward} />
        )
    }
  }

  render() {
    const initialRoute = {title: 'Users', index: 'list'}

    return (
      <Navigator
        ref="navigator"
        initialRoute={initialRoute}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    )
  }
}

export default AppNavigator
