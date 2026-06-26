export const SITE_NAME = "Avi Sanan, REALTOR® — Sutton Group West Coast Realty";
export const SITE_DESC =
  "Luxury real estate advisory across Vancouver, West Vancouver and the Lower Mainland. Strategic asset marketing engineered by Avi Sanan, BBA Commerce & Marketing.";

export const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: "Avi Sanan, REALTOR® - Sutton Group - West Coast Realty",
      telephone: "778-387-7001",
      url: "/",
      sameAs: ["https://instagram.com/realestate.avi", "https://linkedin.com/in/asanan"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "205 - 2607 East 49th Avenue",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5S1J9",
        addressCountry: "CA",
      },
      areaServed: [
        "Vancouver",
        "West Vancouver",
        "Burnaby",
        "Coquitlam",
        "Richmond",
        "Surrey",
        "Langley",
      ],
      keywords:
        "Vancouver luxury REALTOR, West Vancouver luxury real estate, Lower Mainland asset marketing",
    },
    {
      "@type": "LocalBusiness",
      name: "Avi Sanan — Sutton Group West Coast Realty",
      telephone: "778-387-7001",
      address: {
        "@type": "PostalAddress",
        streetAddress: "205 - 2607 East 49th Avenue",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5S1J9",
        addressCountry: "CA",
      },
    },
  ],
};
