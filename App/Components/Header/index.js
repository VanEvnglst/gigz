import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NavigationService from 'App/Services/NavigationService'

import styles from './styles'
import { Images } from '../../Theme'

const Header = ({ title, backButton }) => {
  const {
    containerStyle,
    labelStyle,
    leftStyle,
    leftButtonStyle,
    leftTextStyle,
    rightStyle,
  } = styles

  return (
    <View style={containerStyle}>
      <View style={leftStyle}>
        <TouchableOpacity
          style={{ marginLeft: 15 }}>
          <Image source={Images.logo} style={{width: 60, height: 32, }} resizeMode='cover' />
        </TouchableOpacity>
        {/* TODO: Refactor for addtion of back button */}
        {/* {backButton && (
          <TouchableOpacity onPress={() => NavigationService.goBack()} style={leftButtonStyle}>
            <FontAwesome name="chevron-left" color="#fff" size={15} />
            <Text style={leftTextStyle}>Back</Text>
          </TouchableOpacity>
        )} */}
      </View>
      {/* <Text style={labelStyle}>{title}</Text> */}
      <View style={rightStyle} />
    </View>
  )
}

export default Header

const { string, bool } = PropTypes
Header.propTypes = {
  title: string,
  backButton: bool,
  liveButton: bool,
}
