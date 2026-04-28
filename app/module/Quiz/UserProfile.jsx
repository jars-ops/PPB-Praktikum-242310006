import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../components/style/StyleQuiz.js';
import { users } from '../../../constants/user.js';

const PortfolioItem = ({ item }) => {
  return (
    <View style={styles.portfolioItem}>
      <View style={styles.portfolioImageWrapper}>
        <Image source={{ uri: item.image }} style={styles.portfolioImage} />
      </View>
      <View style={styles.blueLine} />
      <Text style={styles.portfolioNameText}>Nama: {item.nama}</Text>
      <Text style={styles.portfolioCodeText}>Code: {item.code}</Text>
    </View>
  );
};

export default function UserProfile() {
  const user = users[0];
  return (
    <SafeAreaView style={styles.container2}>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />

      <View style={styles.blueHeader}>
        <Text style={styles.backButtonText}>BACK</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user.nama}</Text>
            <Text style={styles.profileDetail}>Title: {user.title}</Text>
            <Text style={styles.profileDetail}>Departement: {user.department}</Text>
            <Text style={styles.profileDetail}>Email: {user.email}</Text>
          </View>
          <Image source={{ uri: user.gambar }} style={styles.profileAvatar} />
        </View>

        <View style={styles.portfolioContainer}>
          <Text style={styles.portfolioTitle}>Portofolio List</Text>

          <View style={styles.portfolioGrid}>
            {user.portofolio && user.portofolio.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}