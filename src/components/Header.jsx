const Header = ({ activePage }) => {
  const backgroundImages = {
    Home: "/images/landing-img/landing-bg.jpg",
    Index: "/images/landing-img/index-bg.jpeg",
    About: "/images/landing-img/about-bg.jpg",
    Contact: "/images/landing-img/contact-bg.jpg",
    Signin: "/images/landing-img/sign-in-bg.jpg",
  };

  return (
    <div className="h-64 max-w-full flex justify-center items-center relative p-0 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${backgroundImages[activePage]})`,
        }}
        className="bg-center bg-cover bg-no-repeat h-full w-full brightness-50 shadow-2xl transition duration-500 hover:scale-110"
      ></div>
      <h3 className="text-background font-heading text-5xl absolute">
        {activePage}
      </h3>
    </div>
  );
};

export default Header;