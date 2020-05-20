import orderByProps from '../js/app';

test('Corrent order by props', () => {
  const objOne = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(objOne, ['attack', 'health']);
  expect(result).toEqual([
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('Corrent order by props', () => {
  const objTwo = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(objTwo, ['name', 'level']);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Unorrent order by props', () => {
  expect(() => {
    orderByProps();
  }).toThrow();
});
