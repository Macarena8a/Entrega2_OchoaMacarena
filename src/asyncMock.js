const products = [
  {
    id: "1",
    name: "jarrón",
    price: 15000,
    category: "Bazar",
    img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/JARRACAPRI2fAMALFIVIDRIOC2fMIMBRE_1.jpeg",
    stock: 10,
    description: "descripción de jarrón",
  },
  {
    id: "2",
    name: "Tabla de madera",
    price: 10000,
    category:"Bazar",
    img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/TABLAMADERAYMARMOL28X20_1.jpeg",
    stock:13,
    description:"tabla de madera muy moderna para picadas",
  },
  {
    id: "3",
    name: "Fanal black",
    price:10000,
    category: "Living",
    img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/FANALBLACKXL_1.jpeg",
    stock:10,
    description: "fanal para decorar tu living",
  },
  {
    id: "4",
    name: "Deco",
    price:4500,
    category:"Deco",
    img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/FANALWHITE_1.jpeg",
    stock:25,
    description: "fanal white para decorar tu living",
  },
  {
    id: "5",
    name: "Juego de utensilios",
    price:54999,
    category:"Bazar",
    img: "https://clarika.b-cdn.net/prod/793E269E-62AB-4897-8D39-C2B80D9F0A39/product/TRAMONTINAPOLLYWOODJUEGO12PIEZAS_1.jpeg",
    stock:54,
    description: "juego de utensilios Tramontina",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
