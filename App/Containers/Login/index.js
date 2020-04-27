import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import UserActions from 'App/Redux/UserRedux'

import Input from 'App/Components/Input/'
import Button from 'App/Components/Button'
import styles from './styles'

const LoginScreen = ({ navigation, doPostLogin, login }) => {
  useEffect(() => {
    if (!login.fetching && login.data) {
      navigation.navigate('HomeScreen')
    }
  }, [login])

  const [loginState, setLogin] = useState({ email: '', password: '' })

  const handleInput = (key, value) => setLogin({ ...loginState, [key]: value })

  // const handleLoginSubmit = () => doPostLogin(loginState)
  const handleLoginSubmit = () => navigation.navigate('HomeScreen')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          label="Email"
          onChangeText={(value) => handleInput('email', value)}
          placeholder="Email"
        />
        <Input
          label="Password"
          onChangeText={(value) => handleInput('password', value)}
          placeholder="Password"
        />
        <Button onClick={handleLoginSubmit} label="Sign in" />
      </View>
      <View style={styles.footerContainer}>
        <Text>Footer</Text>
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    login: state.user.login,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doPostLogin: (payload) => dispatch(UserActions.postLogin(payload)),
  }
}

const { object, func } = PropTypes
LoginScreen.propTypes = {
  login: object,
  doPostLogin: func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
