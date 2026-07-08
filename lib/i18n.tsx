"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "th" | "en";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "th",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");

  useEffect(() => {
    try {
      if (localStorage.getItem("lang") === "en") setLang("en");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "th" ? "en" : "th";
      try {
        localStorage.setItem("lang", next);
      } catch {}
      return next;
    });
  };

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
