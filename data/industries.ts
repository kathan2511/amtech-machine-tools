export interface IndustryUseCase {
  title: string;
  summary: string;
  typicalBuys: string[];
}

export const industries: IndustryUseCase[] = [
  {
    title: 'Jobbing Machine Shops',
    summary: 'Batch production units machining spares for automotive, textile, and process plants.',
    typicalBuys: ['3-jaw chucks', 'Tilting vices', 'Pillar drills']
  },
  {
    title: 'Fabrication Workshops',
    summary: 'Steel fabrication companies building structural frames, tanks, and ducts.',
    typicalBuys: ['MMA welders', 'Magnetic drills', 'Rotators']
  },
  {
    title: 'Maintenance Departments',
    summary: 'Plant maintenance teams that need versatile tools for intermittent repairs.',
    typicalBuys: ['Independent chucks', 'Vices', 'Portable welders']
  },
  {
    title: 'SME Manufacturers',
    summary: 'Growing factories automating operations and scaling up compressed air capacity.',
    typicalBuys: ['Power chucks', 'Hydraulic vices', 'Screw compressors']
  }
];
