const features = [
  {
    title: "Plant Care Guides",
    description:
      "Detailed information to keep your plants healthy and thriving!",
  },
  { title: "Shop", description: "Sites to help you find your desire plant." },
  {
    title: "Community Support",
    description: "Join our community to connect with fellow plant lovers.",
  },
  {
    title: "Gallery",
    description: "Browse photos and ideas for your next green project.",
  },
];

const FeaturesSection = () => {
  return (
    <>
      <div className="flex justify-center items-center my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-14 lg:grid-cols-4 gap-x-6 gap-y-4">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-primary text-background rounded-lg w-64 sm:w-52 h-60 shadow-2xl">
              <h3 className="font-heading w-full mb-1">{feature.title}</h3>
              <p className="font-body w-full text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
