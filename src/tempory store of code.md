// Menu.jsx
// import React from "react";
// import "./Menu.css"; // Import the CSS for styling

// function Menu() {
//   const foodItems = [
//     { name: "Pizza", description: "Delicious cheese and tomato pizza", image: "/images/about8.webp" },
//     { name: "Burger", description: "Juicy beef burger with all the toppings", image: "/images/about8.webp" },
//     { name: "Pasta", description: "Fresh pasta with rich tomato sauce", image: "/images/about8.webp" },
//     { name: "Pizza", description: "Delicious cheese and tomato pizza", image: "/images/about8.webp" },
//     { name: "Burger", description: "Juicy beef burger with all the toppings", image: "/images/about8.webp" },
//     { name: "Pasta", description: "Fresh pasta with rich tomato sauce", image: "/images/about8.webp" },
//     // You can add more items here
//   ];

//   return (
//     <div className="menu-container">
//       <h2 className="menu-title">Our Menu</h2>
//       <div className="menu-items">
//         {foodItems.map((item, index) => (
//           <div className="menu-item-card" key={index}>
//             <img src={item.image} alt={item.name} className="food-image" />
//             <h3 className="food-name">{item.name}</h3>
//             <p className="food-description">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;