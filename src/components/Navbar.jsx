import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import { list } from "postcss";

const Navbar = () => {
  const [barOpen, setBarOpen] = useState(false);

  const toggleNavbar = () => {
    setBarOpen(!barOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-primary border-b border-neutral-700/80">
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center px-2">
          <h3 className="text-background font-heading font-bold text-2xl md:text-3xl">
            <a href="#">Terrapical</a>
          </h3>
          <ul className="hidden lg:flex space-x-10 text-background font-heading text-base">
            {navItems.map((item, index) => (
              <li
                className="transition rounded-md ease-in-out hover:bg-background hover:text-primary hover:rounded-md duration-300 p-3"
                key={index}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {barOpen ? (
                <X
                  className="transition ease-linear hover:rotate-180 hover:-scale-125 duration-500"
                  size={36}
                  color="#EDF1D6"
                />
              ) : (
                <Menu
                  className="transition ease-linear hover:rotate-180 hover:-scale-125 duration-500"
                  size={36}
                  color="#EDF1D6"
                />
              )}
            </button>
          </div>
          {barOpen && (
            <ul className="absolute inset-x-0 top-12 bg-primary py-5 px-7 text-center font-heading text-background text-lg ">
              {navItems.map((item, index) => (
                <li
                  className="my-3 transition ease-in-out hover:bg-background hover:text-primary hover:rounded-full duration-300"
                  key={index}
                >
                  <a href={item.href}>{item.label}</a>
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
