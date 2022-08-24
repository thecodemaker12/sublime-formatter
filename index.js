"use strict";

var lang = "en";

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

module.exports.formatDate = (date, withTime = false) => {
  init();
  let options = { dateStyle: "medium", hour12: false };
  if (withTime) {
    options.timeStyle = "short";
  }
  return new Intl.DateTimeFormat(this.lang, options).format(date);
};

var init = () => {
  if (!this.lang) {
    this.lang = lang;
  }
};
