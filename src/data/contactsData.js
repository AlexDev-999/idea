export const contactsData = [
  {
    name: "phone",
    href: "tel:+380503729909",
    icon: "/sprite.svg#icon-phone",
    contact: "+38 (050) 372-99-09",
    ariaLabel: "Our phone first",
  },

  {
    name: "phone_2",
    href: "tel:+380504324130",
    contact: "+38 (050) 432-41-30",
    ariaLabel: "Our phone second",
  },

  {
    name: "viber",
    href: "viber://chat?number=%2B380503729909",
    icon: "/sprite.svg#icon-viber",
    contact: "+38 (050) 372-99-09",
    ariaLabel: "Our phone viber",
  },

  {
    name: "whatsapp",
    href: "https://wa.me/380503729909",
    icon: "/sprite.svg#icon-whatsapp",
    contact: "+38 (050) 372-99-09",
    ariaLabel: "Our phone whatsapp",
  },

  {
    name: "email",
    href: "mailto:mppidea.office@gmail.com",
    icon: "/sprite.svg#icon-email",
    contact: "mppidea.office@gmail.com",
    ariaLabel: "Our email",
  },

  {
    name: "location",
    href: "https://maps.app.goo.gl/EiF8RkxL2vSPax3G6",
    icon: "/sprite.svg#icon-map_pin",
    addressUk: "м.Ужгород, вул.Болгарська, 10-Б",
    addressEn: "c.Uzhhorod, st.Bolgarska, 10-B",
    ariaLabel: "Our location",
  },
];

const phone = contactsData.find((el) => el.name === "phone");

const whatsapp = contactsData.find((el) => el.name === "whatsapp");

const viber = contactsData.find((el) => el.name === "viber");

export const callLinksData = [phone, whatsapp, viber];
