export interface Brand {
  name: string;
  description: string;
  origin: string;
  specialties: string[];
  logo: string;
  website?: string;
}

export const brands: Brand[] = [
  {
    name: 'Primo',
    description: 'High-precision scroll and independent chucks trusted by tool rooms.',
    origin: 'Rajkot, India',
    specialties: ['Self-centering chucks', 'Independent chucks'],
    logo: '/images/brands/primo.svg'
  },
  {
    name: 'HydraGrip',
    description: 'Power chucks and hydraulic workholding for CNC turning centers.',
    origin: 'Pune, India',
    specialties: ['Big bore chucks', 'Hydraulic cylinders'],
    logo: '/images/brands/hydragrip.svg'
  },
  {
    name: 'FerroWeld',
    description: 'Complete welding portfolio from inverters to automation.',
    origin: 'Chennai, India',
    specialties: ['MMA', 'TIG', 'Automation'],
    logo: '/images/brands/ferroweld.svg'
  },
  {
    name: 'SwiftCut',
    description: 'Portable drilling and cutting solutions for site contractors.',
    origin: 'Mumbai, India',
    specialties: ['Magnetic drills', 'Annular cutters'],
    logo: '/images/brands/swiftcut.svg'
  },
  {
    name: 'SummitDrill',
    description: 'Rigid drilling machines for maintenance and production lines.',
    origin: 'Coimbatore, India',
    specialties: ['Pillar drills', 'Radial drills'],
    logo: '/images/brands/summitdrill.svg'
  },
  {
    name: 'ForgePro',
    description: 'Workholding portfolio for milling, drilling, and inspection.',
    origin: 'Ahmedabad, India',
    specialties: ['Swivel vices', 'Precision vices'],
    logo: '/images/brands/forgepro.svg'
  },
  {
    name: 'Gripmax',
    description: 'Hydraulic vices and clamps for CNC machining centers.',
    origin: 'Bengaluru, India',
    specialties: ['CNC vices'],
    logo: '/images/brands/gripmax.svg'
  },
  {
    name: 'NordAir',
    description: 'Compressed air solutions with after-sales coverage across Gujarat.',
    origin: 'Ahmedabad, India',
    specialties: ['Piston compressors', 'Screw compressors'],
    logo: '/images/brands/nordair.svg'
  },
  {
    name: 'ProArc',
    description: 'Welding and cutting automation for process equipment builders.',
    origin: 'Hyderabad, India',
    specialties: ['Rotators', 'Positioners'],
    logo: '/images/brands/proarc.svg'
  }
];
