/**
 * Format a number as Indian Rupee currency with proper comma grouping.
 * e.g. 123456 → "₹1,23,456"
 */
export function formatINR(amount) {
  if (amount == null || isNaN(amount)) return '₹0';
  const isNegative = amount < 0;
  const abs = Math.abs(amount);
  const parts = abs.toFixed(2).split('.');
  let intPart = parts[0];
  const decPart = parts[1];

  // Indian grouping: last 3 digits, then groups of 2
  if (intPart.length > 3) {
    const last3 = intPart.slice(-3);
    const remaining = intPart.slice(0, -3);
    const grouped = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    intPart = grouped + ',' + last3;
  }

  // Drop decimals if they're .00
  const formatted = decPart === '00' ? intPart : `${intPart}.${decPart}`;
  return `${isNegative ? '-' : ''}₹${formatted}`;
}
