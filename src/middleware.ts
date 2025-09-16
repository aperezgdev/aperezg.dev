import { defineMiddleware } from "astro/middleware";
import { ui, type Language } from "./i18n/ui";

function getBrowserLanguage(request: Request): Language {
  const acceptLanguage = request.headers.get("Accept-Language");

  if (acceptLanguage) {
    const preferredLang = acceptLanguage
      .split(",")[0]
      .split("-")[0]
      .toLowerCase();

    if (preferredLang in ui) {
      return preferredLang as Language;
    }
  }

  return "es";
}

export const onRequest = defineMiddleware((context, next) => {
  const browserLanguage = getBrowserLanguage(context.request);
  const urlLanguage = context.params.lang as Language | undefined;

  const lang = urlLanguage || browserLanguage || "es";
  console.log(lang);
  context.locals.lang = lang;
  context.locals.t = ui[lang] || ui["es"];

  return next();
});
