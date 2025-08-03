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
        titleEn: "Lime",
        href: "/vapno",
      },
      {
        titleUk: "Вапняк",
        titleEn: "Limestone",
        href: "/vapnyak",
      },
      {
        titleUk: "Білий цемент",
        titleEn: "White cement",
        href: "/bilij-czement",
      },
      {
        titleUk: "Газоблоки",
        titleEn: "AAC blocks",
        href: "/gazobloki",
      },
      {
        titleUk: "Мармурова крихта",
        titleEn: "Marble crumb",
        href: "/marmurova-krikhta",
      },
      {
        titleUk: "Плитка Терацо",
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
      {
        titleUk: "Товари для саду",
        titleEn: "Products for the garden",
        href: "/tovari-dlya-sadu",
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

export const headerProductsData = navLinksData.find(
  (el) => el.titleEn === "Products"
);
