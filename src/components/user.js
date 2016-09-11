import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

import UserName from './user-name'
import UserCompany from './user-company'

const User = ({user, onClick}) => {
  const { name, username, company } = user
  const onPress = () => {
    onClick(user)
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <UserName
          name={name}
          username={username}
        />
        <UserCompany
          company={company}
        />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
})

export default User
