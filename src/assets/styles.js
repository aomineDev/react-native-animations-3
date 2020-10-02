import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  scene: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  wrapper: {
    flex: 1,
  },
  title: {
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor: '#463ED5',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  buttons: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 40,
    elevation: 4
  },
  btnOne: {
    backgroundColor: '#d0c'
  },
  btnTwo: {
    backgroundColor: '#3B9598'
  },
  buttonText: {
    color: '#fff'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 40
  },
  input: {
    marginBottom: 30,
    width: width / 1.3,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    borderRadius: 30,
    padding: 15
  }
})

