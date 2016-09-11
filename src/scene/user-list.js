import React, { Component } from 'react'
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native'

import User from '../components/user'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

class UserListScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.fetchUsers()
  }

  async fetchUsers() {
    jsonResponse = await fetch('http://jsonplaceholder.typicode.com/users')
    users = await jsonResponse.json()

    this.setState({
      users: ds.cloneWithRows(users)
    })
  }

  onUserClick = (user) => {
    console.log(user)
  }

  renderRow = (user) => {
    return (
      <User user={user}
        onClick={this.onUserClick}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.users}
          renderRow={this.renderRow}
          enableEmptySections={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
})

export default UserListScene
