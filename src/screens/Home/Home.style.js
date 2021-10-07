import { StyleSheet } from 'react-native'
import { backgroundColor, buttonbackgroundColor, textColor } from '../../utils/them'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: backgroundColor,
    justifyContent:"center"
  },
  button:{
    backgroundColor: buttonbackgroundColor,
    marginHorizontal:30,
    marginVertical:10,
    paddingVertical:20,
    alignItems: 'center'
  },
  text: { fontSize: 18, color: textColor, fontWeight: 'bold' }
})
