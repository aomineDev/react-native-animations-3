import React, { useRef } from 'react'
import { View, TouchableOpacity, Text, Animated } from 'react-native'

import WrapperOne from 'wrappers/wrapperOne'
import BoxOne from 'components/BoxOne'
import Button from 'components/Button'

import styles from 'assets/styles'

export default function AnimationOne () {
  const alignment = useRef(new Animated.Value(0)).current

  function boxAnimationOn () {
    Animated.spring(alignment, {
      toValue: 150,
      friction: 3,
      tension: 160,
      useNativeDriver: true
    }).start()
  }

  function boxAnimationOff () {
    Animated.spring(alignment, {
      toValue: 0,
      useNativeDriver: true
    }).start()
  }

  const animatedBox = {
    transform: [
      {
        translateY: alignment
      }
    ]
  }

  return (
    <WrapperOne>
      <View style={styles.buttons}>
      <Button
          buttonStyle={styles.btnOne}
          text='Animaiton ON'
          handlePress={boxAnimationOn}
        />
        <Button
          buttonStyle={styles.btnTwo}
          text='Animaiton OFF'
          handlePress={boxAnimationOff}
        />
      </View>
      <BoxOne animationStyle={animatedBox} />
    </WrapperOne>
  )
}
