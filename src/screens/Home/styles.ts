import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#1A1A1A',
      alignItems:'center'
    },
    containerAction: {
        width:'90%',
        flexDirection: 'row',
        marginTop:-30,
    },
    inputText: {
        flex:1,
        height:54,
        borderRadius:8,
        paddingLeft:20,
        fontSize:16,
        backgroundColor:'#333333',
        color:'#fff',
        marginRight:6,
    },
    buttonAdd: {
        width:52,
        borderRadius:8,
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#fff',
        color:'#fff',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1E6F9F'
    },
    containerFilters: {
        height:56,
        width:'90%',
        
        borderBottomWidth: 0.3,
        borderStyle: 'solid',
        borderColor: '#808080',
        flexDirection: 'row',
        marginTop:30,
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
    },
    containerLabel: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    labelCreated : {
        color:'#4EA8DE',
        fontWeight:'bold',
        fontSize: 14,
    },

    labelDone : {
        color:'#8284FA',
        fontWeight:'bold',
        fontSize: 14,      
    },
    labelCount : {
        color:'#fff',
        fontWeight:'bold',
        fontSize: 14,
    },
    countTask : {
        marginLeft:10,
        height:25,
        minWidth:30,
        borderRadius:90,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#333333'
    },
    list : {
        width:'90%',
        
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#fff',
    }

  });