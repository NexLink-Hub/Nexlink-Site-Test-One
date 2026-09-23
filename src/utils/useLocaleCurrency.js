import { useMemo } from "react";

/**
 * Static approximate exchange rates from USD.
 * These are rough rates for display purposes only — not financial transactions.
 */
const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  ZAR: 18.5,
  JPY: 149,
  INR: 83,
  AUD: 1.53,
  CAD: 1.36,
  CHF: 0.88,
  CNY: 7.24,
  BRL: 4.97,
  KRW: 1320,
  MXN: 17.15,
  SGD: 1.34,
  NZD: 1.64,
  SEK: 10.5,
  NOK: 10.6,
  DKK: 6.87,
  PLN: 4.05,
  TRY: 27.0,
  AED: 3.67,
  NGN: 780,
  KES: 153,
  EGP: 30.9,
  GHS: 12.1,
  THB: 35.5,
  PHP: 56.2,
  IDR: 15500,
  MYR: 4.72,
  TWD: 31.5,
  CZK: 22.5,
  HUF: 355,
  RUB: 92,
  CLP: 880,
  COP: 3950,
  PEN: 3.72,
  ARS: 350,
  ILS: 3.65,
  SAR: 3.75,
  QAR: 3.64,
  KWD: 0.31,
  BHD: 0.38,
  PKR: 280,
  BDT: 110,
  LKR: 325,
  VND: 24500,
};

/**
 * Maps browser locale prefixes to currency codes.
 * Falls back to USD if unknown.
 */
const localeToCurrency = {
  "en-US": "USD",
  "en-GB": "GBP",
  "en-ZA": "ZAR",
  "en-AU": "AUD",
  "en-CA": "CAD",
  "en-NZ": "NZD",
  "en-IN": "INR",
  "en-SG": "SGD",
  "en-NG": "NGN",
  "en-KE": "KES",
  "en-GH": "GHS",
  "en-PH": "PHP",
  "en-MY": "MYR",
  "en-PK": "PKR",
  "en-BD": "BDT",
  "en-LK": "LKR",
  "en-IE": "EUR",
  "de": "EUR",
  "de-DE": "EUR",
  "de-AT": "EUR",
  "de-CH": "CHF",
  "fr": "EUR",
  "fr-FR": "EUR",
  "fr-BE": "EUR",
  "fr-CH": "CHF",
  "fr-CA": "CAD",
  "it": "EUR",
  "it-IT": "EUR",
  "es": "EUR",
  "es-ES": "EUR",
  "es-MX": "MXN",
  "es-AR": "ARS",
  "es-CL": "CLP",
  "es-CO": "COP",
  "es-PE": "PEN",
  "pt": "EUR",
  "pt-PT": "EUR",
  "pt-BR": "BRL",
  "ja": "JPY",
  "ja-JP": "JPY",
  "ko": "KRW",
  "ko-KR": "KRW",
  "zh": "CNY",
  "zh-CN": "CNY",
  "zh-TW": "TWD",
  "zh-HK": "HKD",
  "ru": "RUB",
  "ru-RU": "RUB",
  "pl": "PLN",
  "pl-PL": "PLN",
  "tr": "TRY",
  "tr-TR": "TRY",
  "sv": "SEK",
  "sv-SE": "SEK",
  "nb": "NOK",
  "nn": "NOK",
  "no": "NOK",
  "da": "DKK",
  "da-DK": "DKK",
  "cs": "CZK",
  "cs-CZ": "CZK",
  "hu": "HUF",
  "hu-HU": "HUF",
  "th": "THB",
  "th-TH": "THB",
  "id": "IDR",
  "id-ID": "IDR",
  "ms": "MYR",
  "ms-MY": "MYR",
  "vi": "VND",
  "vi-VN": "VND",
  "ar": "AED",
  "ar-SA": "SAR",
  "ar-AE": "AED",
  "ar-QA": "QAR",
  "ar-KW": "KWD",
  "ar-BH": "BHD",
  "ar-EG": "EGP",
  "he": "ILS",
  "he-IL": "ILS",
  "hi": "INR",
  "hi-IN": "INR",
  "bn": "BDT",
  "ta": "INR",
  "te": "INR",
  "ur": "PKR",
  "ur-PK": "PKR",
  "fil": "PHP",
  "af": "ZAR",
  "af-ZA": "ZAR",
};

/**
 * Detects the user's locale currency and provides formatting utilities.
 */
function detectCurrency() {
  const locale = navigator?.language || "en-US";

  // Try exact match first, then language-only prefix, then default to USD
  let currencyCode =
    localeToCurrency[locale] ||
    localeToCurrency[locale.split("-")[0]] ||
    "USD";

  // Ensure we have an exchange rate for this currency
  if (!exchangeRates[currencyCode]) {
    currencyCode = "USD";
  }

  return { locale, currencyCode };
}

/**
 * Custom hook that provides locale-aware currency formatting for budget tiers.
 *
 * Usage:
 *   const { formatBudget, budgetOptions, currencyCode } = useLocaleCurrency();
 *   // budgetOptions = ["< R250,000", "R250,000 – R550,000", ...]
 */
export function useLocaleCurrency() {
  const { locale, currencyCode } = useMemo(() => detectCurrency(), []);
  const rate = exchangeRates[currencyCode] || 1;

  const formatAmount = useMemo(() => {
    return (usdAmount) => {
      const converted = Math.round(usdAmount * rate);
      try {
        return new Intl.NumberFormat(locale, {
          style: "currency",
          currency: currencyCode,
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        }).format(converted);
      } catch {
        // Fallback if Intl doesn't recognize the currency
        return `${currencyCode} ${converted.toLocaleString(locale)}`;
      }
    };
  }, [locale, currencyCode, rate]);

  // USD base budget tiers
  const budgetTiersUSD = [15000, 35000, 75000];

  const budgetOptions = useMemo(() => {
    const f = (amt) => formatAmount(amt);
    return [
      `< ${f(budgetTiersUSD[0])}`,
      `${f(budgetTiersUSD[0])} – ${f(budgetTiersUSD[1])}`,
      `${f(budgetTiersUSD[1])} – ${f(budgetTiersUSD[2])}`,
      `${f(budgetTiersUSD[2])}+`,
    ];
  }, [formatAmount]);

  return { formatAmount, budgetOptions, currencyCode, locale };
}

export default useLocaleCurrency;
