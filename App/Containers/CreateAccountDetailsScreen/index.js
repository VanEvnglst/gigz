import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'
import styles from './styles';

const CreateAccountDetailsScreen = props => {
  const { navigation } = props;
  const [countryCode, setCountryCode] = useState('PH');
  const [country, setCountry] = useState('');

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
      <View style={styles.contentContainer}>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={styles.headerTextStyle}>Create Account</Text>


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
              keyboardType={'phone-pad'}
            />

          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Full name'} />
          <TextInput
            style={styles.inputStyle}
            keyboardType={'email-address'}
            placeholder={'Email address'} />
          <Text style={styles.profileTextStyle}>Profile Photo</Text>

          <TouchableOpacity
            style={styles.profileButtonStyle}>
            <Text style={styles.profileBtnTextStyle}>Take a Photo, or</Text>
            <Text style={styles.profileBtnRedTextStyle}> Browse</Text>

          </TouchableOpacity>
          <Text style={styles.noteTextStyle}>Maximum upload file size 10MB.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.buttonTextStyle}>Create Account</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

}

export default CreateAccountDetailsScreen;