// папка собирает несуществующие страниці
import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound(); // кинет на [lang]/not-found.js
}
