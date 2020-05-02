import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { CreditCardInput } from 'react-native-input-credit-card'
// import PropTypes from 'prop-types'

import Header from 'App/Components/Header'
import styles from './styles'

const CreditCardScreen = () => {
  const _onChange = () => {
    console.log('hehe')
  }
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header backButton title="CreditCard" />
      <CreditCardInput onChange={_onChange} />
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
CreditCardScreen.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardScreen)
