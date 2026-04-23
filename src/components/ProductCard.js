import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, AccessibilityInfo } from 'react-native';
// AQUÍ ESTÁ LA CONEXIÓN: Importamos la paleta oscura desde el archivo separado
import { styles } from './ProductCardStyles';

const ProductCard = ({ producto }) => {
  // 1. LA MAGIA: Si el producto trae tallas (como el zapato), las usa. Si no trae (ropa), asume S, M, L por defecto.
  const opcionesTallas = producto.tallas || ['S', 'M', 'L'];

  // 2. Iniciamos el estado automáticamente con la primera opción disponible de la lista
  const [tallaSeleccionada, setTallaSeleccionada] = useState(opcionesTallas[0]);

  // Función para simular agregar al mPOS con feedback auditivo
  const handleAgregarCarrito = () => {
    const mensaje = `${producto.nombre} talla ${tallaSeleccionada} reservado en mPOS.`;
    
    // a11y: Anuncio dinámico para notificar a usuarios con discapacidad visual
    AccessibilityInfo.announceForAccessibility(mensaje);
    console.log(mensaje); // Para que lo veas en tu terminal
  };

  // Frase semántica principal
  const a11yLabel = `${producto.nombre}. Precio: $${producto.precio}. Estado: ${producto.estado}.`;

  return (
    <View style={styles.cardContainer}>
      {/* SECCIÓN 1: Información del Producto */}
      <View 
        style={styles.infoRow}
        accessible={true}
        accessibilityLabel={a11yLabel}
        accessibilityRole="summary"
      >
        <Image 
          source={{ uri: producto.imagenUrl }} 
          style={styles.image} 
          importantForAccessibility="no" 
        />
        <View style={styles.infoText}>
          <Text style={styles.title}>{producto.nombre}</Text>
          <Text style={styles.price}>${producto.precio.toFixed(2)}</Text>
          <Text style={[
            styles.status, 
            producto.estado === 'reservado' ? styles.statusReserved : styles.statusAvailable
          ]}>
            {producto.estado.toUpperCase()}
          </Text>
        </View>
      </View>

      {/* SECCIÓN 2: Selector de Tallas (Prueba de Estado y Touch Target) */}
      <View style={styles.sizesContainer}>
        <Text style={styles.sizesLabel} importantForAccessibility="no">Talla:</Text>
        
        {/* 3. Mapeamos nuestra lista inteligente (opcionesTallas) en lugar de la fija */}
        {opcionesTallas.map((talla) => {
          const isSelected = tallaSeleccionada === talla;
          return (
            <TouchableOpacity
              key={talla}
              style={[
                styles.sizeButton, 
                isSelected && styles.sizeButtonSelected
              ]}
              onPress={() => setTallaSeleccionada(talla)}
              // a11y: Definimos el rol y el ESTADO de selección
              accessibilityRole="radio"
              accessibilityState={{ selected: isSelected }}
              accessibilityLabel={`Talla ${talla}`}
              // a11y: Expandimos el área táctil para cumplir métricas de iOS/Android
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <Text style={[
                styles.sizeText, 
                isSelected && styles.sizeTextSelected
              ]}>
                {talla}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* SECCIÓN 3: Botón de Acción Principal */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAgregarCarrito}
        accessibilityRole="button"
        accessibilityHint="Agrega este producto con la talla seleccionada a tu reserva ."
      >
        <Text style={styles.addButtonText}>Añadir al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;