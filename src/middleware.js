// ! test with GPT

import { NextResponse } from "next/server";
import { i18n } from "@/dictionaries/i18n.config";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Пропускаємо системні файли
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|avif)$/)
  ) {
    return NextResponse.next();
  }

  // перевіряє чи є в pathname якась з наших мов
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // якщо в pathname немає мови (тобто вона наша дефолтна), то жорстко віддаємо дефолтну українську (для правильного запиту)
    return NextResponse.rewrite(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
