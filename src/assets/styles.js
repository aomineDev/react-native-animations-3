import { StyleSheet } from 'react-native'
import Constans from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  textHeader: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
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
  }
})

