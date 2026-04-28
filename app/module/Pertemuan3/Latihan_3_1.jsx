import { StatusBar } from "expo-status-bar";
import { Button, Image, ScrollView, StyleSheet, Text } from "react-native";
import Filler from "../../../components/filler";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
        // justifyContent: "center",
        // alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },

});

const latihan3_1 = () => {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>latihan 3</Text>
        <Image
        source={{ uri: 'https://picsum.photos/100' }}
        style={styles.image}
        />
        <Filler />
        <Button
            title="Go to Latihan 2"
            onPress={() => console.log("Go to Latihan 2")}
            />
            <StatusBar style="auto" />
    </ScrollView>    
    );
};

export default latihan3_1