export const contactsData = [
  {
    name: "phone",
    href: "tel:+380503729909",
    icon: "/sprite.svg#icon-phone",
    contact: "+38 (050) 372-99-09",
  },

  {
    name: "phone_2",
    href: "tel:+380504324130",
    contact: "+38 (050) 432-41-30",
  },

  {
    name: "viber",
    href: "viber://chat?number=%2B380503729909",
    icon: "/sprite.svg#icon-viber",
    contact: "+38 (050) 372-99-09",
  },

  {
    name: "whatsapp",
    href: "https://wa.me/380503729909",
    icon: "/sprite.svg#icon-whatsapp",
    contact: "+38 (050) 372-99-09",
  },

  {
    name: "email",
    href: "mailto:mppidea.office@gmail.com",
    icon: "/sprite.svg#icon-email",
    contact: "mppidea.office@gmail.com",
  },

  {
    name: "location",
    href: "https://maps.app.goo.gl/CgGRt3da12jK5JTJ6",
    icon: "/sprite.svg#icon-map_pin",
    addressUk: "м.Ужгород, вул.Болгарська, 10-Б",
    addressEn: "c.Uzhhorod, st.Bolgarska, 10-B",
  },
];

const phone = contactsData.find((el) => el.name === "phone");

const whatsapp = contactsData.find((el) => el.name === "whatsapp");

const viber = contactsData.find((el) => el.name === "viber");

export const callLinksData = [phone, whatsapp, viber];
