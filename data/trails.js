// ============================================================================
// MAPA BOSQUE ABIERTO MTB V38 - BASE DE DATOS DE RUTAS
// ============================================================================
// Mejoras V38:
// - NUEVA FUNCIONALIDAD: Navegación a cada ubicación (Google Maps + Waze)
// - Coordenadas precisas de punto de inicio para cada ruta
// - Botones de navegación en popups y tarjetas
// - Total rutas: 16 circuitos MTB
//
// Mejoras V37:
// - Lazy loading de rutas (solo puntos verdes al inicio)
// ============================================================================

const TRAILS = [
  {
    id: "ruta-001",
    name: "Pista Dichato Clasica",
    type: "DH",
    club: "SKILL BIKE",
    difficulty: "negro",
    distanceKm: 2.42,
    ascent: 29,
    descent: 270,
    location: "DICHATO",
    region: "Biobío",
    kmz: "kmz/ SKILL BIKE_DH_DICHATO _BIKE PARK _NEGRO.kmz",
    gpx: "gpx/skill-bike-park-negro.gpx",
    // V38: Coordenadas del punto de inicio para navegación
    startCoords: [-72.9308, -36.5489]
  },
  {
    id: "ruta-002",
    name: "Villa Esperanza",
    type: "DH",
    club: "ADRENALINA DOWNHILL",
    difficulty: "negro",
    distanceKm: 0.91,
    ascent: 0,
    descent: 0,
    location: "LOS LAGOS",
    region: "Los Ríos",
    kmz: "kmz/ADRENALINA DOWNHILL_ DH_ LOS LAGOS_ Villa Esperanza_ NEGRO.kmz",
    gpx: "gpx/adrenalina-downhill-los-lagos-villa-esperanza.gpx",
    startCoords: [-72.8167, -39.8500]
  },
  {
    id: "ruta-003",
    name: "2do Desafío Club Ciclismo Zona 7",
    type: "XC",
    club: "CICLISMO ZONA 7",
    difficulty: "azul",
    distanceKm: 59.99,
    ascent: 1373,
    descent: 1369,
    location: "CAUQUENES",
    region: "Maule",
    kmz: "kmz/CICLISMO ZONA 7_ XC_CAUQUENES_XCM_AZUL.kmz",
    gpx: "gpx/ciclismo-zona-7-cauquenes-xcm-azul.gpx",
    startCoords: [-72.3167, -35.9667]
  },
  {
    id: "ruta-005",
    name: "FUNDO MANCO",
    type: "DH",
    club: "FUNDO MANCO",
    difficulty: "negro",
    distanceKm: 1.16,
    ascent: 2,
    descent: 113,
    location: "CORONEL",
    region: "Biobío",
    kmz: "kmz/FUNDO MANCO_DH_CORONEL_FUNDO MANCO_NEGRO .kmz",
    gpx: "gpx/fundo-manco-negro.gpx",
    startCoords: [-73.1500, -37.0167]
  },
  {
    id: "ruta-006",
    name: "Dh antigua P1 2022",
    type: "DH",
    club: "HIJOS DE PENCO",
    difficulty: "negro",
    distanceKm: 1.88,
    ascent: 59,
    descent: 297,
    location: "PENCO",
    region: "Biobío",
    kmz: "kmz/HIJOS DE PENCO_DH_PENCO_BIKE PARK _NEGRO.kmz",
    gpx: "gpx/penco-bike-park-negro.gpx",
    startCoords: [-72.9950, -36.7400]
  },
  {
    id: "ruta-007",
    name: "Potrerito Molino Pichilo 2",
    type: "XC",
    club: "LANPU BIKE",
    difficulty: "azul",
    distanceKm: 43.23,
    ascent: 0,
    descent: 0,
    location: "ARAUCO",
    region: "Biobío",
    kmz: "kmz/LANPU BIKE_XC_ ARAUCO_ LOS CASTA#U00d1OS_ AZUL.kmz",
    gpx: "gpx/arauco-los-castan-os-bike-azul.gpx",
    startCoords: [-73.3167, -37.2500]
  },
  {
    id: "ruta-008",
    name: "LEFU XC",
    type: "XC",
    club: "LEFU BIKE",
    difficulty: "azul",
    distanceKm: 48.85,
    ascent: 0,
    descent: 0,
    location: "LEBU",
    region: "Biobío",
    kmz: "kmz/LEFU BIKE_XC_LEBU- LEFU XC_ AZUL.kmz",
    gpx: "gpx/lefu-bike-xc-azul.gpx",
    startCoords: [-73.6500, -37.6000]
  },
  {
    id: "ruta-009",
    name: "Desafío medio AMT 2025",
    type: "XC",
    club: "MAULEN RIDERS",
    difficulty: "azul",
    distanceKm: 18.75,
    ascent: 904,
    descent: 907,
    location: "GORBEA",
    region: "La Araucanía",
    kmz: "kmz/MAULEN RIDERS_XC_GORBEA_XCM GORBEA_ AZUL.kmz",
    gpx: "gpx/maulen-riders-xc-gorbea-azul.gpx",
    startCoords: [-72.6800, -39.1000]
  },
  {
    id: "ruta-010",
    name: "Desafío XCM Ruta del Oro 2025",
    type: "XC",
    club: "MTB 3 PEDALES",
    difficulty: "azul",
    distanceKm: 47.76,
    ascent: 1263,
    descent: 1262,
    location: "MAFIL",
    region: "Los Ríos",
    kmz: "kmz/MTB 3 PEDALES_XC_MAFIL_ Ruta del Oro_AZUL.kmz",
    gpx: "gpx/ruta-del-oro-mtb-pedals-blue.gpx",
    startCoords: [-72.9500, -39.6667]
  },
  {
    id: "ruta-011",
    name: "LOS ALAMOS XC",
    type: "XC",
    club: "MTB LOS ALAMOS",
    difficulty: "azul",
    distanceKm: 58.3,
    ascent: 0,
    descent: 0,
    location: "ARAUCO",
    region: "Biobío",
    kmz: "kmz/MTB LOS ALAMOS_XC_ARAUCO_ LOS ALAMOS XC_AZUL.kmz",
    gpx: "gpx/los-alamos-xc-azul.gpx",
    startCoords: [-73.4667, -37.6333]
  },
  {
    id: "ruta-012",
    name: "DH Series",
    type: "DH",
    club: "PRO BIKE",
    difficulty: "negro",
    distanceKm: 2.42,
    ascent: 0,
    descent: 0,
    location: "CUREPTO",
    region: "Maule",
    kmz: "kmz/PRO BIKE_DH _CUREPTO_ DH Series_ NEGRO.kmz",
    gpx: "gpx/pro-bike-dh-curepto-negro.gpx",
    startCoords: [-72.0167, -35.0833]
  },
  {
    id: "ruta-013",
    name: "PUMONES",
    type: "DH",
    club: "PUMONES FAST",
    difficulty: "negro",
    distanceKm: 2.42,
    ascent: 0,
    descent: 0,
    location: "CONSTITUCIÓN",
    region: "Maule",
    kmz: "kmz/PUMONES FAST_RACING DH_CONSTITUCION_PUMONES_ NEGRO.kmz",
    gpx: "gpx/pumones-fast-racing-negro.gpx",
    startCoords: [-72.4167, -35.3333]
  },
  {
    id: "ruta-014",
    name: "XCM PUTÚ PEDALEA",
    type: "XC",
    club: "PUTU BIKE",
    difficulty: "azul",
    distanceKm: 56.62,
    ascent: 2512,
    descent: 2507,
    location: "CONSTITUCIÓN",
    region: "Maule",
    kmz: "kmz/PUTU BIKE_XC_ Constituci#U00f3n_ XCM PUTU PEDALES _ AZUL.kmz",
    gpx: "gpx/putu-u-bike-xc-constitucio-un-pedals-azul.gpx",
    startCoords: [-72.4100, -35.3400]
  },
  {
    id: "ruta-015",
    name: "RUKARACE",
    type: "DH",
    club: "RUKAFEST",
    difficulty: "negro",
    distanceKm: 1.0,
    ascent: 0,
    descent: 0,
    location: "COELEMU",
    region: "Ñuble",
    kmz: "kmz/RUKAFEST_DH_COELEMU_RUKARACE_NEGRO.kmz",
    gpx: "gpx/rukafest-coelemu-rukarace-negro.gpx",
    startCoords: [-72.7000, -36.4833]
  },
  {
    id: "ruta-016",
    name: "Meloza",
    type: "DH",
    club: "ASSEM",
    difficulty: "negro",
    distanceKm: 2.17,
    ascent: 0,
    descent: 0,
    location: "COLBÚN",
    region: "Maule",
    kmz: "kmz/ASSEM_Maule_DH_Colbun_Meloza__NEGRO.kmz",
    gpx: "gpx/assem-meloza-negro.gpx",
    startCoords: [-71.4167, -35.6833]
  }
];

