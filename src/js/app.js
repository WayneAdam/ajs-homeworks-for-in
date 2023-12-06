export default function orderByProps(obj, arr = []) {
  const result = [];
  const keys = [];

  arr.forEach((element) => {
    for (const key in obj) {
      if (key === element) {
        result.push({
          key: `${key}`,
          value: `${obj[key]}`,
        });
      }
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      keys.push(key);
    }
  }

  keys.sort();

  keys.forEach((element) => {
    result.push({
      key: `${element}`,
      value: `${obj[element]}`,
    });
  });

  return result;
}