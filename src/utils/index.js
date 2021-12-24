export function formatTwoDecimal(num) {
  try {
    return parseFloat(num).toFixed(2);
  } catch {
    return '';
  }
}