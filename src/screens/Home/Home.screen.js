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
        <View style={{borderWidth:1,borderColor:"#1974ba",marginHorizontal:10,paddingVertical:16,borderRadius:10}}>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Juz')} style={styles.button}>
            <Text style={styles.text}>Juz Index</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.8} onPress={() => {navigation.navigate('Surahs')}} style={styles.button}>
            <Text style={styles.text}>Surah Index</Text>
          </TouchableOpacity>
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
