import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles'

const SplashScreen = ({ navigation, login }) => {
  useEffect(() => {
    const redirectToPage = login.data ? 'HomeScreen' : 'LoginScreen'
    setTimeout(() => navigation.navigate(redirectToPage), 1000)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.logoStyle}>Zing</Text>
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
