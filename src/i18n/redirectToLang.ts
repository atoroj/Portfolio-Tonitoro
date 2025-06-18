import { defaultLang, languages } from "../i18n/ui";

/**
 * Recibe el header `accept-language` y devuelve una Response con redirección
 */
export function redirectToPreferredLang(acceptLangHeader: string | null): Response {
  const supportedLangs = Object.keys(languages); // ["en", "es"]
  const acceptLang = acceptLangHeader?.toLowerCase() ?? "";
  let redirectLang = defaultLang;

  for (const lang of supportedLangs) {
    if (acceptLang.startsWith(lang)) {
      redirectLang = lang;
      break;
    }
  }

  return new Response(null, {
    status: 308,
    headers: {
      Location: `/${redirectLang}`,
    },
  });
}