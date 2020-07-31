import React, { useRef } from 'react'
import { Animated } from 'react-native'

import WrapperOne from 'wrappers/wrapperOne'
import BoxOne from 'components/BoxOne'

export default function AnimationTwo () {
  const alignment = useRef(new Animated.Value(0)).current

  function boxAnimationLoop () {
    Animated.loop(
      Animated.spring(alignment, {
        toValue: 20,
        friction: 3,
        tension: 180,
        useNativeDriver: true
      })
    ).start()
  }

  const animatedBox = {
    transform: [
      {
        translateX: alignment
      }
    ]
  }

  boxAnimationLoop()

  return (
    <WrapperOne>
      <BoxOne animationStyle={animatedBox} />
    </WrapperOne>
  )
}
