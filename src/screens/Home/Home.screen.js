import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

  function ListUser() {
    return user.map(data => {
      return (
        <View
          key={data.id}
          style={{
            borderBottomWidth: 1,
            borderColor: '#eee',
            padding: 1,
            marginTop: 10
          }}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.button}>
            <Text style={styles.text}>Juz Index</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>Surah Index</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text}>Go to page#</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
