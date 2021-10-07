import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { backgroundColor, buttonbackgroundColor, textColor } from '../../utils/them'

const Juz = ({ navigation, user }) => {
    return(
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: backgroundColor,
        justifyContent:"center"
      },
})

export default Juz