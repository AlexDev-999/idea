// используется в Header и Footer для их скрітия, если такой страниці не существует
import { allPagePathsData } from "@/data/allPagePathsData";
import { i18n } from "@/dictionaries/i18n.config";

export default function matchesRoute(pathname, lang) {
  // Проверяем, равен ли путь любому из маршрутов
  return allPagePathsData.some((pagePath) => {
    const isDefaultLang = lang === i18n.defaultLocale;
    const resultPath = isDefaultLang ? pagePath : `/${lang}${pagePath}`;
    return pathname === resultPath;
  });
}
