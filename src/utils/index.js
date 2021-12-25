export function formatTwoDecimal(num) {
  try {
    return parseFloat(num).toFixed(2);
  } catch {
    return '';
  }
}

export function objToJson(obj) {
  try {
    return JSON.stringify(obj);
  } catch {
    return '';
  }
}

export function jsonToObj(json) {
  try {
    return JSON.parse(json);
  } catch(er) {
    console.log(er)
    return {};
  }
}