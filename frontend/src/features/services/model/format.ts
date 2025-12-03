export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(price);
};

export const formatPriceRange = (min: number, max: number): string => {
  return `от ${formatPrice(min)}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ru-RU', {
    month: 'numeric',
    year: 'numeric'
  }).format(date);
};

export const isDumpActive = (activeUntil: string): boolean => {
  return new Date(activeUntil) > new Date();
};

