import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Images } from '../../Theme';
import styles from './styles';

const CreateAccountScreen = props => {

  const navigate = (value) => {
    const { navigation } = props;
    navigation.navigate(value);
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
          <Text style={styles.headerTextStyle}>Welcome to Gigz</Text>
          <Text style={styles.subHeaderTextStyle}>Create your account</Text>
        </View>

      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputStyle}
        placeholder={'Enter your mobile number'}/>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigate('AccountVerification')}>
          <Text style={styles.buttonTextStyle}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.termsContainer}>
        <Text style={styles.subTextStyle}>By signing up means you agree to our 
          <Text style={styles.boldSubText}> Terms of Use</Text> and 
          <Text style={styles.boldSubText}> Privacy Policy</Text>
        </Text>
      </View>
      </View>
      
      <View style={styles.footerContainer}>
        <View style={styles.footerContent}>
          <Text style={styles.subTextStyle}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigate('LoginScreen')}>
            <Text style={[styles.boldSubText, styles.linkTextStyle]}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  )
}

export default CreateAccountScreen;