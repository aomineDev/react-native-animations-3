import React, { useState, useRef } from 'react'
import { View, Animated } from 'react-native'

import WrapperOne from 'wrappers/wrapperOne'
import BoxTwo from 'components/BoxTwo'

import styles from 'assets/styles'

export default function AnimationFour () {
  const alignment = useRef(new Animated.Value(0)).current
  const [password, setPassword] = useState('')

  function inputAnimation () {
    Animated.stagger(400, [
      Animated.spring(alignment, {
        toValue: 5,
        friction: 1,
        tension: 180,
        useNativeDriver: false
      }),
      Animated.spring(alignment, {
        toValue: 0,
        friction: 1,
        tension: 180,
        useNativeDriver: false
      })
    ]).start()
  }

  function handleText (passowrd) {
    setPassword(passowrd)
  }

  function handleSubmit () {
    const truePassowrd = 'Jhon007'

    if (password === truePassowrd) {
      alert('Login Successful')
    } else {
      inputAnimation()
    }
  }

  const animatedBox = {
    transform: [
      {
        translateX: alignment
      }
    ]
  }

  return (
    <WrapperOne>
      <BoxTwo
        animationStyle={animatedBox}
        handleText={handleText}
        handleSubmit={handleSubmit}
      />
    </WrapperOne>
  )
}