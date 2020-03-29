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

  incident: {
    marginTop: 24,
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

  contactBox: {
    marginTop: 24,
    padding: 24,
    borderRadius: 6,
    backgroundColor: '#fefefe'
  },

  heroTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#424242'
  },

  heroDescription: {
    marginTop: 6,
    marginBottom: 18,
    color: '#747474'
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: 48,
    borderRadius: 6,
    backgroundColor: '#e02041',
  },

  actionText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fefefe'
  }
});
