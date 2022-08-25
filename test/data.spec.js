import {  filterDate, filterScore, filterDirectors, filterProducers} from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof FilterDate).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
