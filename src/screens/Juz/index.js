import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Platform,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { backgroundColor, buttonbackgroundColor, textColor } from '../../utils/them'

const { width } = Dimensions.get("screen")

const Juz = ({ navigation, user }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={new Array(30).fill("")}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ index }) => {
          return (
            <TouchableOpacity style={styles.juzContainer}>
              <Text style={styles.juzText}>{index + 1}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 40 : 10,
    paddingHorizontal: 10,
    backgroundColor: backgroundColor,
    justifyContent: "center"
  },
  juzContainer: {
    borderColor: textColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "30%",
    marginVertical: 10
  },
  juzText: {
    color: textColor,
    fontSize: 20
  }
})

export default Juz