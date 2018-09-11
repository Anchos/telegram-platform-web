import en from "./en.json";
import ru from "./ru.json";
import { addLocaleData } from "react-intl";

export const getLocaleMessages = locale => {
  switch (locale) {
    case "en":
      return en;
    case "ru":
      addLocaleData(ru);
      return ru;
    default:
      return en;
  }
};
