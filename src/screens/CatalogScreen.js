import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { inventory } from '../data/mockInventory';

const CatalogScreen = () => {
  const renderItem = ({ item }) => (
    <ProductCard producto={item} />
  );

  return (
    <View style={styles.container}>
      {/* EL ESCUDO SEMÁNTICO: Forzamos la lectura limpia ignorando los estilos visuales */}
      <Text 
        style={styles.headerTitle} 
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel="Catálogo "
      >
        Catálogo 
      </Text>
      
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F2D', 
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#FFFFFF',
  },
  listContainer: {
    paddingBottom: 20,
  }
});

export default CatalogScreen;