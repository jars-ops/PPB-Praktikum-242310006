import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d69f5',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listPadding: {
    paddingHorizontal: 10
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 10,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10
  },
  cardContent: {
    marginTop: 10
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5
  },
  detailText: {
    fontSize: 11,
    color: '#333'
  },
  blueHeader: {
    backgroundColor: '#4A90E2',
    padding: 15,
    alignItems: 'center'
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between'
  },
  profileInfo: {
    flex: 1
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  profileDetail: {
    fontSize: 14,
    color: '#444'
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  portfolioContainer: {
    padding: 20
  },
  portfolioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  portfolioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  portfolioItem: {
    width: '47%',
    alignItems: 'center',
    marginBottom: 25,
  },
  portfolioImageWrapper: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  portfolioImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  blueLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#4A90E2',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 2,
  },
  portfolioNameText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  portfolioCodeText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 3,
  },
});

export { styles };