// ============================================================================
// V38 - FUNCIONES DE NAVEGACIÓN
// ============================================================================

/**
 * Genera URL de Google Maps para navegación
 * @param {number} lat - Latitud
 * @param {number} lng - Longitud
 * @param {string} name - Nombre del lugar (opcional)
 * @returns {string} URL de Google Maps
 */
function getGoogleMapsUrl(lat, lng, name = '') {
  // Formato para navegación directa
  const encodedName = encodeURIComponent(name);
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
}

/**
 * Genera URL de Waze para navegación
 * @param {number} lat - Latitud
 * @param {number} lng - Longitud
 * @returns {string} URL de Waze
 */
function getWazeUrl(lat, lng) {
  return `https://www.waze.com/ul?ll=${lat},${lng}&navigate=yes`;
}

/**
 * Obtiene las coordenadas de navegación para una ruta
 * @param {string} trailId - ID de la ruta
 * @returns {object|null} {lat, lng} o null si no se encuentra
 */
function getNavigationCoords(trailId) {
  const trail = TRAILS.find(t => t.id === trailId);
  if (!trail) return null;
  
  // Primero intentar coordenadas específicas de inicio
  if (trail.startCoords && trail.startCoords.length === 2) {
    return {
      lng: trail.startCoords[0],
      lat: trail.startCoords[1]
    };
  }
  
  // Fallback a coordenadas aproximadas
  return null;
}

