import { translations } from "~/lib/lang";

type TranslationKey = keyof typeof translations;
export function _(key: TranslationKey): string {
  return translations[key] || key;
}
