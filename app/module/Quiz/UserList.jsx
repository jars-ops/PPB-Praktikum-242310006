import { FlatList, Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../components/style/StyleQuiz.js';
import { users } from '../../../constants/user.js';

export default function UserList() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.gambar }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.nameText}>{item.nama}</Text>
        <Text style={styles.detailText}>Title: {item.title}</Text>
        <Text style={styles.detailText}>Department: {item.department}</Text>
        <Text style={styles.detailText} numberOfLines={2}>Email: {item.email}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>List User</Text>
        <Text>Total User: {users.length}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.listPadding}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}