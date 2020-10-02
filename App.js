import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { StatusBar } from 'expo-status-bar'

import renderTabBar from 'components/TabBar'
import AnimationOne from 'screens/AnimationOne'
import AnimationTwo from 'screens/AnimationTwo'
import AnimationThree from 'screens/AnimationThree'
import AnimationFour from 'screens/AnimationFour'
import AnimationFive from 'screens/AnimationFive'
import AnimationSix from 'screens/AnimationSix'

import styles from 'assets/styles'

const { width } = Dimensions.get('screen')
const initialLayout = { width }

export default function App () {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'one', title: 'spring' },
    { key: 'two', title: 'loop' },
    { key: 'three', title: 'parallel' },
    { key: 'four', title: 'sequence' },
    { key: 'five', title: 'stagger' },
    { key: 'six', title: 'six' }
  ])

  const renderScene = SceneMap({
    one: AnimationOne,
    two: AnimationTwo,
    three: AnimationThree,
    four: AnimationFour,
    five: AnimationFive,
    six: AnimationSix
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Combining animations</Text>
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
