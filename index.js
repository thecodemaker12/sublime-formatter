"use strict";

var lang = "en";

var defaultDateFormat = {
  d: { day: "numeric" },
  m: { month: "numeric" },
  mt: { month: "short" },
  M: { month: "long" },
  y: { year: "numeric" },
  LTS: { timeStyle: "medium", hour12: false },
  LT: { timeStyle: "short", hour12: false },
  L: { dateStyle: "medium" },
  LL: { dateStyle: "long" },
  LLL: { dateStyle: "long", timeStyle: "short", hour12: false },
  LLLL: { dateStyle: "long", timeStyle: "long", hour12: false },
};

exports.locale = (lang) => {
  this.lang = lang;
};

module.exports.toCurrency = (number, currency = "XAF") => {
  try {
    init();
    return new Intl.NumberFormat(this.lang, {
      style: "currency",
      currency,
    }).format(number);
  } catch (error) {
    console.log(error);
  }
};

module.exports.relativeTime = (time, unit = "day") => {
  try {
    init();
    const rtf = new Intl.RelativeTimeFormat(this.lang, {
      numeric: "auto",
      style: "long",
    });
    return rtf.format(time, unit);
  } catch (error) {
    console.log(error);
  }
};

module.exports.formatDate = (date, format = null) => {
  init();
  if (format) {
     format = checkFormat(format);
  } else {
    format = {}
  }
  return new Intl.DateTimeFormat(this.lang, format).format(date);
};

var init = () => {
  if (!this.lang) {
    this.lang = lang;
  }
};

function checkFormat(format) {
  const findFormat = defaultDateFormat[format];
  if (findFormat) {
    return findFormat;
  }
  console.error('Error: invalid format !');
}
