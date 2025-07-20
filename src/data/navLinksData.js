export const navLinksData = [
  {
    titleUk: "Головна",
    titleEn: "Main",
    href: "/",
  },
  {
    titleUk: "Продукція",
    titleEn: "Products",
    href: "/#products",

    productsId: [
      {
        titleUk: "Вапно",
        titleEn: "Calx",
        href: "/vapno",
      },
      {
        titleUk: "Вапняк",
        titleEn: "Calcite",
        href: "/vapnyak",
      },
      {
        titleUk: "Білий цемент",
        titleEn: "White cement",
        href: "/bilij-czement",
      },
      {
        titleUk: "Газоблоки",
        titleEn: "Gas blocks",
        href: "/gazobloki",
      },
      {
        titleUk: "Мармурова крихта",
        titleEn: "Marble crumb",
        href: "/marmurova-krikhta",
      },
      {
        titleUk: "Плитка терацо",
        titleEn: "Terrazzo tiles",
        href: "/plitka-teraczo",
      },
      {
        titleUk: "Сходи",
        titleEn: "Stairs",
        href: "/skhodi",
      },
      {
        titleUk: "Декоративний камінь",
        titleEn: "Decorative stone",
        href: "/dekorativnij-kamin",
      },
    ],
  },
  {
    titleUk: "Про нас",
    titleEn: "About us",
    href: "/pro-nas",
  },
  {
    titleUk: "FAQ",
    titleEn: "FAQ",
    href: "/faq",
  },
  {
    titleUk: "Контакти",
    titleEn: "Contacts",
    href: "/#contacts",
  },
  {
    titleUk: "Сертифікати",
    titleEn: "Certificates",
    href: "/sertifikati",
  },
];

// export const headerNavigation = navLinksData.filter((el) => {
//   return el.href !== "/services";
// });

// export const headerServices = navLinksData.find(
//   (el) => el.href === "/services"
// );

// export const servicesHref = navLinksData
//   .find((el) => el.titleEn === "Services")
//   .serviceId.find((item) => item.titleEn === "All services").href;

// export const aboutUsHref = navLinksData.find(
//   (el) => el.titleEn === "About us"
// ).href;

// export const portfolioHref = navLinksData.find(
//   (el) => el.titleEn === "Portfolio"
// ).href;

// export const commercialDesignHref = navLinksData
//   .find((el) => el.titleEn === "Services")
//   .serviceId.find((item) => item.titleEn === "Commercial design")
//   .href.slice(9);

// export const houseDesignHref = navLinksData
//   .find((el) => el.titleEn === "Services")
//   .serviceId.find((item) => item.titleEn === "House design")
//   .href.slice(9);

// export const apartmentDesignHref = navLinksData
//   .find((el) => el.titleEn === "Services")
//   .serviceId.find((item) => item.titleEn === "Apartment design")
//   .href.slice(9);

// export const architecturalDesignHref = navLinksData
//   .find((el) => el.titleEn === "Services")
//   .serviceId.find((item) => item.titleEn === "Architectural design")
//   .href.slice(9);
