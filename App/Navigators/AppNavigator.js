import { createAppContainer, createStackNavigator } from 'react-navigation'
import { fromRight, fadeIn } from 'react-navigation-transitions'
import { TabNavigator } from './TabNavigator'

import LoginScreen from 'App/Containers/Login/'
import SplashScreen from 'App/Containers/SplashScreen/'
import LiveScreen from 'App/Containers/LiveScreen/'
import CreditCardScreen from 'App/Containers/CreditCardScreen/'
import OpenTokScreen from 'App/Containers/OpenTok/'
import OnboardingScreen from '../Containers/Onboarding'
import CreateAccountScreen from '../Containers/CreateAccountScreen'
import CreateAccountDetailsScreen from '../Containers/CreateAccountDetailsScreen'
import AccountVerificationScreen from '../Containers/AccountVerificationScreen'

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
  }

  return fromRight()
}

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    OnboardingScreen: OnboardingScreen,
    LoginScreen: LoginScreen,
    LiveScreen: LiveScreen,
    OpenTokScreen: OpenTokScreen,
    CreditCardScreen: CreditCardScreen,
    CreateAccountScreen: CreateAccountScreen,
    CreateAccountDetails: CreateAccountDetailsScreen,
    AccountVerification: AccountVerificationScreen,
    MainScreen: TabNavigator,
  },
  {
    initialRouteName: 'SplashScreen',
    transitionConfig: (nav) => handleCustomTransition(nav),
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
