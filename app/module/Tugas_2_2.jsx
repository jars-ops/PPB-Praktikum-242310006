import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Praktikum2 = () => {
  const dataDiri = {
    nama: "Febry",
    beratBadan: 60, 
    tinggiBadan: 165, 
  };

  const porsiMakanan = [
    { waktu: "Sarapan", kalori: 400 },
    { waktu: "Makan Siang", kalori: 600 },
    { waktu: "Makan Malam", kalori: 500 },
    { waktu: "Camilan", kalori: 300 },
  ];

  let totalKalori = 0;
  porsiMakanan.forEach(item => {
    totalKalori += item.kalori;
  });

  const tinggiMeter = dataDiri.tinggiBadan / 100;

  const bmi = (dataDiri.beratBadan / (tinggiMeter * tinggiMeter)).toFixed(2);

  let statusBMI = "";
  if (bmi < 18.5) statusBMI = "Kurus";
  else if (bmi >= 18.5 && bmi <= 24.9) statusBMI = "Ideal";
  else statusBMI = "Berlebih";

  let statusKalori = "";
  if (totalKalori < 1500) statusKalori = "Asupan Kurang";
  else if (totalKalori >= 1500 && totalKalori <= 2200) statusKalori = "Asupan Cukup";
  else statusKalori = "Asupan Berlebih";

  const kesimpulan = (statusBMI === "Ideal" && statusKalori === "Asupan Cukup")
    ? "Berat badan sudah ideal dan asupan kalori sesuai."
    : "Perlu penyesuaian pola makan atau aktivitas fisik.";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Evaluasi Berat Badan Ideal</Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>Pasien</Text>
        <Text>Nama: {dataDiri.nama}</Text>
        <Text>Berat Badan: {dataDiri.beratBadan} kg</Text>
        <Text>Tinggi Badan: {dataDiri.tinggiBadan} cm</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Porsi Makanan Harian</Text>
        {porsiMakanan.map((item, index) => (
          <Text key={index}>{item.waktu} - {item.kalori} kalori</Text>
        ))}
        <Text style={{fontWeight: 'bold'}}>Total Kalori: {totalKalori}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Hasil Perhitungan</Text>
        <Text>BMI: {bmi}</Text>
        <Text>Status BMI: {statusBMI}</Text>
        <Text>Status Kalori: {statusKalori}</Text>
      </View>

      <Text style={styles.kesimpulan}>{kesimpulan}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  section: { marginBottom: 15 },
  title: { fontSize: 16, fontWeight: 'bold', borderBottomWidth: 1, width: 200 },
  kesimpulan: { fontSize: 16, fontWeight: 'bold', marginTop: 20, color: 'blue' }
});

export default Praktikum2;