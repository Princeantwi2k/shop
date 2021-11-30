import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Haert = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../images/gif1.gif")} style={styles.gif} />
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
        width:300,
    }
})

export default Haert;
