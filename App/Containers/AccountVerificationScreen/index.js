import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';

const AccountVerificationScreen = props => {
  const { navigation } = props;

  const navigate = (code) => {
    console.log(`Code is ${code}, you are good to go!`);
    navigation.navigate('CreateAccountDetails')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Verification</Text>
        <Text style={styles.subText}>We sent a verification code to your number ending in 1234.</Text>

        <OTPInputView
          style={styles.otpContainer}
          pinCount={4}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          autoFocusOnLoad={false}
          onCodeFilled={(code => {
            navigate(code)
          })}
        />
        <View style={styles.resendContainer}>
          <Text style={styles.newCodeTextStyle}>Need a new code?</Text>
          <TouchableOpacity
            onPress={() => navigate('LoginScreen')}>
            <Text style={[styles.newCodeTextStyle, styles.resendTextStyle]}> Resend now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AccountVerificationScreen;