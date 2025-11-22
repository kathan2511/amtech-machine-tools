export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

export function formatRange(min?: number, max?: number) {
  if (min && max) {
    return `${min} – ${max}`;
  }
  if (min) {
    return `${min}+`;
  }
  if (max) {
    return `Up to ${max}`;
  }
  return 'N/A';
}
