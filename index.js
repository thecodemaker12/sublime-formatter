exports.toCurrency = (number, currency = "XAF", lang = "fr") => {
  try {
    return new Intl.NumberFormat(lang, {
      style: "currency",
      currency,
    }).format(number);
  } catch (error) {
    console.log(error);
  }
};

exports.relativeTime = (time, unit = "day", lang = "fr") => {
  try {
    const rtf = new Intl.RelativeTimeFormat(lang, {
      numeric: "auto",
      style: "long",
    });
    return rtf.format(time, unit);
  } catch (error) {
    console.log(error);
  }
};

exports.formatDate = (date, withTime = false, lang = "fr") => {
  let options = { dateStyle: "medium", hour12: false };
  if (withTime) {
    options.timeStyle = "short";
  }
  return new Intl.DateTimeFormat(lang, options).format(date);
};
