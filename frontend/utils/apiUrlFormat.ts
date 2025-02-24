export default (template: string, values: Record<string, string | string[] | number>): string => {
  return template.replace(/\{([^\}]+)\}/g, (_, key) => {
    const value = values[key];
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value.toString();
  });
};