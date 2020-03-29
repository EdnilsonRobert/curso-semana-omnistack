import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: constants.statusBarHeight + 20,
    paddingHorizontal: 24
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 16,
    color: '#747474'
  },

  headerTextBold: {
    fontWeight: '700'
  },

  title: {
    marginTop: 24,
    marginBottom: 12,
    fontWeight: '700',
    fontSize: 24
  },

  description: {
    fontSize: 16,
    color: '#747474'
  },

  incidentList: {
    marginTop: 24,
  },

  incident: {
    marginBottom: 12,
    padding: 24,
    borderRadius: 6,
    backgroundColor: '#fefefe'
  },

  incidentProperty: {
    fontWeight: '700',
    fontSize: 16,
    color: '#424242'
  },

  incidentValue: {
    marginTop: 6,
    marginBottom: 18,
    color: '#747474'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    fontWeight: '700',
    color: '#e02041'
  }
});
