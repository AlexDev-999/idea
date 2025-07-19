// 0503729909(основний,вайбер, вотсап)
// 0504324130
// mppidea.office@gmail.com

// Адреса м. Ужгород, вул. Болгарська 10Б

export const contactsData = [
  {
    name: "phone",
    href: "tel:+380503729909",
    icon: "/sprite.svg#icon-phone",
    contact: "+38 (050) 372-99-09",
  },

  {
    name: "whatsapp",
    href: "https://wa.me/380503729909",
    icon: "/sprite.svg#icon-whatsapp",
    contact: "+38 (050) 372-99-09",
  },

  {
    name: "viber",
    href: "viber://chat?number=%2B380503729909",
    icon: "/sprite.svg#icon-viber",
    contact: "+38 (050) 372-99-09",
  },

  {
    name: "email",
    href: "mailto:mppidea.office@gmail.com",
    icon: "/sprite.svg#icon-email",
    contact: "mppidea.office@gmail.com",
  },
];

const phone = contactsData.find((el) => el.name === "phone");

const whatsapp = contactsData.find((el) => el.name === "whatsapp");

const viber = contactsData.find((el) => el.name === "viber");

export const callLinksData = [phone, whatsapp, viber];

// export const contacts = contactsData.filter(
//   (el) => el.name !== "facebook" && el.name !== "instagram"
// );

// export const socLinks = contactsData.filter((el) => el.type === "socialMedia");

// export const faceInsta = contactsData.filter(
//   (el) => el.name === "facebook" || el.name === "instagram"
// );
