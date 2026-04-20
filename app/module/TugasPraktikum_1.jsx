import { StyleSheet, Text, View } from 'react-native';

const Praktikum1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Selamat Datang di Praktikum Pemograman Perangkat Bergerak
        </Text>

        <Text style={styles.text}>Nama: Fajar Firdaus</Text>
        <Text style={styles.text}>NIM: 242310006</Text>
        <Text style={styles.text}>Prodi: Teknologi Informasi</Text>
        <Text style={styles.text}>Angkatan: 2024</Text>
        <Text style={styles.text}>Kelas: TI-24-PA</Text>
      </View>
    </View>
  );
};

export default Praktikum1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});