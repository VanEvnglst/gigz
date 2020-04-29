import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import Header from 'App/Components/Header'
import styles from './styles'

const ProfileScreen = () => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header title="Zing" />
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
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
ProfileScreen.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
