import React from 'react'
import Home from '../screens/Home/Home.screen'
import Juz from '../screens/Juz/index'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Surahs } from '../screens/surahs'
import { backgroundColor, textColor } from '../utils/them'
import CustomDrawer from './CustomDrawer'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{ 
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-settings'} size={25} color={color} />
//           }
//         }}

//       />
//     </Tab.Navigator>
//   )
// }
const Drawer = createDrawerNavigator();
function App() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}

      screenOptions={{
        drawerType: "slide",
        headerStyle: {
          backgroundColor: textColor,
          shadowOpacity: 0.85,
          shadowRadius: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTintColor: backgroundColor,
        headerTitleStyle: {
          fontSize: 20,
        },
        drawerActiveTintColor: textColor,
        drawerInactiveTintColor: "#fff"
      }}

      initialRouteName="Home">
      <Drawer.Screen name="Holy Quran" component={Home} />
    </Drawer.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          // options={{ headerShown: false }}
          component={App}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Juz"
          // options={{ headerShown: false }}
          component={Juz}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />

        <Stack.Screen
          name="Surahs"
          // options={{ headerShown: false }}
          component={Surahs}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />


        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
