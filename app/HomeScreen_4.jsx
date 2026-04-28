import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BookCollections from '../components/BookCollection';
import Categoriesnav from '../components/categoriesnav';
import CTABook from '../components/CTABook';
import Header from '../components/header';

import { color_list, styles } from '../components/style/StyleApp';
import { ListBook } from '../constants/list_books';

export default function HomeScreen_4() {
    const lastbook = ListBook && ListBook.length > 0 ? ListBook[ListBook.length - 1] : null;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            
            {/* HEADER */}
            <Header />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {/* MAIN CONTENT */}
                <View style={{ flex: 1 }}>
                    {lastbook && <CTABook book={lastbook} />}
                    
                    <Categoriesnav />
                    
                    <BookCollections books={ListBook || []} />
                </View>

                {/* FOOTER */}
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ color: color_list?.green }}>
                        &copy; 2024 Febry Damatrasetra Fairuz
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}