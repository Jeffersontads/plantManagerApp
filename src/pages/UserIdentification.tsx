import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput,KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../componentes/Button';
import { useNavigation } from '@react-navigation/native';

export function UserIdentification() {
const [isFocused, setIsFocused] = useState(false);
const [isFilled, setIsFilled] = useState(false);
const [name, setName] = useState<string>();
const navigation = useNavigation();


function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!name);
}

function handleInputFocus() {
    setIsFocused(true)
}

function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
}

function handleSubmit() {
    navigation.navigate('Confirmation')
}
    
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView  
            style={styles.container}
            //verifica qual sistema op e da um height de compartamento quando tem aparição do teclado.
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {/* ao tocar na tela quando o teclado esta aparecendo ele fecha o teclado */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.content}>
                <View style={styles.form}>
                <Text style={styles.emoji}>
                        { isFilled ? '😄' : '🤔' }
                    </Text>
                    <Text style={styles.title}>
                        Como podemos chamar você?
                    </Text>
                    <TextInput 
                    style={[styles.input, (isFocused || isFilled) && {borderColor: colors.green}]}
                    placeholder="Digite seu nome"
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                    />
                    <View style={styles.footer}>
                        
                    <Button 
                    title="Confirmar"
                    onPress={handleSubmit}
                    />
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
    content: {
        flex: 1,
        width: '100%'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },

    emoji: {
        fontSize: 50
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});