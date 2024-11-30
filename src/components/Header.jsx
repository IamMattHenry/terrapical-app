const Header = ({ activePage }) => {
  const backgroundImages = {
    Home: "/images/landing-img/landing-bg.jpg",
    Index: "/images/landing-img/index-bg.jpeg",
    Care: "/images/landing-img/care-bg.jpg",
    About: "/images/landing-img/about-bg.jpg",
    Contact: "/images/landing-img/contact-bg.jpg",
  };

  return (
    <div className="max-h-[50%] h-3/6 max-w-full flex justify-center items-center relative p-0">
      <div
        style={{
          backgroundImage: `url(${backgroundImages[activePage]})`,
        }}
        className="bg-center bg-cover bg-no-repeat hover:scale-[1.01] transition duration-500 h-full w-full brightness-50 border-b-2 border-b-secondary shadow-xl"
      ></div>
      <h3 className="text-background font-heading text-5xl absolute">
        {activePage}
      </h3>
    </div>
  );
};

export default Header;
