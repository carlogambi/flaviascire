import { itaLangPack } from "./ita";

export const langs = {
  ita: itaLangPack,
};

export const getCurrentLang = () => {
  try {
    const langId = window.localStorage.getItem("flo_website_lang");
    if (!langId) return itaLangPack;
    return langs[langId];
  } catch (err) {
    return itaLangPack;
  }
ß};
