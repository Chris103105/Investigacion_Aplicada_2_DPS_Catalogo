import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';

const DemoComparativa = () => {

  const reservarInventario = () => {
    const mensaje = "Inventario actualizado. Prenda reservada para venta asistida.";
    AccessibilityInfo.announceForAccessibility(mensaje);
  };

  return (
    <View style={styles.container}>
      {/* EL ESCUDO: Evita que lea píxeles, forzando la lectura limpia */}
      <Text 
        style={styles.header} 
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel="Demostración: Web vs Nativo"
      >
        Demostración: Web vs Nativo
      </Text>

      {/* SECCIÓN 1: Lo que hizo el grupo Web (EL ESTILO CONTRARIO - BLANCO) */}
      <View 
        style={styles.cardWeb} 
        // a11y: Ocultamos esto del lector nativo para demostrar que el DOM no funciona aquí
        importantForAccessibility="no" 
        accessibilityElementsHidden={true}
      >
        <Text style={styles.badgeWeb}>Entorno Web (DOM - Grupo Anterior)</Text>
        <Text style={styles.descriptionWeb}>
          En web, el navegador hace el trabajo usando atributos WAI-ARIA estándar:
        </Text>
        <View style={styles.codeBlockWeb}>
          <Text style={styles.codeTextWeb}>
            {'<div aria-live="polite">\n  Prenda reservada\n</div>'}
          </Text>
        </View>
      </View>

      {/* SECCIÓN 2: Nuestro trabajo en React Native (EL ESTILO PREMIUM - OSCURO) */}
      <View style={styles.cardNative} accessible={false}>
        <Text style={styles.badgeNative}>Entorno Móvil (React Native - Nuestro Grupo)</Text>
        <Text style={styles.descriptionNative}>
          Sin DOM, construimos la semántica e invocamos APIs Nativas:
        </Text>
        
        <TouchableOpacity
          style={styles.actionButton}
          onPress={reservarInventario}
          accessibilityRole="button"
          accessibilityHint="Toca dos veces para simular la reserva de inventario en el sistema mPOS."
        >
          <Text style={styles.buttonText}>Confirmar Reserva en mPOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1F2D', // Fondo principal azul oscuro
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  
  // --- ESTILOS DE LA TARJETA WEB (ESTILO CONTRARIO / CLARO) ---
  cardWeb: {
    backgroundColor: '#FFFFFF', // Fondo blanco para resaltar que es diferente
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeWeb: {
    color: '#D32F2F', // Rojo oscuro
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionWeb: {
    color: '#333333', // Texto gris oscuro para contraste en fondo blanco
    fontSize: 14,
    marginBottom: 15,
  },
  codeBlockWeb: {
    backgroundColor: '#F5F5F5', // Gris claro
    padding: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  codeTextWeb: {
    color: '#C62828', // Rojo código
    fontFamily: 'monospace',
    fontSize: 13,
  },

  // --- ESTILOS DE LA TARJETA NATIVA (SU ESTILO PREMIUM) ---
  cardNative: {
    backgroundColor: '#233152', // Azul marino de su paleta
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  badgeNative: {
    color: '#4DABF7', // Azul claro
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionNative: {
    color: '#E0E0E0', // Texto claro
    fontSize: 14,
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#005AC2', 
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default DemoComparativa;