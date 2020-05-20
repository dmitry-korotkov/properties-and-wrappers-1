export default function orderByProps(obj, keys) {
  try {
    if (!obj || !keys) {
      throw Error('Некорректные данные');
    }
  } catch (e) {
    throw Error('Некорректные данные');
  }
  const arrayFind = [];
  const arrayRest = [];
  const result = { ...obj };
  keys.forEach((key) => {
    for (const prop in obj) {
      if (key === prop) {
        arrayFind.push({ key: prop, value: obj[prop] });
        delete result[prop];
      }
    }
  });
  // eslint-disable-next-line guard-for-in
  for (const prop in result) {
    arrayRest.push({ key: prop, value: result[prop] });
  }
  arrayRest.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  return arrayFind.concat(arrayRest);
}
