// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css'; // Optional: add this for custom styles

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       {/* Left side: Logo */}
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src="/images/logoimg.jpg" alt="Logo" className="logo-image" />
//         </Link>
//       </div>

//       {/* Center: Navigation Links (displayed in mobile as toggleable menu) */}
//       <div className={`navbar-center ${menuOpen ? 'active' : ''}`}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About Us</Link>
//         <Link to="/menu" className="nav-link">Menu</Link>
//         <Link to="/reservation" className="nav-link">Reservation</Link>
//         <Link to="/feedback" className="nav-link">Feedback</Link>
//       </div>

//       {/* Right side: Register Button */}
//       <div className="navbar-register">
//         <Link to="/signup" className="register-button">Signup</Link>
//         <Link to="/login" className="register-button">Login</Link>
//       </div>

//       {/* Hamburger Menu (three dots) */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css'; // Optional: add this for custom styles

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle the menu visibility
//   };

//   return (
//     <nav className="navbar">
//       {/* Left side: Logo */}
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src="/images/logoimg.jpg" alt="Logo" className="logo-image" />
//         </Link>
//       </div>

//       {/* Center: Navigation Links (displayed in mobile as toggleable menu) */}
//       <div className={`navbar-center ${menuOpen ? 'active' : ''}`}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About Us</Link>
//         <Link to="/menu" className="nav-link">Menu</Link>
//         <Link to="/reservation" className="nav-link">Reservation</Link>
//         <Link to="/feedback" className="nav-link">Feedback</Link>
//       </div>

//       {/* Right side: Register Button */}
//       <div className="navbar-register">
//         <Link to="/signup" className="register-button">Signup</Link>
//         <Link to="/login" className="register-button">Login</Link>
//       </div>

//       {/* Hamburger Menu (three dots) */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;














// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css'; // Optional: add this for custom styles

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle the menu visibility
//   };

//   return (
//     <nav className="navbar">
//       {/* Left side: Logo */}
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src="/images/logoimg.jpg" alt="Logo" className="logo-image" />
//         </Link>
//       </div>

//       {/* Center: Navigation Links (displayed in mobile as toggleable menu) */}
//       <div className={`navbar-center ${menuOpen ? 'active' : ''}`}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/about" className="nav-link">About Us</Link>
//         <Link to="/menu" className="nav-link">Menu</Link>
//         <Link to="/reservation" className="nav-link">Reservation</Link>
//         <Link to="/feedback" className="nav-link">Feedback</Link>
//       </div>

//       {/* Right side: Register Button */}
//       <div className="navbar-register">
//         <Link to="/signup" className="register-button">Signup</Link>
//         <Link to="/login" className="register-button">Login</Link>
//       </div>

//       {/* Hamburger Menu (three dots) */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./navbar.css"; // Optional: add this for custom styles

// const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle the menu visibility
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false); // Reset authentication state
//     alert("Logged out successfully!");
//     navigate("/login"); // Redirect to the login page
//   };

//   return (
//     <nav className="navbar">
//       {/* Left side: Logo */}
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src="/images/logoimg.jpg" alt="Logo" className="logo-image" />
//         </Link>
//       </div>

//       {/* Center: Navigation Links */}
//       <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//         <Link to="/about" className="nav-link">
//           About Us
//         </Link>
//         <Link to="/menu" className="nav-link">
//           Menu
//         </Link>
//         <Link to="/reservation" className="nav-link">
//           Reservation
//         </Link>
//         <Link to="/feedback" className="nav-link">
//           Feedback
//         </Link>
//       </div>

//       {/* Right side: Auth Buttons */}
//       <div className="navbar-register">
//         {isAuthenticated ? (
//           <button onClick={handleLogout} className="register-button">
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link to="/signup" className="register-button">
//               Signup
//             </Link>
//             <Link to="/login" className="register-button">
//               Login
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Hamburger Menu */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;











// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./navbar.css"; // Optional: add this for custom styles

// const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle the menu visibility
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false); // Reset authentication state
//     alert("Logged out successfully!");
//     navigate("/login"); // Redirect to the login page
//   };

//   return (
//     <nav className="navbar">
//       {/* Left side: Logo */}
//       <div className="navbar-logo">
//         <NavLink to="/">
//           <img src="/images/logoimg.jpg" alt="Logo" className="logo-image" />
//         </NavLink>
//       </div>

//       {/* Center: Navigation Links */}
//       <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
//         >
//           About Us
//         </NavLink>
//         <NavLink
//           to="/menu"
//           className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
//         >
//           Menu
//         </NavLink>
//         <NavLink
//           to="/reservation"
//           className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
//         >
//           Reservation
//         </NavLink>
//         <NavLink
//           to="/feedback"
//           className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
//         >
//           Feedback
//         </NavLink>
//       </div>

//       {/* Right side: Auth Buttons */}
//       <div className="navbar-register">
//         {isAuthenticated ? (
//           <button onClick={handleLogout} className="register-button">
//             Logout
//           </button>
//         ) : (
//           <>
//             <NavLink to="/signup" className="register-button">
//               Signup
//             </NavLink>
//             <NavLink to="/login" className="register-button">
//               Login
//             </NavLink>
//           </>
//         )}
//       </div>

//       {/* Hamburger Menu */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className="dot"></div>
//         <div className="dot"></div>
//         <div className="dot"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;














import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css"; // Optional: add this for custom styles

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication state
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to the login page
  };

  // Close menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="/images/backlogo1.png" alt="Logo" className="logo-image" />
        </NavLink>
      </div>

      {/* Center: Navigation Links */}
      <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          About Us
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Menu
        </NavLink>
        <NavLink
          to="/reservation"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Reservation
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Feedback
        </NavLink>
      </div>

      {/* Right side: Auth Buttons */}
      <div className="navbar-register">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="register-button">
            Logout
          </button>
        ) : (
          <>
            {/* <NavLink to="/signup" className="register-button" onClick={handleNavLinkClick}>
              Signup
            </NavLink> */}
            <NavLink to="/login" className="register-button" onClick={handleNavLinkClick}>
              Login
            </NavLink>
          </>
        )}
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </nav>
  );
};

export default Navbar;
