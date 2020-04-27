import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Button = ({ label, onClick }) => {
  const { containerStyle, labelStyle } = styles

  return (
    <TouchableOpacity style={containerStyle} onPress={onClick}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button

const { string, func } = PropTypes
Button.propTypes = {
  label: string,
  onClick: func,
}
