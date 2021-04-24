import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import {Entypo} from '@expo/vector-icons';
import fonts from '../styles/fonts';
import {useNavigation} from '@react-navigation/core'

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification')
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper} >
            <Text style={styles.title}> Gerencie {'\n'}suas plantas de {'\n'} forma fácil</Text>

            <Image 
                style={styles.image} 
                source={wateringImg}
                resizeMode="contain" 
            />

            <Text style={styles.subTitle}>Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.6}
            onPress={handleStart}
            >
                <Text style={styles.buttonText}> 
                <Entypo 
                    name='chevron-thin-right'
                    style={styles.buttonIcon}
                />
                 </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

// criamos um objeto de estilo
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around', //nao deixa colar nas bordas em hipotese nenhuma
        paddingHorizontal: 65,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 38
    },

    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text

    },
    button: {
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width:56
    },

    buttonText: {
        color: colors.white,
        fontSize: 24
    },
    buttonIcon: {
        fontSize:32,
        color: colors.white
    },
    image: {
        height: Dimensions.get('window').width*0.7
    }
});