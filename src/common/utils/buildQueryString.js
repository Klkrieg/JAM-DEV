export function buildQueryString(obj) {
  const segments = [];
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value === null || value === undefined) {
      continue;
    }

    const encodedKey = encodeURIComponent(key.toString());
    if (Array.isArray(value)) {
      value.forEach((item) => {
        const encodedItem = encodeURIComponent(item.toString());
        segments.push(`${encodedKey}=${encodedItem}`);
      });
    } else {
      const encodedValue = encodeURIComponent(value);
      segments.push(`${encodedKey}=${encodedValue}`);
    }
  }

  return segments.join('&');
}
