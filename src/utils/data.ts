import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const noFooter = ["/signin", "/signup"];
export const noNav = ["/signin", "/signup"];

export const navList = [
  {
    id: 1,
    page: "Home",
    link: "/",
  },
  {
    id: 2,
    page: "Vendors",
    link: "/vendors",
  },
  {
    id: 3,
    page: "Orders",
    link: "/orders",
    unique: true,
  },
  {
    id: 4,
    page: "About",
    link: "/about",
  },
  {
    id: 5,
    page: "Faq",
    link: "/faq",
  },
  {
    id: 6,
    page: "Contact",
    link: "/contact",
  },
];

export const accountInputsHeight = {
  base: "45px",
  md: "55px",
};

export const socials = [
  {
    id: 1,
    icon: AiOutlineGithub,
    to: "https://github.com/Fasasifoyin",
  },
  {
    id: 2,
    icon: AiOutlineTwitter,
    to: "https://x.com/foyinjohn",
  },
  {
    id: 3,
    icon: AiOutlineWhatsApp,
    to: "https://wa.link/b5zn3u",
  },
];

export const Categories = [
  "Restaurant",
  "Supermarket",
  "Drinks",
  "African",
  "Pharmacies",
  "Snacks"
];

export const Countries = ["United States", "Canada", "Nigeria"];

export const getStates = (country: string) => {
  switch (country) {
    case "United States":
      return ["Washington", "California"];
    case "Nigeria":
      return ["Lagos", "Ogun"];
    case "Canada":
      return ["Alberta", "NovaScotia"];
    default:
      return [];
  }
};

export const getCities = (state: string) => {
  switch (state) {
    case "Washington":
      return ["	Seattle", "Spokane", "Tacoma", "Vancouver", "	Bellevue"];
    case "California":
      return [
        "	San Francisco",
        "Fresno",
        "Long Beach",
        "Anaheim",
        "Irvine",
        "Santa Ana",
      ];
    case "Lagos":
      return ["Ikeja", "Ikorodu", "Badagry", "Epe", "Lagos Island", "Somolu"];
    case "Ogun":
      return ["Abeokuta", "Ayetoro", "Ijebu Ode", "Ikenne"];
    case "Alberta":
      return ["Calgary", "Hinton", "Bariff", "Edmonton"];
    case "NovaScotia":
      return ["Yarmouth", "Truro", "Shelburne", "Kentville", "New Glasgow"];
    default:
      return [];
  }
};

export const HelpfulLinks = [
  "Search Terms",
  "Advanced Search",
  "Help & Faq's",
  "Store Location",
  "Order & Return",
];

export const OverView = [
  "Contact Us",
  "About Us",
  "Career",
  "Refund & Return",
  "Deliveries",
];

export const companyAccountLinks = [
  {
    id: 1,
    page: "Dashboard",
    link: "",
  },
  {
    id: 2,
    page: "Company Details",
    link: "/companydetails",
  },
  {
    id: 3,
    page: "Create Food",
    link: "/createfood",
  },
  {
    id: 4,
    page: "Company Foods",
    link: "/companyfoods",
  },
];

export const userAccountLinks = [
  {
    id: 1,
    page: "Dashboard",
    link: "",
  },
  {
    id: 2,
    page: "User Details",
    link: "/userdetails",
  },
  {
    id: 3,
    page: " Your Orders",
    link: "/orders",
  },
];

// export const Countriesssss = [
//   {
//     country: "Nigeria",
//     states: [
//       {
//         state: "Lagos",
//         cities: ["Alimosho", "Oke-odo"],
//       },
//       {
//         state: "Ogun",
//         cities: ["Sango", "Akure"],
//       },
//     ],
//   },
//   {
//     country: "USA",
//     states: [
//       {
//         state: "Florida",
//         cities: ["Aka", "Baa"],
//       },
//       {
//         state: "New-York",
//         cities: ["Foo", "Boo"],
//       },
//     ],
//   },
// ];

// const ysysys = (country: string) => {
//   return Countriesssss.find(each => each.country === country)?.states.map(each => each.state)
// }
