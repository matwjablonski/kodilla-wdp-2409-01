const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],

  rwd: {
    products: 2,
    size: '',
  },

  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'sofa',
      price: 30,
      prevPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: true,
      backgroundPhoto: 'pexels-catscoming-707579.jpg',
      prevPrice: 40,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'table',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      compare: false,
      backgroundPhoto: 'pexels-cottonbro-5530255.jpg',
      prevPrice: 40,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'chair',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: true,
      backgroundPhoto: 'pexels-valeriya-1129413.jpg',
      prevPrice: 40,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'sofa',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-element5-1125137.jpg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'dining',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-athena-2180883.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'table',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-falling4utah-1080696.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'chair',
      price: 30,
      prevPrice: 35,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-fotios-photos-909504.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-taryn-elliott-4112553.jpg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'sofa',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-jonathanborba-3316925.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'chair',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-shvetsa-3771691.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'dining',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-karolina-grabowska-4210805.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'table',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-kseniachernaya-3952048.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'sofa',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-mtk402-2098913.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-emrecan-2079295.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-pixabay-373541.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'dining',
      price: 30,
      prevPrice: 40,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-polina-kovaleva-5644692.jpg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'sofa',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-rachel-claire-5531710.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-tiana-18128-2995012.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'chair',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-zvolskiy-2082092.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'dining',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-medhat-ayad-122846-447592.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'table',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-pixabay-279618.jpg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'chair',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-reneterp-1581384.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-pixabay-279618.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-reneterp-1581384.jpg',
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-shvetsa-3771691.jpg',
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-karolina-grabowska-4210805.jpg',
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-kseniachernaya-3952048.jpg',
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-mtk402-2098913.jpg',
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'bed',
      price: 30,
      prevPrice: false,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-emrecan-2079295.jpg',
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-pixabay-373541.jpg',
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-polina-kovaleva-5644692.jpg',
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-rachel-claire-5531710.jpg',
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
      backgroundPhoto: 'pexels-tiana-18128-2995012.jpg',
    },
  ],
  currentSale: [
    {
      id: 'sale-1',
      topText: 'indoor',
      topTextBold: 'furniture',
      bottomText: 'save up to 50% off all furniture',
      photo: 'pexels-martinpechy-1866149.jpg',
    },
    {
      id: 'sale-2',
      topText: 'decorate',
      topTextBold: 'with us',
      bottomText: 'Free shipping and unpacking over $400',
      photo: 'pexels-fotoaibe-1668860.jpg',
    },
  ],
  cart: {
    products: [],
  },
  promotion: {
    leftTitle: 'guest room',
    leftSubtitle: 'sofa',
    leftNumber: '-20%',
    rUpperTitle: 'office chair',
    rUpperSubtitle: 'collection',
    rNumber: '200.00',
    pBottomTitle: 'special collection',
    pBottomSubtitle: 'save up to 45% of furniture',
    pictureLeft: 'sofa.jpg',
    pictureLeftAlt: 'sofa',
    pictureTopRight: 'twoChairs_extra.jpg',
    pictureTopRightAlt: 'two chairs',
    pictureBottomRight: 'bed.jpg',
    pictureBottomRightAlt: 'bed',
  }
};

export default initialState;
