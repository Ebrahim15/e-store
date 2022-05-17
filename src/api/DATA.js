let products = {
    1: {
        id: 1, 
        title: "iPad 4 Mini", 
        category:'Tablets',
        price: 500.01, 
        inventory: 2, 
        image: "ipad4-mini.jpg"
    },
    2: {
        id: 2, 
        title: "H&M T-Shirt White", 
        category:'Clothes',
        price: 10.99, 
        inventory: 10, 
        image: "h&m.jpg"
    },
    3: {
        id: 3, 
        title: "Iphone 12", 
        category:'Mobiles',
        price: 699, 
        inventory: 5, 
        image: "iphone-12.png"
    },
    4: {
      id: 4, 
      title: "Black & Decker AF700 Digital Air Fryer", 
      category:'Home appliances',
      price: 269.41, 
      inventory: 5, 
      image: "air-fryer.jpg"
    },
    5: {
      id: 5, 
      title: "Sony PlayStation 5", 
      category:'Consoles',
      price: 499.99, 
      inventory: 5, 
      image: "ps5.png"
    },
    6: {
      id: 6, 
      title: "FIFA 22", 
      category:'Video-games',
      price: 59.99, 
      inventory: 5, 
      image: "fifa22-edited.jpg"
    },
    7: {
      id: 7, 
      title: "Huawei nova 9 SE", 
      category:'Mobiles',
      price: 445, 
      inventory: 2, 
      image: "huawei-nova-9-se.png"
  },
  8: {
      id: 8, 
      title: "Samsung 4K smart tv", 
      category:'Home appliances',
      price: 691.25, 
      inventory: 10, 
      image: "samsung-tv.jpg"
  },
  9: {
      id: 9, 
      title: "Zara t-shirt", 
      category:'Clothes',
      price: 21.37, 
      inventory: 5, 
      image: "zara-tshirt.jpg"
  },
  10: {
    id: 10, 
    title: "Black & Decker AF700 Digital Air Fryer", 
    category:'Home appliances',
    price: 269.41, 
    inventory: 5, 
    image: "air-fryer.jpg"
  },
  11: {
    id: 11, 
    title: "Nintendo Switch ", 
    category: 'Consoles',
    price: 299, 
    inventory: 5, 
    image: "nintendo-switch.jpg"
  },
  12: {
    id: 12, 
    title: "MSI GL66 Gaming Laptop", 
    category:'Laptops',
    price: 1299, 
    inventory: 5, 
    image: "msi.jpg"
  },
  13: {
    id: 13, 
    title: "Panini Maker", 
    category:'Home appliances',
    price: 50, 
    inventory: 2, 
    image: "sandwich-maker.jpg"
},
14: {
    id: 14, 
    title: "Crayola Ultra Clean Washable Markers", 
    category:'Art & Design',
    price: 3.97, 
    inventory: 10, 
    image: "Crayola-Ultra-Clean-Washable-Markers.jpg"
},
15: {
    id: 15, 
    title: "HyperX Cloud Flight - Wireless Gaming Headset", 
    category:'Video-games',
    price: 99.99, 
    inventory: 5, 
    image: "Wireless-Gaming-Headset.jpg"
},
16: {
  id: 16, 
  title: "Waterproof Earbuds", 
  category:'Headphones',
  price: 49.99, 
  inventory: 5, 
  image: "Waterproof-Earbuds.jpg"
},
17: {
  id: 17, 
  title: "Half Baked Harvest Every Day", 
  category:'Books',
  price: 19.48, 
  inventory: 5, 
  image: "half-baked-book.jpg",
},
18: {
  id: 18, 
  title: "Food Dehydrator", 
  category:'Home appliances',
  price: 54.69, 
  inventory: 5, 
  image: "Food-Dehydrator.jpg"
},
    categories : [
      'Video-games',
      'Tablets',
      'Clothes',
      'Mobiles',
      'Consoles',
      'Home appliances',
      'Laptops',
      'Books',
      'Headphones',
      'Art & Design'
    ]

  }

  let users = {
    sarah:{
      id:"sarah",
      firstName:"Sarah",
      lastName:"Ahmed",
      username:"sarah15",
      password:"password",
      address:"15 abo el feda st",
      balance: 10000,
      phoneNumber: '1528497',
      email: 'sarah@mail.com',
      cart:[]
    },

    magdy:{
      id:"magdy",
      firstName:"Magdy",
      lastName:"Mostafa",
      username:"magdy15",
      password:"password",
      address:"15 maadi st",
      balance: 5000,
      phoneNumber: '6751123',
      email: 'magdy@mail.com',
      cart:[]
    },

    younes:{
      id:"younes",
      firstName:"Younes",
      lastName:"Wael",
      username:"younes15",
      password:"password",
      address:"15 nasr city",
      balance: 1000,
      phoneNumber: '9876578',
      email: 'younes@mail.com',
      cart:[]
    },

    ebrahim:{
      id:"ebrahim",
      firstName:"Ebrahim",
      lastName:"Hassan",
      username:"ebrahim15",
      password:"password",
      address:"15 dokki st",
      balance: 1000000,
      phoneNumber: '9066543',
      email: 'ebrahim@mail.com',
      cart:[]
    }
  }

  

  export function _getProducts () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...products}), 1000)
    })
  }

  // export function _getCart () {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => res({...cart}), 1000)
  //   })
  // }

  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
