import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Bushra',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sajjad',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],

  products: [
    {
      // _id: '1',

      name: 'Trendy Crochet Bag ',
      slug: 'Crochet-Bag',
      category: 'Bags',
      image: '/images/bag1.jpg', // 679px × 829px
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality bags',
    },
    {
      // _id: '2',
      name: 'Knitted Bag ',
      slug: 'Knitted-Bag',
      category: 'Bags',
      image: '/images/bag2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: ' Summer Crochet Bag',
      slug: 'Perfect-Summer-Crochet-Bag',
      category: 'Bags',
      image: '/images/bag3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: ' Handmade Basket ',
      slug: 'Bag-Handmade-Basket',
      category: 'Bags',
      image: '/images/bag4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description:
        'A classic French-style market basket with short Flat Leather Handle and sculptured base. Can be carried in the hand or on the elbow. A smaller basket suitable for shopping or hampers ',
    },
  ],
};
export default data;
