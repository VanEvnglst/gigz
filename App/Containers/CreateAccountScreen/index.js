import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import UserActions from 'App/Redux/UserRedux';
import PropTypes from 'prop-types';

import { View, Text, Image, TextInput,Platform,  TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'
import { Images } from 'App/Theme';
import styles from './styles';

const CreateAccountScreen = (props) => {
  const {
    postVerifyNumber,
    navigation: { navigate },
  } = props;
  useEffect(() => {
    if (!postVerifyNumber.fetching && postVerifyNumber.data) {
      navigate('AccountVerification');
    }
  }, [postVerifyNumber]);
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('PH');
  const [country, setCountry] = useState('');

  const createButtonHandler = () => {
    props.doPostVerifyNumber({
      number,
      country: 'PH',
    });
  };

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
          <Text style={styles.headerTextStyle}>Welcome to Gigz</Text>
          <Text style={styles.subHeaderTextStyle}>Create your account</Text>
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
              placeholder={'Mobile number'}
              placeholder={'Enter your mobile number'}
              value={number}
            onChangeText={(number) => setNumber(number)}
            />

          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={createButtonHandler}>
            <Text style={styles.buttonTextStyle}>Create Account</Text>
          </TouchableOpacity>
          <View style={styles.termsContainer}>
            <Text style={styles.subTextStyle}>
              By signing up means you agree to our
              <Text style={styles.boldSubText}> Terms of Use</Text> and
              <Text style={styles.boldSubText}> Privacy Policy</Text>
            </Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerContent}>
            <Text style={styles.subTextStyle}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate('LoginScreen')}>
              <Text style={[styles.boldSubText, styles.linkTextStyle]}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
  );
};

function mapStateToProps(state) {
  return {
    postVerifyNumber: state.user.postVerifyNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doPostVerifyNumber: (payload) => dispatch(UserActions.postVerifyNumber(payload)),
  };
}

const { object, func } = PropTypes;    
CreateAccountScreen.propTypes = {
  postVerifyNumber: object,
  doPostVerifyNumber: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen);
