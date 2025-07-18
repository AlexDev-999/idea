import "server-only";

const dictionaries = {
  uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale) => await dictionaries[locale]();
