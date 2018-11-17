import {
  StyleSheet,
  Platform
} from 'react-native'
import { shared, colors } from '../../styles'

export default StyleSheet.create({
  main: {
    ...shared.main,
    backgroundColor: colors.main
  },
  logo: {
    marginBottom: 100,
    marginTop: Platform.select({
      ios: 200,
      android: 160
    }),
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 70
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    paddingBottom: Platform.select({
      ios: 15,
      android: 7
    }),
    margin: 15
  },
  input: {
    color: '#fff',
    paddingLeft: 35,
    flex: 1
  },
  inputIcon: {
    position: 'absolute',
    alignSelf: 'center',
    paddingBottom: Platform.select({
      ios: 18,
      android: 10
    })
  },
  loginButton: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 15
  },
  loginButtonText: {
    color: colors.main,
    fontSize: 15
  }
})
