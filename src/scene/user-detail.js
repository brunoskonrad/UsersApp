import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native'

class UserDetailScene extends Component {
  render() {
    const { name } = this.props.user

    return (
      <View>
        <Text>
          {name}
        </Text>
      </View>
    )
  }
}

export default UserDetailScene
