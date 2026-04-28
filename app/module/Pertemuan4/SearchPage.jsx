import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookCollections from '../../../components/BookCollection';
import { styles } from '../../../components/style/StyleApp';
import { ListBook } from '../../../constants/list_books';

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = ListBook.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity 
          style={[styles.btn_icon, styles.shadow]}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={[styles.search_container, styles.shadow]}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.search_icon} />
        <TextInput
          style={styles.search_input}
          placeholder="Search here"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} 
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <BookCollections books={filteredBooks} />
      </ScrollView>
    </SafeAreaView>
  );
}