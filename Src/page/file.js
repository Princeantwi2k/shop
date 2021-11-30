import React from 'react';
import {View,Text, StyleSheet,Image} from 'react-native';

const File = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../images/gif.gif")} style={styles.gif}/>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    justifyContent:"center",
    alignItems:"center"
},
gif:{
    height:300,
    width:400
}
})

export default File;
