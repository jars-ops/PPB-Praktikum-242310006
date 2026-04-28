import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Latihan_3_2 = () => {
  const PersonalData = {
    name: "Anton Sukamto",
    nim: "20200101",
    address:
      "Jl. Rangga Gading, No.01, Gudang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat",
    email: "anton.sukamto@ibik.ac.id",
    phone_number: "081234567890",
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/100' }}
        style={styles.imgAvatar}
      />
      <Text style={styles.headerTitle}>Nama: {PersonalData.name}</Text>
      <Text style={styles.headerSubtitle}>NIM: {PersonalData.nim}</Text>

      <View style={styles.identityContainer}>
        <Text style={styles.identityTitle}>Phone</Text>
        <TextInput
          value={PersonalData.phone_number}
          keyboardType="numeric"
          style={styles.cardInput}
        />
      </View>

      <View style={styles.identityContainer}>
        <Text style={styles.identityTitle}>Email</Text>
        <TextInput
          value={PersonalData.email}
          keyboardType="email-address"
          style={styles.cardInput}
        />
      </View>

      <View style={styles.identityContainer}>
        <Text style={styles.identityTitle}>Address</Text>
        <TextInput
          value={PersonalData.address}
          multiline={true}
          style={styles.cardInput}
        />
      </View>

      <View style={styles.identityContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24, 
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#9b9d9f",
  },
  imgAvatar: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 4,
    backgroundColor: "#f2f2f2",
    borderColor: "#f2f2f2",
    marginBottom: 10,
  },
  identityContainer: {
    paddingHorizontal: 10,
    marginTop: 15,
    alignSelf: "stretch",
  },
  cardInput: {
    borderWidth: 1,
    borderColor: "#9b9d9f",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: "#000",
  },
  identityTitle: {
    fontSize: 14,
    color: "#9b9d9f",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#0ea6d0",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Latihan_3_2;