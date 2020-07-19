import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CountryPicker from 'react-native-country-picker-modal'

import UserActions from 'App/Redux/UserRedux'

import styles from './styles'
import { Images } from 'App/Theme'

const LoginScreen = ({ navigation, doPostLogin, login }) => {
  const { navigate } = navigation
  useEffect(() => {
    if (login.data) {
      navigation.navigate('HomeScreen')
    }
  }, [login])

  const [loginState, setLogin] = useState({ contact: '', password: '' })
  const [countryCode, setCountryCode] = useState('PH');
  const [country, setCountry] = useState('');

  const handleInput = (key, value) => setLogin({ ...loginState, [key]: value })

  const handleLoginSubmit = () => {
    doPostLogin(loginState)
  }

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country);
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}
    style={styles.container}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerOverlay}>
            <Image source={Images.loginBanner} resizeMode="cover" style={styles.loginBanner} />
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>Welcome Back!</Text>
          <Text style={styles.subHeaderTextStyle}>Login to your account</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.mobileInputStyle}>
          <CountryPicker
              {... {
                onSelect,
                countryCode
              }}
              containerButtonStyle={styles.countryPickerStyle}
              withFlag={true}
              withCallingCode={true}
              withCountryNameButton={false}
              withCallingCodeButton={true}
              withAlphaFilter={true}
            />
             <TextInput
            keyboardType={'phone-pad'}
            placeholder={'Enter your mobile number'}
            onChangeText={(value) => handleInput('contact', value)}
          />
          </View>

          <TextInput
            style={styles.inputStyle}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(value) => handleInput('password', value)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => handleLoginSubmit()}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerContent}>
            <Text style={styles.subTextStyle}>Still don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccountScreen')}>
              <Text style={[styles.boldSubText, styles.linkTextStyle]}> Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
