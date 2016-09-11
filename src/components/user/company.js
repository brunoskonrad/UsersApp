import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

const UserCompany = ({company}) => {
  const { name, catchPhrase, bs } = company

  return (
    <View>
      <Text>
        {name}
      </Text>
      <Text>
        {catchPhrase}
      </Text>
      <Text>
        {bs}
      </Text>
    </View>
  )
}

export default UserCompany
