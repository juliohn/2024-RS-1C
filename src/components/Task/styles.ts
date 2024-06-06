import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex:1,
        height:64,
        flexDirection: 'row',
        backgroundColor: '#333333',
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius:8,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#808080',
        marginBottom:8,
        paddingLeft:10
    },
    containerDone: {
        textDecorationLine: 'line-through'
    },
    containerActionDone: {
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    containerActionDelete : {
        alignItems:'center',
        justifyContent: 'center',
        height:60,
        width:'15%',
    },
    containerActionCheck: {
        alignItems:'center',
        justifyContent: 'center',
        height:60,
        width:'13%'
    },
    containerActionCheckBorder: {
        alignItems:'center',
        justifyContent: 'center',
        height:20,
        width:20,
        borderRadius:100,
        borderColor:'#4EA8DE',
        borderWidth :1,
    },
    containerDescription: {
        flex:1,
        flexWrap:'wrap',
        height:55,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft:5,
    },
    description : {
        color: '#ffffff',
        fontSize:16
    },
  });