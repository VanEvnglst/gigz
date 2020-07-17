import React, { useEffect } from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Images } from '../../Theme'

import styles from './styles'

const SplashScreen = ({ navigation, login }) => {
  useEffect(() => {
    const redirectToPage = login.data ? 'OnboardingScreen' : 'OnboardingScreen'
    setTimeout(() => navigation.navigate(redirectToPage), 1000)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={Images.splash}>
        <View style={styles.contentContainer}>
          <Image style={styles.logoStyle} source={Images.logoDark} />
          <Text style={styles.textStyle}>The next stage</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

function mapStateToProps(state) {
  return {
    login: state.user.login,
  }
}

const { object } = PropTypes
SplashScreen.propTypes = {
  login: object,
}

export default connect(mapStateToProps, null)(SplashScreen)
