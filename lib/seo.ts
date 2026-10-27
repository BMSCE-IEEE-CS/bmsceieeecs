// Shared facts for search engines and AI assistants. Used by the root layout
// (metadata + structured data), robots.txt and sitemap.xml.
export const SITE_URL = "https://www.bmsceieeecs.in";

export const PARALLAX_URL = `${SITE_URL}/cybermonth/events/parallax-hackathon`;

export const SITE_DESCRIPTION =
  "BMSCE IEEE Computer Society is the IEEE Computer Society student branch chapter of BMS College of Engineering, Bengaluru. Since 2021 it has run national-level hackathons, workshops, talks and outreach for engineering students, including Cyber Month 2026 and Parallax, a 24-hour cybersecurity hackathon with a ₹40,000 prize pool.";

export const SITE_KEYWORDS = [
  "BMSCE IEEE Computer Society",
  "BMSCE IEEE CS",
  "IEEE Computer Society BMSCE",
  "BMS College of Engineering",
  "BMSCE",
  "BMSCE clubs",
  "BMSCE events",
  "IEEE student branch Bangalore",
  "hackathon",
  "hackathon in Bangalore",
  "hackathon in Bengaluru",
  "national level hackathon",
  "cybersecurity hackathon",
  "Parallax hackathon",
  "Cyber Month 2026",
  "online hackathon",
  "college hackathon",
  "engineering college events Bangalore",
  "tech events for students",
  "coding workshops Bangalore",
];

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Bull Temple Road, Basavanagudi",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560019",
  addressCountry: "IN",
};

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "BMSCE IEEE Computer Society",
      alternateName: ["BMSCE IEEE CS", "IEEE CS BMSCE", "BMSCE IEEE Computer Society Student Branch Chapter"],
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/bmsceieeecsblack.png`,
      image: `${SITE_URL}/og.jpg`,
      description: SITE_DESCRIPTION,
      email: "ieee.cs@bmsce.ac.in",
      foundingDate: "2021",
      address: ADDRESS,
      sameAs: [
        "https://www.linkedin.com/company/bmsce-ieee-computer-society/",
        "https://www.instagram.com/bmsce_ieeecs/",
        "https://github.com/BMSCE-IEEE-CS",
      ],
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "BMS College of Engineering",
        url: "https://bmsce.ac.in",
        address: ADDRESS,
      },
      event: [{ "@id": `${PARALLAX_URL}#event` }, { "@id": `${SITE_URL}/cybermonth#cyber-month` }],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "BMSCE IEEE Computer Society",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SiteNavigationElement",
      name: ["Events", "Parallax hackathon", "Cyber Month 2026", "CS BITS 2026", "WINGS", "CS Project Series", "CS Reach"],
      url: [
        `${SITE_URL}/events`,
        PARALLAX_URL,
        `${SITE_URL}/cybermonth`,
        `${SITE_URL}/bits`,
        `${SITE_URL}/wings`,
        `${SITE_URL}/ieeecsps`,
        `${SITE_URL}/csreach`,
      ],
    },
  ],
};
