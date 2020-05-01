import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import { Images } from 'App/Theme/'

import styles from './styles'

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardProfileContainer}>
        <Text style={styles.whiteText}>Profile</Text>
      </View>
      <View style={styles.cardImageContainer}>
        <Image source={Images.cardImage} style={styles.cardImageStyle} />
      </View>
      <View style={styles.cardEngagementContainer}>
        <Text style={styles.whiteText}>Engagement buttons</Text>
      </View>
      <View style={styles.cardCommentContainer}>
        <Text style={styles.whiteText}>Comment section</Text>
      </View>
    </View>
  )
}

export default Card

const {} = PropTypes
Card.propTypes = {}
