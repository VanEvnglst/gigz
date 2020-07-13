import React from 'react'
import { View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, style }) => {
  const { containerStyle, inputStyle, labelStyle } = styles

  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        style={style}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default Input

const { string, func, bool } = PropTypes
Input.propTypes = {
  label: string,
  value: string,
  onChangeText: func,
  placeholder: string,
  secureTextEntry: bool,
}
