
class Products {
  constructor (phones){
    this.phones = phones;
  }
    getProducts(){
        return this.phones;
    }
    getProductsById(id) {
      return this.phones.find((phone) => phone.id == id);
    }
}

const samsungPhones = [
  {
    title: "Samsung Galaxy S21",
    description: "The Samsung Galaxy S21 is a 5G smartphone with a 6.2-inch Dynamic AMOLED 2X display and a 64MP camera.",
    price: 799,
    thumbnail: "https://cdn.pixabay.com/photo/2021/01/18/18/04/samsung-galaxy-s21-5827585_1280.jpg",
    stock: 10,
    id: 1,
  },
  {
    title: "Samsung Galaxy S20 FE",
    description: "The Samsung Galaxy S20 FE is a 5G smartphone with a 6.5-inch Super AMOLED display and a 12MP camera.",
    price: 699,
    thumbnail: "https://cdn.pixabay.com/photo/2020/09/23/14/08/samsung-galaxy-s20-fe-5597074_1280.jpg",
    stock: 15,
    id: 2
  },
  {
    title: "Samsung Galaxy A71",
    description: "The Samsung Galaxy A71 is a 4G smartphone with a 6.7-inch Super AMOLED Plus display and a 64MP camera.",
    price: 449,
    thumbnail: "https://cdn.pixabay.com/photo/2020/03/09/09/34/samsung-galaxy-a71-4912761_1280.jpg",
    stock: 20,
    id: 3
  },
  {
    title: "Samsung Galaxy A51",
    description: "The Samsung Galaxy A51 is a 4G smartphone with a 6.5-inch Super AMOLED display and a 48MP camera.",
    price: 299,
    thumbnail: "https://cdn.pixabay.com/photo/2020/03/09/09/34/samsung-galaxy-a51-4912760_1280.jpg",
    stock: 25,
    id: 4
  },
  {
    title: "Samsung Galaxy Note20 Ultra",
    description: "The Samsung Galaxy Note20 Ultra is a 5G smartphone with a 6.9-inch Dynamic AMOLED 2X display and a 108MP camera.",
    price: 1299,
    thumbnail: "https://cdn.pixabay.com/photo/2020/08/05/16/14/samsung-galaxy-note20-ultra-5464976_1280.jpg",
    stock: 5,
    id: 5
  }
];

const store = new Products(samsungPhones);

console.log(store.getProducts());
console.log(store.getProductsById(8)|| "No se encontró el producto");