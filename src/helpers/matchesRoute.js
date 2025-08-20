// используется в Header и Footer для их скрітия, если такой страниці не существует
import { allPagesData } from "@/data/allPagesData";
import { i18n } from "@/dictionaries/i18n.config";

export default function matchesRoute(pathname, lang) {
  // Проверяем, начинается ли путь с любого из маршрутов
  const isInPagesData = allPagesData.some((prefix) => {
    const isDefaultLang = lang === i18n.defaultLocale;
    const path = isDefaultLang ? prefix : `/${lang}${prefix}`;
    return pathname === path;
  });

  // добавляем к результату isInPagesData еще и проверку на равенство в частніх случаях
  const isRealPage =
    isInPagesData ||
    pathname === "" ||
    pathname === "/" ||
    pathname === "/en" ||
    pathname === "/uk";

  return isRealPage;
}
