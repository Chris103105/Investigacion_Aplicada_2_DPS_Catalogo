import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    // Un tono azul "medianoche" mucho más oscuro
    backgroundColor: '#172136', 
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    // Sombra ligeramente más fuerte para contrastar la oscuridad
    shadowColor: '#ffffff',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 8, 
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    // Fondo de imagen un tono más oscuro
    backgroundColor: '#233152', 
  },
  infoText: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    // Blanco puro para máxima legibilidad
    color: '#FFFFFF', 
  },
  price: {
    fontSize: 15,
    // Gris muy claro para jerarquía visual
    color: '#CBD5E0',
    marginTop: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
  },
  // Colores de estado vibrantes (se mantienen igual para que destaquen)
  statusAvailable: { color: '#4ADE80' }, 
  statusReserved: { color: '#FBBF24' }, 
  
  sizesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sizesLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 10,
  },
  sizeButton: {
    // Tono más oscuro para los botones de talla inactivos
    backgroundColor: '#233152',
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  sizeButtonSelected: {
    // Un azul profundo y elegante para la selección activa
    backgroundColor: '#0F254A',
    borderWidth: 1,
    borderColor: '#3B82F6', // Borde azul intermedio
  },
  sizeText: {
    fontSize: 14,
    color: '#E2E8F0',
    fontWeight: 'bold',
  },
  sizeTextSelected: {
    color: '#FFFFFF',
  },

  addButton: {
    // Un azul de acción más profundo e intenso
    backgroundColor: '#010912',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});