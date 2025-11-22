export type ProductCategory = 'chuck' | 'welding' | 'drilling' | 'vice' | 'compressor';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  brand: string;
  model: string;
  jawCount?: number;
  diameterMm?: number;
  specs: ProductSpec[];
  shortDescription: string;
  description: string;
  image: string;
  tags?: string[];
}

export const productCategories: Record<ProductCategory, string> = {
  chuck: 'Lathe Chucks',
  welding: 'Welding Machines',
  drilling: 'Drilling Machines',
  vice: 'Vices & Workholding',
  compressor: 'Air Compressors'
};

export const products: Product[] = [
  {
    id: 'P-CH-001',
    slug: 'primo-3jaw-200',
    name: 'Primo Precision 3-Jaw Self-Centering Chuck',
    category: 'chuck',
    brand: 'Primo',
    model: 'SC-200',
    jawCount: 3,
    diameterMm: 200,
    specs: [
      { label: 'Mounting', value: 'A2-6' },
      { label: 'Body Material', value: 'Alloy Steel' },
      { label: 'Runout', value: '<= 0.03 mm' }
    ],
    shortDescription: 'Workshop-favorite chuck for precision turning of medium components.',
    description:
      'Trusted by CNC job shops across Gujarat, the Primo SC-200 delivers consistent accuracy with hardened jaws, a through bore for bar work, and a rugged scroll mechanism that thrives in production environments.',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['ready stock', 'CNC compatible']
  },
  {
    id: 'P-CH-002',
    slug: 'primo-4jaw-300',
    name: 'Primo Heavy 4-Jaw Independent Chuck',
    category: 'chuck',
    brand: 'Primo',
    model: 'IN-300',
    jawCount: 4,
    diameterMm: 300,
    specs: [
      { label: 'Jaw Type', value: 'Independent' },
      { label: 'Body Material', value: 'Cast Steel' },
      { label: 'Max RPM', value: '1500' }
    ],
    shortDescription: 'Independent jaws for off-center machining, maintenance, and repair jobs.',
    description:
      'The Primo IN-300 is the go-to chuck for maintenance shops that need maximum flexibility. Each jaw moves individually, letting machinists clamp non-round or eccentric jobs with confidence.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    tags: ['repair shops']
  },
  {
    id: 'P-CH-003',
    slug: 'hydragrip-big-bore-250',
    name: 'HydraGrip Big Bore Power Chuck',
    category: 'chuck',
    brand: 'HydraGrip',
    model: 'BB-250',
    jawCount: 3,
    diameterMm: 250,
    specs: [
      { label: 'Actuation', value: 'Hydraulic' },
      { label: 'Through Bore', value: '85 mm' },
      { label: 'Jaw Stroke', value: '8 mm' }
    ],
    shortDescription: 'High-grip hydraulic chuck built for CNC turning centers handling tube sections.',
    description:
      'HydraGrip big bore chucks combine a lightweight body with strong gripping force, ideal for automotive ancillaries machining castings or tubing. Compatible with most hydraulic cylinders delivered with adaptor plates.',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=800&q=80',
    tags: ['CNC', 'power chuck']
  },
  {
    id: 'P-WE-001',
    slug: 'ferroweld-mma-250',
    name: 'FerroWeld MMA 250 Inverter Welder',
    category: 'welding',
    brand: 'FerroWeld',
    model: 'MMA-250i',
    specs: [
      { label: 'Input', value: '230V / 50Hz' },
      { label: 'Rated Current', value: '40 – 250 A' },
      { label: 'Weight', value: '6.4 kg' }
    ],
    shortDescription: 'Rugged inverter welder for fabrication shops and on-site work.',
    description:
      'Hot-start and anti-stick features allow smooth arc striking even with rusty electrodes. Carry handle and IP23 protection make it ready for contractors working across Gujarat.',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
    tags: ['portable']
  },
  {
    id: 'P-WE-002',
    slug: 'ferroweld-tig-200',
    name: 'FerroWeld TIG 200 AC/DC',
    category: 'welding',
    brand: 'FerroWeld',
    model: 'TIG-200ACDC',
    specs: [
      { label: 'Processes', value: 'MMA + TIG' },
      { label: 'Duty Cycle', value: '60% @ 200A' },
      { label: 'Features', value: 'Pulse, Spot, 2T/4T' }
    ],
    shortDescription: 'For stainless fabrication, railings, and aluminum job work.',
    description:
      'Dual-voltage TIG inverter with intuitive front panel, foot pedal ready, and memorized jobs for repeatable welding parameters.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-DR-001',
    slug: 'swiftcut-magdrill-32',
    name: 'SwiftCut Magnetic Drill SC-32',
    category: 'drilling',
    brand: 'SwiftCut',
    model: 'SC-32',
    specs: [
      { label: 'Capacity', value: '32 mm annular' },
      { label: 'Stroke', value: '80 mm' },
      { label: 'Motor', value: '1200 W' }
    ],
    shortDescription: 'Compact mag drill for fabrication contractors and erection crews.',
    description:
      'Powerful electromagnet with dual coil ensures grip on mild steel plates, while lightweight construction makes transport easy between sites.',
    image: 'https://images.unsplash.com/photo-1508896694512-7a3a6a3d05e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-DR-002',
    slug: 'summit-pillar-drill-25',
    name: 'SummitDrill 25 mm Pillar Drill',
    category: 'drilling',
    brand: 'SummitDrill',
    model: 'PD-25',
    specs: [
      { label: 'Spindle Taper', value: 'MT-3' },
      { label: 'Speed Steps', value: '9' },
      { label: 'Table Size', value: '280 x 280 mm' }
    ],
    shortDescription: 'Workshop-grade pillar drill for small batch production.',
    description:
      'Robust column, rack-and-pinion height adjustment, and coolant trough make the PD-25 a staple in tool rooms and maintenance shops.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-VI-001',
    slug: 'forgepro-tilting-vice-150',
    name: 'ForgePro Tilting Machine Vice 150 mm',
    category: 'vice',
    brand: 'ForgePro',
    model: 'TV-150',
    specs: [
      { label: 'Jaw Width', value: '150 mm' },
      { label: 'Opening', value: '160 mm' },
      { label: 'Base', value: '360° Swivel' }
    ],
    shortDescription: 'Swivel-tilt vice for toolroom milling and drilling setups.',
    description:
      'Nitrided jaws, positive locking angles, and laser-etched graduations help machinists reduce setup time for angular jobs.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-VI-002',
    slug: 'gripmax-hydraulic-vice-160',
    name: 'Gripmax Hydraulic Machine Vice 160 mm',
    category: 'vice',
    brand: 'Gripmax',
    model: 'HV-160',
    specs: [
      { label: 'Clamping Force', value: '6000 kgf' },
      { label: 'Repeatability', value: '±0.01 mm' },
      { label: 'Body', value: 'Ductile Iron' }
    ],
    shortDescription: 'Low-profile vice for VMCs machining precision components.',
    description:
      'Hydraulic booster multiplies operator input, providing vibration-free clamping and clean chip evacuation for CNC applications.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-AC-001',
    slug: 'nordair-piston-5hp',
    name: 'NordAir 5 HP Two-Stage Piston Compressor',
    category: 'compressor',
    brand: 'NordAir',
    model: 'NA-5HP',
    specs: [
      { label: 'Displacement', value: '18 cfm' },
      { label: 'Tank', value: '300 litres' },
      { label: 'Motor', value: '3.7 kW' }
    ],
    shortDescription: 'Reliable air for automotive garages and paint shops.',
    description:
      'Cast iron pump with deep fins keeps temperatures under control even in Ahmedabad summers, while belt guard improves safety.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-AC-002',
    slug: 'nordair-screw-10hp',
    name: 'NordAir 10 HP Screw Compressor with Dryer',
    category: 'compressor',
    brand: 'NordAir',
    model: 'NAS-10',
    specs: [
      { label: 'FAD', value: '40 cfm @ 8 bar' },
      { label: 'Controller', value: 'Touch PLC' },
      { label: 'Integrated Dryer', value: 'Yes' }
    ],
    shortDescription: 'Continuous-duty screw compressor for SMEs upgrading from piston units.',
    description:
      'Plug-and-play skid with low noise enclosure, IE3 motor, and energy-saving load/unload control tailored for textile ancillaries and packaging units.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'P-SP-001',
    slug: 'proarc-welding-rotator',
    name: 'ProArc Welding Rotator WR-10',
    category: 'welding',
    brand: 'ProArc',
    model: 'WR-10',
    specs: [
      { label: 'Load Capacity', value: '10 tons' },
      { label: 'Roller Diameter', value: '300 mm' },
      { label: 'Speed', value: '0.3 – 2 RPM' }
    ],
    shortDescription: 'Self-aligning rotator for fabrication of pressure vessels and tanks.',
    description:
      'Polyurethane rollers, heavy-duty base, and wired remote make WR-10 ideal for boiler and process equipment manufacturers.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    tags: ['heavy fabrication']
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, limit);
}

export function getUniqueBrands() {
  return Array.from(new Set(products.map((product) => product.brand))).sort();
}

export interface ProductFilters {
  category?: ProductCategory;
  brand?: string;
  jawCount?: number;
  minDiameter?: number;
  maxDiameter?: number;
  search?: string;
}

export function filterProducts(allProducts: Product[], filters: ProductFilters) {
  return allProducts.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }
    if (typeof filters.jawCount === 'number' && product.jawCount !== filters.jawCount) {
      return false;
    }
    if (typeof filters.minDiameter === 'number' && (product.diameterMm ?? 0) < filters.minDiameter) {
      return false;
    }
    if (typeof filters.maxDiameter === 'number' && (product.diameterMm ?? Infinity) > filters.maxDiameter) {
      return false;
    }
    if (filters.search) {
      const text = `${product.name} ${product.brand} ${product.shortDescription}`.toLowerCase();
      if (!text.includes(filters.search.toLowerCase())) {
        return false;
      }
    }
    return true;
  });
}
