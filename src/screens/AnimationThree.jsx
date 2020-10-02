import React, { useRef } from 'react'
import { View, Animated } from 'react-native'

import WrapperOne from 'wrappers/wrapperOne'
import BoxOne from 'components/BoxOne'
import Button from 'components/Button'

import styles from 'assets/styles'

export default function AnimationThree () {
  const alignment = useRef(new Animated.Value(0)).current
  const scaleAnimation = useRef(new Animated.Value(0.5)).current

  function boxAnimationOn () {
    Animated.parallel([
      Animated.timing(alignment, {
        toValue: 120,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.spring(scaleAnimation, {
        toValue: 1.2,
        friction: 2,
        tension: 180,
        useNativeDriver: false
      })
    ]).start()
  }

  function boxAnimationOff () {
    Animated.parallel([
      Animated.timing(alignment, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }),
      Animated.spring(scaleAnimation, {
        toValue: 0.5,
        useNativeDriver: false
      })
    ]).start()
  }

  const animatedBox = {
    transform: [
      {
        translateY: alignment
      },
      {
        scale: scaleAnimation
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
