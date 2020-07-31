import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

import renderTabBar from 'components/TabBar'
import AnimationOne from 'screens/AnimationOne'
import AnimationTwo from 'screens/AnimationTwo'

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)

const { width } = Dimensions.get('screen')
const initialLayout = { width }

export default function App () {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'one', title: 'one' },
    { key: 'two', title: 'two' },
    { key: 'three', title: 'three' },
    { key: 'four', title: 'Four' },
    { key: 'five', title: 'five' },
    { key: 'six', title: 'six' }
  ])

  const renderScene = SceneMap({
    one: AnimationOne,
    two: AnimationTwo,
    three: FirstRoute,
    four: SecondRoute,
    five: FirstRoute,
    six: SecondRoute
  })

  return (
    <View style={styles.container}>
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
      <StatusBar style='light' backgroundColor='#312C96' />
    </View>

  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})
