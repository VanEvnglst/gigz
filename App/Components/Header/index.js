import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NavigationService from 'App/Services/NavigationService'

import styles from './styles'

const Header = ({ title }) => {
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
        <TouchableOpacity onPress={() => NavigationService.goBack()} style={leftButtonStyle}>
          <FontAwesome name="chevron-left" size={15} />
          <Text style={leftTextStyle}>Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={labelStyle}>{title}</Text>
      <View style={rightStyle} />
    </View>
  )
}

export default Header

const { string } = PropTypes
Header.propTypes = {
  title: string,
}
