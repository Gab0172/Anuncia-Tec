import React from "react";
import { SafeAreaView, Alert } from "react-native";
import { NativeBaseProvider, Box, VStack, HStack, Text, Divider, Button } from "native-base";
import { getAuth, deleteUser } from 'firebase/auth';

const SuspendAccountScreen = ({ navigation }) => {
  const handleDeleteAccount = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        await deleteUser(user);
        Alert.alert("La cuenta ha sido borrada");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1} p={4}>
          <VStack space={2} alignItems="center" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg" textAlign="center" mt={10} mb={6}>
              Estás a punto de suspender tu cuenta, esto quiere decir que las preguntas, respuestas, mensajería y otra
              actividad que hayas realizado durante el uso de esta aplicación será eliminada.
            </Text>
            <Button colorScheme="blue" onPress={handleDeleteAccount}>
              Eliminar mi cuenta
            </Button>
          </VStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default SuspendAccountScreen;
