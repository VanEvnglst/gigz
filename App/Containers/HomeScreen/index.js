import React, { useEffect } from 'react'
import { View, ScrollView, Text, ImageBackground, Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import StreamActions from 'App/Redux/StreamRedux'

import Header from 'App/Components/Header'
import Card from 'App/Components/Card'
import styles from './styles'
import Paginator from '../../Components/Paginator'
import ArtistCard from '../../Components/ArtistCard'
import { Images } from '../../Theme';

const HomeScreen = ({ stream, doGetStreams }) => {
  useEffect(() => {
    doGetStreams()
  }, [])

  const { data, fetching } = stream

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header liveButton />
      <View style={styles.container}>
        <ScrollView>
          {/* TODO: Confirm if this is the design for all banners inside carousel */}
          <View style={styles.carouselSection}>
            <ImageBackground style={styles.carouselBackground}
              source={Images.loginBanner}
            >
              <View style={styles.overlay}>
                 <Image style={styles.carouselImage} source={Images.loginBanner} resizeMode='contain'/>
                 <View style={styles.caroselContentContainer}>
                   <Text style={styles.exclusiveText}>Gigz Exclusive</Text>
                   <Text style={styles.boldText}>FREE SANDWICH</Text>
                   <Text style={styles.detailsTextStyle}>June 19, 2020 @ 7:00 PM</Text>
                   <TouchableOpacity
                    style={styles.reminderButtonStyle}>
                     <Text style={styles.reminderTextStyle}>+ Remind me</Text>
                   </TouchableOpacity>
                 </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeaderText}>Trending Live</Text>
            <View style={styles.cardSectionContainer}>
              {/* TODO: create funtion for returning cards */}
              <Card />
              <Card />
              <Card />
              <Card />
            </View>
            <Paginator />
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.topArtistHeaderContainer}>
              <Text style={styles.sectionHeaderText}>Top Artists</Text>
              <Text style={styles.viewArtistsText}>View All Artists</Text>
            </View>
            <View style={styles.subSectionContainer}>
              {/* TODO: create funtion for returning cards */}
              <ArtistCard />
              <ArtistCard />
            </View>
          </View>
          {/* Upcoming Live Section */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeaderText}>Upcoming Live</Text>
            <View style={styles.cardSectionContainer}>
              {/* TODO: create funtion for returning cards */}
              <Card />
              <Card />
            </View>
            <Paginator />
          </View>

          {/* LIVE ARTIST SECTION */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeaderText}>Live Artist</Text>
            <View style={styles.cardSectionContainer}>
              {/* TODO: create funtion for returning cards */}
              <Card />
            </View>
            <Paginator />
          </View>

          {/* {fetching ? (
          <Text style={styles.whiteText}>Loading...</Text>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            {data && data.live_streams.map((result) => <Card stream={result} key={result.id} />)}
          </ScrollView>
        )} */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    stream: state.stream.getStreams,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doGetStreams: () => dispatch(StreamActions.getStreams()),
  }
}

const { func, object } = PropTypes
HomeScreen.propTypes = {
  stream: object,
  doGetStreams: func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
