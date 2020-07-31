import React from 'react'
import { TabBar } from 'react-native-tab-view'

export default function renderTabBar (props) {
  return (
    <TabBar
    {...props}
    scrollEnabled
    style={{ backgroundColor: '#463ED5' }}
    indicatorStyle={{ backgroundColor: 'white' }}
    tabStyle={{ width: 120 }}
    labelStyle={{ fontWeight: '400' }}
  />
  )
}
