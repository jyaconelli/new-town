export const categories = [
  'library',
  'arcade',
  'postOffice',
  'schoolOffice',
  'home',
  'parkTownSquare',
  'trainStation',
  'cinema',
  'clockTower',
] as const

export type BuildingMetadata = {
  label: string
  category: string
  exteriorImage: string
  interiorImage: string
}

export const buildingMetadata = {
  library: {
    label: 'Library',
    category: 'library',
    exteriorImage: '/img/library-exterior.png',
    interiorImage: '/img/library-interior.png',
  },
  arcade: { label: 'Arcade', category: 'arcade', exteriorImage: '/img/arcade-exterior.png' },
  postOffice: {
    label: 'Post Office',
    category: 'postOffice',
    exteriorImage: '/img/post-office-exterior.png',
  },
  schoolOffice: {
    label: 'School/Office',
    category: 'schoolOffice',
    exteriorImage: '/img/school-office-exterior.png',
  },
  home: { label: 'Home', category: 'home', exteriorImage: '/img/home-exterior.png' },
  parkTownSquare: {
    label: 'Park/Town Square',
    category: 'parkTownSquare',
    exteriorImage: '/img/park-town-square-exterior.png',
  },
  trainStation: {
    label: 'Train Station',
    category: 'trainStation',
    exteriorImage: '/img/train-station-exterior.png',
  },
  cinema: { label: 'Cinema', category: 'cinema', exteriorImage: '/img/cinema-exterior.png' },
  clockTower: {
    label: 'Clock Tower',
    category: 'clockTower',
    exteriorImage: '/img/clock-tower-exterior.png',
  },
} as const
