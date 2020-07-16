import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  paginationContainer: { 
    marginTop: 15, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  lineSeparatorLeft: { 
    borderWidth: 0.5, 
    color: '#707070',
    opacity: 0.5, 
    width: '40%', 
    marginRight: 5
  },
  lineSeparatorRight: {
    borderWidth: 0.5,
    opacity: 0.5, 
    color: '#707070', 
    width: '40%', 
    marginLeft: 5
  },
});
