import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import styles from './styles'

const HomeScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'never' }} style={styles.container}>
      <Text>Zing Home screen</Text>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

// const {} = PropTypes
HomeScreen.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
