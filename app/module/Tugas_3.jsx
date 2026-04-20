import {
    Image,
    ImageBackground,
    ScrollView,
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
    address: "Jl. Rangga Gading, No.01, Bogor",
    email: "anton.sukamto@ibik.ac.id",
    phone_number: "081234567890",
    age: 21, 
    isStudent: true,
    skills: ["React Native", "Java", "Networking"], 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1557683316-973673baf926' }}
        style={styles.headerBackground}
      >
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.imgAvatar}
        />
      </ImageBackground>

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
        <Text style={styles.identityTitle}>Skills</Text>
        <Text style={styles.textData}>{PersonalData.skills.join(", ")}</Text>
      </View>

      <View style={styles.identityContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 30,
  },
  headerBackground: {
    width: '100%',
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
    width: 120,
    height: 120,
    borderRadius: 60, 
    borderWidth: 4,
    borderColor: "#fff",
  },
  identityContainer: {
    paddingHorizontal: 20,
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
  textData: {
    fontSize: 16,
    color: "#333",
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