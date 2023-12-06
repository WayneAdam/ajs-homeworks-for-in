import orderByProps from '../app';

test('sort by array', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: '2' },
    { key: 'attack', value: '80' },
    { key: 'defence', value: '40' },
    { key: 'health', value: '10' },
  ];

  const result = orderByProps(obj, ['name', 'level']);
  expect(result).toEqual(expected);
});

test('sort', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    { key: 'attack', value: '80' },
    { key: 'defence', value: '40' },
    { key: 'health', value: '10' },
    { key: 'level', value: '2' },
    { key: 'name', value: 'мечник' },
  ];

  const result = orderByProps(obj);
  expect(result).toEqual(expected);
});