import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class SplashScreen extends React.Component {
  componentDidMount() {
    const {
      navigation: { navigate },
    } = this.props
    setTimeout(() => navigate('OpenTokScreen'), 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoStyle}>Zing</Text>
      </View>
    )
  }
}
