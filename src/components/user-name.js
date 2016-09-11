import React from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

const UserName = ({name, username}) => {
  const renderUsername = (username) => {
    if (username && username.length) {
      return (
        <Text style={styles.username}>
          @{username}
        </Text>
      )
    } else {
      return null
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      {renderUsername(username)}
    </View>
  )
}

UserName.propTypes = {
  name: React.PropTypes.string,
  username: React.PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    paddingLeft: 8,
  },
})

export default UserName
