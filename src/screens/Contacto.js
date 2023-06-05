import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, Linking, ScrollView } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
} from "native-base";

import Logotipo from "../images/Logotipo.png";

const ContactScreen = ({ navigation }) => {
  const handlePhonePress = () => {
    Linking.openURL("tel:45454545");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:Anunciatec@gmail.com");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView style={styles.container}>
      <NativeBaseProvider>
        <Center flex={1}>
          <Box maxWidth="90%" mx="auto">
            <Center>
              <Image
                source={Logotipo}
                style={{
                  width: "100%",
                  aspectRatio: 1,
                  marginBottom: 50,
                }}
              />
            </Center>
            <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
              Correo electrónico: 
            </Text>
            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={styles.contactText}>Anunciatec@gmail.com</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
            Teléfono: 
            </Text>
            <TouchableOpacity onPress={handlePhonePress}>
              <Text style={styles.contactText}>45454545</Text>
            </TouchableOpacity>
          </Box>
        </Center>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contactText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactScreen;
