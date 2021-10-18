import { StyleSheet } from 'react-native';
import Colors from './Color';

export default StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        flex: 1,
        backgroundColor: Colors.blue
    },
    character_view_container:{
        width: '100%',
        height: 70,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginTop: 12,
        flexDirection: 'row'
    },
    character_view_avatar:{
        width: '20%',
    },
    character_view_context:{
        width: '70%',
    },
    character_title:{
        fontSize: 18,
        marginTop: 6,
        fontWeight: '600'
    }
})