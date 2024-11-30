import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "Index", to: "/index" },
    { label: "Care", to: "/care" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const [barOpen, setBarOpen] = useState(false);

  const toggleNavbar = () => {
    setBarOpen(!barOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-primary">
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center px-2">
          <h3 className="text-background font-heading font-bold text-2xl md:text-3xl">
            <NavLink to="/">Terrapical</NavLink>
          </h3>
          <ul className="hidden lg:flex space-x-5 text-background font-heading text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition rounded-md ease-in-out hover:bg-background hover:text-primary p-3 ${
                      isActive ? "bg-background text-primary" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {barOpen ? (
                <X className="transition ease-linear duration-500" size={36} color="#EDF1D6" />
              ) : (
                <Menu className="transition ease-linear duration-500" size={36} color="#EDF1D6" />
              )}
            </button>
          </div>
          {barOpen && (
            <ul className="absolute inset-x-0 top-12 bg-primary py-5 px-7 text-center font-heading text-background text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    onClick={() => setBarOpen(false)} // Close menu after navigation
                    className={({ isActive }) =>
                      `block my-3 transition ease-in-out hover:bg-background hover:text-primary rounded-full ${
                        isActive ? "bg-background text-primary" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
