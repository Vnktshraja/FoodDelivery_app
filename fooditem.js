const foodItems= [
    {
    id: 1,
    name: 'Ambur Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 240,
    img: 'images/biryani/Ambur-Chicken-Biryani.jpg',
    quantity: 1
},
{
    id: 2,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 4.2,
    price: 220,
    img: 'images/biryani/Chicken-Biryani-hyd.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Egg Biryani',
    category : 'biryani',
    rating : 3.3,
    price: 180,
    img: 'images/biryani/egg-biryani.jpeg',
    quantity: 1
},
{
    id: 4,
    name: 'Goan Fish Biryani',
    category : 'biryani',
    rating : 3.8,
    price: 280,
    img: 'images/biryani/goan-fish-biryani.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 3.2,
    price: 360,
    img: 'images/biryani/hyd-Mutton-Biryani.jpg',
    quantity: 1
},
{
    id: 6,
    name: 'Kamrupi Biryani',
    category : 'biryani',
    rating : 4.0,
    price: 350,
    img: 'images/biryani/kamrupi-biryani.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Kashmiri Biryani',
    category : 'biryani',
    rating : 4.1,
    price: 240,
    img: 'images/biryani/kashmiri.pulao.jpg',
    quantity: 1
},
{
    id: 8,
    name: 'Memoni Biryani',
    category : 'biryani',
    rating : 3.0,
    price: 320,
    img: 'images/biryani/memonibiryani.png',
    quantity: 1
},
{
    id: 9,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 3.9,
    price: 280,
    img: 'images/biryani/mughlai-biryani.jpg',
    quantity: 1
},
{
    id: 10,
    name: 'Chicken Roast',
    category : 'chicken',
    rating : 4.9,
    price: 280,
    img: 'images/chicken/Chicken_roast.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.8,
    price: 220,
    img: 'images/chicken/Chicken-Curry.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Chicken Do Pyaza',
    category : 'chicken',
    rating : 4.2,
    price: 275,
    img: 'images/chicken/Chicken-do-Pyaza.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Chicken Masala',
    category : 'chicken',
    rating : 3.3,
    price: 240,
    img: 'images/chicken/Chicken-Masala.jpeg',
    quantity: 1
},
{
    id: 14,
    name: 'Handi Chicken',
    category : 'chicken',
    rating : 3.0,
    price: 299,
    img: 'images/chicken/Handi-chicken.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Murgh Musallam',
    category : 'chicken',
    rating : 4.3,
    price: 199,
    img: 'images/chicken/Murgh-Musallam.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.9,
    price: 220,
    img: 'images/paneer/Matar-Paneer.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.0,
    price: 160,
    img: 'images/paneer/palak-paneer.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Paneer Butr Masala',
    category : 'paneer',
    rating : 4.2,
    price: 180,
    img: 'images/paneer/paneer-butter-masala.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'Paneer Do Pyaza',
    category : 'paneer',
    rating : 4.3,
    price: 180,
    img: 'images/paneer/Paneer-Do-Pyaza.jpg',
    quantity: 1

},
{
    id: 20,
    name: 'Hyderabadi Paneer',
    category : 'paneer',
    rating : 4.8,
    price: 140,
    img: 'images/paneer/Paneer-Hyderabadi.jpg',
    quantity: 1
},
{
    id: 21,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.9,
    price: 140,
    img: 'images/paneer/paneer-lababdar.jpg',
    quantity: 1
},
{
    id: 22,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.5,
    price: 120,
    img: 'images/paneer/shahi-paneer.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.4,
    price: 120,
    img: 'images/vegetable/navratan-korma_-vegetable.png',
    quantity: 1
},
{
    id: 24,
    name: 'Veg Jalfrezi',
    category : 'vegetable',
    rating : 4.3,
    price: 100,
    img: 'images/vegetable/VEG-JALFREZI.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Veg Biryani',
    category : 'vegetable',
    rating : 3.7,
    price: 140,
    img: 'images/vegetable/vegetable-biryani.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 3.0,
    price: 60,
    img: 'images/vegetable/vegetable-curry.jpeg',
    quantity: 1
},
{
    id: 27,
    name: 'Veg Kolhapur',
    category : 'vegetable',
    rating : 3.4,
    price: 80,
    img: 'images/vegetable/vegetable-kolhapuri.jpg',
    quantity: 1
},
{
    id: 28,
    name: 'Veg Masala',
    category : 'vegetable',
    rating : 4.1,
    price: 80,
    img: 'images/vegetable/vegetable-masala.jpg',
    quantity: 1
},
{
    id: 29,
    name: 'Veg Pakora',
    category : 'vegetable',
    rating : 4.1,
    price: 60,
    img: 'images/vegetable/vegetable-pakora.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Momos',
    category : 'chinese',
    rating : 4.0,
    price: 160,
    img: 'images/chinese/cabbage-momos-.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Chiken Manchurian',
    category : 'chinese',
    rating : 4.9,
    price: 80,
    img: 'images/chinese/ChickenManchurian.jpg',
    quantity: 1
},
{
    id: 32,
    name: 'Chili Chicken',
    category : 'chinese',
    rating : 4.9,
    price: 100,
    img: 'images/chinese/Chili-Chicken.jpg',
    quantity: 1
},
{
    id: 33,
    name: 'Chowmein',
    category : 'chinese',
    rating : 4.3,
    price: 100,
    img: 'images/chinese/chowmin.jpg',
    quantity: 1
},
{
    id: 34,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.3,
    price: 80,
    img: 'images/chinese/spring-rolls.jpg',
    quantity: 1
},
{
    id: 35,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.4,
    price: 180,
    img: 'images/chinese/szechuan-chicken.jpg',
    quantity: 1
},
{
    id: 36,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.6,
    price: 160,
    img: 'images/chinese/veg-fried-rice.jpg',
    quantity: 1
},
{
    id: 37,
    name: 'Butter Masala Dosa',
    category : 'south-indian',
    rating : 4.7,
    price: 75,
    img: 'images/south indian/Butter-Masala-Dosa.png',
    quantity: 1
},
{
    id: 38,
    name: 'Idli',
    category : 'south-indian',
    rating : 4.0,
    price: 30,
    img: 'images/south indian/idli-with-rice-flour.jpg',
    quantity: 1
},
{
    id: 39,
    name: 'Masala Dosa',
    category : 'south-indian',
    rating : 4.2,
    price: 50,
    img: 'images/south indian/masala-dosa.jpg',
    quantity: 1
},
{
    id: 40,
    name: 'Mysore Bonda',
    category : 'south-indian',
    rating : 4.1,
    price: 20,
    img: 'images/south indian/mysore-bonda.jpg',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'south-indian',
    rating : 4.2,
    price: 50,
    img: 'images/south indian/onion-uttapam.jpg',
    quantity: 1
},
{
    id: 42,
    name: 'Plain Dosa',
    category : 'south-indian',
    rating : 2.9,
    price: 40,
    img: 'images/south indian/plain-dosa.jpeg',
    quantity: 1
},
{
    id: 43,
    name: 'Rava Uttapam',
    category : 'south-indian',
    rating : 2.8,
    price: 50,
    img: 'images/south indian/Rava-Uttapam.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'south-indian',
    rating : 3.3,
    price: 80,
    img: 'images/south indian/sambhar-vada.jpg',
    quantity: 1
},
{
    id: 45,
    name: 'Kala Bhuna',
    category : 'Today special',
    rating : 4.4,
    price: 450,
    img: 'assets/menu-1.jpg',
    quantity: 1
},
{
    id: 46,
    name: 'Handi Mutton',
    category : 'Today special',
    rating : 4.8,
    price: 550,
    img: 'assets/menu-2.jpg',
    quantity: 1
},
{
    id: 47,
    name: 'Egg Curry',
    category : 'Today special',
    rating : 4.6,
    price: 350,
    img: 'assets/menu-3.jpg',
    quantity: 1
},
]


// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//       const response = await fetch("http://localhost:8080/foodApp/Controller"); // Replace with your API URL
//       const jsonArray = await response.json(); // Convert response to JSON
  
//       console.log(jsonArray); // Log the fetched array
  
//       // Example: Assigning to a variable
//       let myArray = [...jsonArray];
  
//       console.log(myArray);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   });

 export {foodItems};


