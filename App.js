import React, { useState } from 'react';
// IMPORTANTE: Mantenemos Platform
import { SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';

import CatalogScreen from './src/screens/CatalogScreen';
import DemoComparativa from './src/screens/DemoComparativa';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('catalogo');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* NUEVO: barStyle="light-content" para iconos blancos en Android/iOS */}
      <StatusBar barStyle="light-content" backgroundColor="#1A1F2D" />
      
      {/* --- BARRA DE NAVEGACIÓN --- */}
      <View style={styles.navBar} importantForAccessibility="no-hide-descendants">
        <TouchableOpacity 
          style={[styles.navButton, pantallaActual === 'catalogo' && styles.navButtonActive]}
          onPress={() => setPantallaActual('catalogo')}
          accessibilityRole="tab"
          accessibilityState={{ selected: pantallaActual === 'catalogo' }}
        >
          <Text style={[styles.navText, pantallaActual === 'catalogo' && styles.navTextActive]}>
            Catálogo POS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, pantallaActual === 'demo' && styles.navButtonActive]}
          onPress={() => setPantallaActual('demo')}
          accessibilityRole="tab"
          accessibilityState={{ selected: pantallaActual === 'demo' }}
        >
          <Text style={[styles.navText, pantallaActual === 'demo' && styles.navTextActive]}>
            Demo vs Web
          </Text>
        </TouchableOpacity>
      </View>

      {/* --- RENDERIZADO DE PANTALLAS --- */}
      {pantallaActual === 'catalogo' ? <CatalogScreen /> : <DemoComparativa />}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // NUEVO: El fondo principal más oscuro de la paleta (Muestra 1)
    backgroundColor: '#1A1F2D',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  navBar: {
    flexDirection: 'row',
    // NUEVO: Mismo fondo principal (Muestra 1)
    backgroundColor: '#1A1F2D',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    // NUEVO: Un borde gris muy sutil
    borderBottomColor: '#2C354A',
    justifyContent: 'space-evenly',
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    // NUEVO: Fondo de botón inactivo gris-azulapagado (Muestra 4)
    backgroundColor: '#354261',
  },
  navButtonActive: {
    // NUEVO: Fondo activo más claro (Muestra 3)
    backgroundColor: '#193A70', 
  },
  navText: {
    fontSize: 14,
    // NUEVO: Texto de botón inactivo gris claro
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  navTextActive: {
    // NUEVO: Texto de botón activo blanco puro
    color: '#FFFFFF', 
  }
});