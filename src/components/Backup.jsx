import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Image, SafeAreaView, Animated, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import styles from 'assets/styles'

export default function App() {
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

  function boxAnimationLoop () {
    Animated.loop(alignment, {
      toValue: 20,
      friction: 3,
      tension: 160,
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
    <LinearGradient style={styles.container} colors={['#d0c', '#3B9598']}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.textHeader}>React Native Animations</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={boxAnimationOn}>
            <Text style={styles.buttonText}>Animaiton ON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={boxAnimationOff}>
            <Text style={styles.buttonText}>Animaiton OF</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.imageContainer}>
        <Animated.View style={animatedBox}>
          <Image
            style={styles.image}
            source={{ uri: 'https://aomineDev.github.io/Img/20.jpg' }}
          />
        </Animated.View>
      </View>
      <StatusBar style='light' />
    </LinearGradient>
  )
}
