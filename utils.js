const data = require("./data.json");

const GENERAL_REPLY = `Usage: <keyword> <country_name>
List of Keywords:
capital
currency
native_language
famous_for
phone_code
flag
drive_direction
alcohol_prohibition
constitutional_form
language_codes
is_landlocked
`;

function getCountryAttribute(country, attribute) {
  let filteredItems = data.filter(val => val.country === country.toLowerCase());
  if (filteredItems.length < 1) {
    return "NA";
  }
  let attr = attribute.toLowerCase();
  if (filteredItems[0].hasOwnProperty(attr)) {
    let val = filteredItems[0][attr];
    switch (typeof(val)) {
      case "string":
        return val;
      default:
        return val.toString();
    }
  }
  return "NA";
}

async function getFlag(country) {
  let filteredItems = data.filter(val => val.country === country.toLowerCase());
  if (filteredItems.length < 1) {
    return "NA";
  }
  return filteredItems[0].flag;
  
}

module.exports = {getCountryAttribute, GENERAL_REPLY, getFlag}