const plantsData = [
  {
    type: "Ferns",
    plants: [
      {
        label: "Boston Fern (Nephrolepis exaltata)",
        description:
          "A popular indoor plant with feathery fronds that thrive in high humidity.",
      },
      {
        label: "Maidenhair Fern (Adiantum)",
        description:
          "Delicate, lacy leaves perfect for terrariums or shaded areas.",
      },
      {
        label: "Asparagus Fern (Asparagus setaceus)",
        description:
          "Not a true fern, but its fine, feathery foliage adds texture.",
      },
      {
        label: "Bird’s Nest Fern (Asplenium nidus)",
        description: "Features a unique rosette shape with broad, wavy fronds.",
      },
      {
        label: "Button Fern (Pellaea rotundifolia)",
        description:
          "Compact fern with small, round leaves ideal for small spaces.",
      },
    ],
  },
  {
    type: "Mosses",
    plants: [
      {
        label: "Sheet Moss (Hypnum)",
        description: "Lays flat and spreads, excellent for ground coverage.",
      },
      {
        label: "Cushion Moss (Leucobryum glaucum)",
        description: "Forms soft, rounded clumps that look like tiny pillows.",
      },
      {
        label: "Mood Moss (Dicranum scoparium)",
        description:
          "Dense, vibrant green moss that thrives in moist environments.",
      },
      {
        label: "Feather Moss (Pleurozium schreberi)",
        description: "Soft and lush, often used in forest-like terrariums.",
      },
      {
        label: "Java Moss (Taxiphyllum barbieri)",
        description: "Aquatic moss ideal for vivariums or water features.",
      },
    ],
  },
  {
    type: "Vines and Climbers",
    plants: [
      {
        label: "N’Joy Pothos (Epipremnum aureum)",
        description: "A variegated vine with striking white and green leaves.",
      },
      {
        label: "Heartleaf Philodendron (Philodendron hederaceum)",
        description: "Low-maintenance vine with heart-shaped leaves.",
      },
      {
        label: "String of Hearts (Ceropegia woodii)",
        description: "A cascading plant with delicate heart-shaped foliage.",
      },
      {
        label: "Golden Pothos (Epipremnum aureum ‘Golden’)",
        description: "Known for its vibrant yellow-green variegation.",
      },
      {
        label: "Hoya (Hoya carnosa)",
        description:
          "Waxy-leafed vine that produces fragrant star-shaped flowers.",
      },
    ],
  },
  {
    type: "Tropical Flowers",
    plants: [
      {
        label: "Episcia Cupreata (Flame Violet)",
        description: "Features striking foliage and vibrant tubular flowers.",
      },
      {
        label: "Anthurium (Anthurium andraeanum)",
        description: "Known for its waxy, heart-shaped spathes in bold colors.",
      },
      {
        label: "Peace Lily (Spathiphyllum)",
        description: "A shade-loving plant with elegant white flowers.",
      },
      {
        label: "Bromeliad (Guzmania)",
        description: "Bright, exotic flowers ideal for tropical-themed setups.",
      },
      {
        label: "Orchid (Phalaenopsis)",
        description:
          "A classic tropical flower with long-lasting, elegant blooms.",
      },
    ],
  },
  {
    type: "Ground Covers",
    plants: [
      {
        label: "Nerve Plant (Fittonia albivenis)",
        description:
          "Small, veined leaves in green, pink, or white, perfect for terrariums.",
      },
      {
        label: "Baby Tears (Soleirolia soleirolii)",
        description: "Tiny, lush green leaves that spread quickly.",
      },
      {
        label: "Creeping Fig (Ficus pumila)",
        description: "A fast-growing climber with small, attractive leaves.",
      },
      {
        label: "Dwarf Mondo Grass (Ophiopogon japonicus)",
        description: "Grass-like foliage that stays compact and low.",
      },
      {
        label: "Peperomia (Peperomia prostrata)",
        description:
          "Trailing plant with round, patterned leaves resembling turtle shells.",
      },
    ],
  },
];

const bioactiveSpecies = [
  {
    type: "Clean-up Crew",
    name: "Springtails (Collembola)",
    role: "Micro-scavengers that consume mold, detritus, and decaying plant matter.",
    benefits: "Prevent mold outbreaks and recycle organic material.",
    care: "Keep substrate moist; they thrive in humid environments.",
  },
  {
    type: "Clean-up Crew",
    name: "Isopods (Pill Bugs & Sow Bugs)",
    role: "Larger decomposers that break down organic waste.",
    benefits: "Improve soil structure and nutrient cycling.",
    care: "Provide leaf litter and ensure adequate humidity.",
    examples: [
      "Dwarf White Isopods (Trichorhina tomentosa)",
      "Powder Orange Isopods (Porcellionides pruinosus)",
    ],
  },
  {
    type: "Clean-up Crew",
    name: "Earthworms (Eisenia fetida)",
    role: "Aerate the substrate and decompose organic material.",
    benefits: "Improve soil health by mixing layers and breaking down waste.",
    care: "Add compostable material like leaf litter.",
  },
  {
    type: "Clean-up Crew",
    name: "Mites (Predatory or Soil Mites)",
    role: "Control pest populations or assist in decomposing organic matter.",
    benefits: "Maintain a healthy ecosystem balance.",
    care: "Provide organic debris for them to thrive.",
  },
  {
    type: "Clean-up Crew",
    name: "Snails (Small Tropical Varieties)",
    role: "Assist with algae and plant detritus removal.",
    benefits: "Keep surfaces clean in wetter terrariums.",
    care: "Avoid overpopulation and monitor plant health.",
  },
];

const Index = () => {
  return (
    <div className="flex justify-center items-center my-3 mx-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plantsData.map((plantType, typeIndex) => (
          <div
            key={typeIndex}
            className="p-4 rounded-lg border-4 border-secondary"
          >
            <h3 className="text-xl font-heading mb-2 text-accent">
              {plantType.type}
            </h3>
            <ul className="space-y-2">
              {plantType.plants.map((plant, plantIndex) => (
                <li key={plantIndex}>
                  <a href="#">
                    <h4 className="text-base font-semibold font-body text-text underline decoration-dotted underline-offset-4 hover:bg-secondary transition duration-200 rounded-lg p-1">
                      {plant.label}
                    </h4>
                  </a>
                  <p className="text-primary font-body text-[0.9rem] p-1">
                    {plant.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {bioactiveSpecies.map((species, speciesIndex) => (
          <div
            key={speciesIndex}
            className="p-4 rounded-lg border-4 border-secondary"
          >
            <h3 className="text-xl font-heading mb-2 text-accent">
              {species.type}
            </h3>
            <ul className="space-y-2">
              <li key={speciesIndex}>
                <a href="#">
                  <h4 className="text-lg font-semibold font-body text-text underline decoration-dotted underline-offset-4 hover:bg-secondary transition duration-200 rounded-lg p-1">
                    {species.name}
                  </h4>
                </a>
                <p className="text-primary font-body text-base p-1">
                  <span className="font-semibold">Role: </span>
                  {`${species.role}`}
                  <br />
                  <span className="font-semibold">Benefits: </span>
                  {`${species.benefits}`}
                  <br />
                  <span className="font-semibold">Care: </span>
                  {`${species.care}`}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
