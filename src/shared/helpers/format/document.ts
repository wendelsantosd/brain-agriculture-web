// Brazilian Social Security Number
export const formatBrazilianSSN = (value?: string): string => {
  if (!value) return '';
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2}$)/, '$1.$2.$3-$4');
};

// Brazilian Employer Identification Number
export const formatBrazilianEIN = (value?: string): string => {
  if (!value) return '';
  return value.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}$)/,
    '$1.$2.$3/$4-$5',
  );
};

// Brazilian Identification Number
export const formatBrazilianID = (value?: string): string => {
  if (!value) return '';
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
};
