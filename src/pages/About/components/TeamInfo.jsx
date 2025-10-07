const TeamInfo = () => {
  const teamMembers = [
    {
      id: 1,
      name: "MD ZIAUL HASAN",
      title: "MANAGING DIRECTOR",
      description:
        "Driven by his interest in fashion, Mr. Hasan proudly founded Arbella Fashion Ltd.",
      image: "/assets/images/about/dp1.jpg",
    },
    {
      id: 2,
      name: "ARIFUL ISLAM",
      title: "ADDITIONAL MANAGING DIRECTOR",
      description:
        "Mr. Islam, former lawyer and Co-founder of Arbella Fashion Ltd., brought strong management and ethics to elevate the factory's success.",
      image: "/assets/images/about/dp2.jpg",
    },
    {
      id: 3,
      name: "MATTHEW KANE",
      title: "VICE PRESIDENT",
      subtitle: "SALES & MARKETING, GERMANY",
      description:
        "Mr. Kane brings 16 years of global experience in product development, international trade, and EU market strategy — helping brands grow, scale, and succeed worldwide.",
      image: "/assets/images/about/dp3.jpg",
    },
    {
      id: 4,
      name: "STEPHAN DODEMAN",
      title: "DIRECTOR",
      subtitle: "PRODUCT DEVELOPMENT & MERCHANDISING",
      description:
        "20 years of experience in apparel design and product development, working experience with brands like Nordstrom, Calvin Klein, Johnston & Murphy, Marks & Spencer.",
      image: "/assets/images/about/dp4.png",
    },
    {
      id: 5,
      name: "REMI DAUDET",
      title: "DIRECTOR",
      subtitle: "MARKETING, FRANCE",
      description:
        "Mr. Daudet, a Textile Engineer with 14 years experience, has managed several reputed European brands.",
      image: "/assets/images/about/dp5.jpg",
    },
    {
      id: 6,
      name: "MD HARUN OR RASHID",
      title: "DIRECTOR",
      subtitle: "FINANCE & ACCOUNTS",
      description:
        "Mr. Harun is a Finance and Management professional with 26 years' experience, including 19 years at Arbella Group, specializing in business strategy.",
      image: "/assets/images/about/dp6.jpg",
    },
    {
      id: 7,
      name: "MR. PARYANI J. S.",
      title: "DIRECTOR",
      subtitle: "MARKETING, HONG KONG",
      description:
        "Mr. Paryani has over 30 years' textile and garment experience in Hong Kong, China, and Bangladesh, specializing in sourcing, factory setup, and buyer-supplier relations.",
      image: "/assets/images/about/dp7.jpg",
    },
    {
      id: 8,
      name: "MD NASIR UDDIN",
      title: "GENERAL MANAGER",
      subtitle: "MARKETING & MERCHANDISING",
      description:
        "Mr. Nasir is a certified Merchandiser with 23 years' experience, has managed leading American and European brands in garment marketing.",
      image: "/assets/images/about/dp8.jpg",
    },
    {
      id: 9,
      name: "LI WEI",
      title: "GENERAL MANAGER",
      subtitle: "IE & PRODUCTION",
      description:
        "Mr. Wei, a textile expert in garment technology and manufacturing, has worked in Egypt and Cambodia, where he recently helped establish factories.",
      image: "/assets/images/about/dp9.jpg",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[IvyPresto_Headline] text-center text-[#293037] mb-12 md:mb-16">
          Meet Our <span style={{ color: "#FFA475" }}>Team</span>
        </h2>

        {/* Team Grid - First Row (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 mb-6 md:mb-8 max-w-[1200px] mx-auto">
          {teamMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="flex flex-col bg-white overflow-hidden"
              style={{
                borderRadius: "17px",
                border: "1px solid rgba(41, 48, 55, 0.30)",
              }}
            >
              {/* Member Image */}
              <div
                style={{
                  width: "100%",
                  height: "234px",
                  borderRadius: "15px 15px 0 0",
                  backgroundImage: `url('${member.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Member Info */}
              <div className="text-center p-6 pt-5">
                <h3 className="font-[Montserrat] text-lg font-medium text-[#454545] mb-2">
                  {member.name}
                </h3>
                <p
                  className="font-[plus-jakarta-sans] text-sm font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                >
                  {member.title}
                </p>
                {member.subtitle && (
                  <p
                    className="font-[plus-jakarta-sans] text-xs font-medium mb-3"
                    style={{ color: "#FFA475" }}
                  >
                    {member.subtitle}
                  </p>
                )}
                <p className="font-[plus-jakarta-sans] text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Grid - Second Row (5 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5 max-w-[1400px] mx-auto">
          {teamMembers.slice(4).map((member) => (
            <div
              key={member.id}
              className="flex flex-col bg-white overflow-hidden"
              style={{
                borderRadius: "17px",
                border: "1px solid rgba(41, 48, 55, 0.30)",
              }}
            >
              {/* Member Image */}
              <div
                style={{
                  width: "100%",
                  height: "234px",
                  borderRadius: "15px 15px 0 0",
                  backgroundImage: `url('${member.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Member Info */}
              <div className="text-center p-6 pt-5">
                <h3 className="font-[Montserrat] text-lg font-medium text-[#454545] mb-2">
                  {member.name}
                </h3>
                <p
                  className="font-[plus-jakarta-sans] text-sm font-semibold mb-1"
                  style={{ color: "#FFA475" }}
                >
                  {member.title}
                </p>
                {member.subtitle && (
                  <p
                    className="font-[plus-jakarta-sans] text-xs font-medium mb-3"
                    style={{ color: "#FFA475" }}
                  >
                    {member.subtitle}
                  </p>
                )}
                <p className="font-[plus-jakarta-sans] text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamInfo;
