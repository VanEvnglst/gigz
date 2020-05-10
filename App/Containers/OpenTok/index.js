import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native'

import UserActions from 'App/Redux/UserRedux'

import styles from './styles'

const OPEN_TOK_API = '46728712'
const SESSION = '2_MX40NjcyODcxMn5-MTU4OTA0OTI0OTk5NX5hQ1g1YlNGU0N5OTlvYUNXeEVNRkFCbzB-UH4'
const TOKEN =
  'T1==cGFydG5lcl9pZD00NjcyODcxMiZzaWc9ODgyMzc0YjgwYzljMTIwYTdhZjc1ZDk4Mzk1YzhlMTQ4ZWNkMDM4Zjpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5qY3lPRGN4TW41LU1UVTRPVEEwT1RJME9UazVOWDVoUTFnMVlsTkdVME41T1RsdllVTlhlRVZOUmtGQ2J6Qi1VSDQmY3JlYXRlX3RpbWU9MTU4OTA0OTI1MCZub25jZT0wLjYyNzAzMjQ2MjQxMjI3MTY='

const OpenTok = ({ navigation, doPostLogin, login }) => {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()

  const onError = (err) => {
    console.log(err)
    setError(`Failed to connect: ${err.message}`)
  }

  const sessionEvents = {
    sessionConnected: () => {
      setConnected(true)
    },
    sessionDisconnected: () => {
      setConnected(false)
    },
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <OTSession
          apiKey={OPEN_TOK_API}
          sessionId={SESSION}
          token={TOKEN}
          eventHandlers={sessionEvents}
          onError={onError}
        >
          <OTSubscriber style={{ height: 500, width: 300 }} />
        </OTSession>
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    login: state.user.login,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doPostLogin: (payload) => dispatch(UserActions.postLogin(payload)),
  }
}

const { object, func } = PropTypes
OpenTok.propTypes = {
  login: object,
  doPostLogin: func,
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTok)
