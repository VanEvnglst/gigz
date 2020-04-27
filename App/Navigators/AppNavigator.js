import { createAppContainer, createStackNavigator } from 'react-navigation'
import { fromRight, fadeIn, zoomOut } from 'react-navigation-transitions'

import LoginScreen from 'App/Containers/Login/'
import HomeScreen from 'App/Containers/HomeScreen/'
import SplashScreen from 'App/Containers/SplashScreen/'

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2]
  const nextScene = scenes[scenes.length - 1]

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === 'SplashScreen' &&
    nextScene.route.routeName === 'MainScreen'
  ) {
    return fadeIn()
  } else if (
    prevScene &&
    prevScene.route.routeName === 'MainScreen' &&
    nextScene.route.routeName === 'HomeScreen'
  ) {
    return zoomOut()
  }

  return fromRight()
}

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: LoginScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    transitionConfig: (nav) => handleCustomTransition(nav),
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
