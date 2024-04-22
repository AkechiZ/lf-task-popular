export function formatNumber(num) {
  return Intl.NumberFormat('en-US', { style: 'decimal' }).format(num);
}
