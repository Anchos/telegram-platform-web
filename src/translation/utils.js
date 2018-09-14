import { addLocaleData } from "react-intl";

export const getLocaleMessages = async locale => {
  switch (locale) {
    case "ru":
      const ru = await import(/*webpackChunkName: "translation_ru"*/ "./ru.json").then(
        ({ default: lang }) => lang,
      );
      addLocaleData(ru);
      return ru;

    default:
      const en = await import(/*webpackChunkName: "translation_en"*/ "./en.json").then(
        ({ default: lang }) => lang,
      );
      addLocaleData(en);
      return en;
  }
};