/**
 * Abre navegación en Google Maps
 * @param {number} lat - Latitud
 * @param {number} lng - Longitud
 * @param {string} name - Nombre del lugar
 */
function navigateWithGoogleMaps(lat, lng, name) {
  const url = getGoogleMapsUrl(lat, lng, name);
  window.open(url, '_blank');
}

/**
 * Abre navegación en Waze
 * @param {number} lat - Latitud
 * @param {number} lng - Longitud
 */
function navigateWithWaze(lat, lng) {
  const url = getWazeUrl(lat, lng);
  window.open(url, '_blank');
}

// ============================================================================
// UTILIDADES DE CÁLCULO
// ============================================================================

/**
 * Calcula distancia y desnivel desde geometría GeoJSON
 * Esta función se ejecutará automáticamente al cargar los KMZ
 */
function calculateMetrics(geometry) {
  let totalDistance = 0;
  let totalAscent = 0;
  let totalDescent = 0;
  
  const coords = geometry.type === 'LineString' 
    ? [geometry.coordinates] 
    : geometry.coordinates;
  
  coords.forEach(segment => {
    for (let i = 0; i < segment.length - 1; i++) {
      const [lon1, lat1, ele1 = 0] = segment[i];
      const [lon2, lat2, ele2 = 0] = segment[i + 1];
      
      // Distancia haversine
      const R = 6371000; // Radio de la Tierra en metros
      const φ1 = lat1 * Math.PI / 180;
      const φ2 = lat2 * Math.PI / 180;
      const Δφ = (lat2 - lat1) * Math.PI / 180;
      const Δλ = (lon2 - lon1) * Math.PI / 180;
      
      const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      
      totalDistance += R * c;
      
      // Desnivel
      const elevDiff = ele2 - ele1;
      if (elevDiff > 0) {
        totalAscent += elevDiff;
      } else {
        totalDescent += Math.abs(elevDiff);
      }
    }
  });
  
  return {
    distanceKm: totalDistance / 1000,
    ascent: Math.round(totalAscent),
    descent: Math.round(totalDescent)
  };
}

/**
 * Retorna resumen de estadísticas totales
 */
function getTotalStats() {
  const totalTrails = TRAILS.length;
  const totalKm = TRAILS.reduce((sum, t) => sum + (t.distanceKm || 0), 0);
  const totalAscent = TRAILS.reduce((sum, t) => sum + (t.ascent || 0), 0);
  
  return {
    trails: totalTrails,
    kilometers: totalKm.toFixed(1),
    ascent: totalAscent
  };
}
