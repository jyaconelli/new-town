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
  arcade: {
    label: 'Arcade',
    category: 'arcade',
    exteriorImage: '/img/arcade-exterior.png',
    interiorImage: '/img/arcade-interior.webp',
  },
  postOffice: {
    label: 'Post Office',
    category: 'postOffice',
    exteriorImage: '/img/post-office-exterior.png',
    interiorImage: '/img/post-office-interior.webp',
  },
  schoolOffice: {
    label: 'School/Office',
    category: 'schoolOffice',
    exteriorImage: '/img/school-office-exterior.png',
    interiorImage: '/img/school-interior.webp',
  },
  home: {
    label: 'Home',
    category: 'home',
    exteriorImage: '/img/home-exterior.png',
    interiorImage: '/img/home-interior.png',
  },
  parkTownSquare: {
    label: 'Park/Town Square',
    category: 'parkTownSquare',
    exteriorImage: '/img/park.png',
    interiorImage: '/img/park-interior.webp',
  },
  trainStation: {
    label: 'Train Station',
    category: 'trainStation',
    exteriorImage: '/img/train-station-exterior.png',
    interiorImage: '/img/train-station-interior.webp',
  },
  cinema: {
    label: 'Cinema',
    category: 'cinema',
    exteriorImage: '/img/cinema-exterior.png',
    interiorImage: '/img/cinema-interior.webp',
  },
  clockTower: {
    label: 'Clock Tower',
    category: 'clockTower',
    exteriorImage: '/img/clock-tower-exterior.png',
    interiorImage: '/img/clock-tower-interior.webp',
  },
} as const
