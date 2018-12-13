import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    flex: 1
  },
  modal: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    backgroundColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -2
    },
    elevation: 3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.main
  },
  headerIcon: {
    padding: 7
  },
  headerText: {
    padding: 7,
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  body: {
    flex: 1
  }
})
