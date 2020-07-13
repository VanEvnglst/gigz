import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import UserActions from 'App/Redux/UserRedux'

import Input from 'App/Components/Input/'
import Button from 'App/Components/Button'
import styles from './styles'
import { Images } from '../../Theme';

const LoginScreen = ({ navigation, doPostLogin, login }) => {
  useEffect(() => {
    if (login.data) {
      navigation.navigate('HomeScreen')
    }
  }, [login])

  const [loginState, setLogin] = useState({ email: '', password: '' })

  const handleInput = (key, value) => setLogin({ ...loginState, [key]: value })

  const handleLoginSubmit = () => {
    doPostLogin(loginState)
  }

  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <View style={styles.bannerContainer}>
        <View
          style={styles.bannerOverlay}>
          <Image
            source={Images.loginBanner}
            resizeMode='cover'
            style={styles.loginBanner}
          />
        </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>Welcome Back!</Text>
          <Text style={styles.subHeaderTextStyle}>Login to your account</Text>
        </View>

      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputStyle}
        placeholder={'Enter your mobile number'}
        onChangeText={(value) => handleInput('email', value)}
        />
        <TextInput
        style={styles.inputStyle}
        placeholder={'Password'}
        onChangeText={(value) => handleInput('password', value)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => handleLoginSubmit()}>
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <Text style={styles.subTextStyle}>Still don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigate('CreateAccountScreen')}>
            <Text style={[styles.boldSubText, styles.linkTextStyle]}> Sign up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View> 
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
