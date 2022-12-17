/* eslint-disable */

var Cat = (function () {
  const cats = {
    count: 0,
    totalWeight: 0,
    averageWeight: 0,
  };

  function Cat(name, weight) {
    if (!name || !weight) {
      throw new TypeError('both args required');
    }
    cats.count += 1;

    Object.defineProperty(this, 'weight', {
      get: function () {
        return this._weight || 0;
      },
      set: function (x) {
        cats.totalWeight = cats.totalWeight - this.weight + x;
        cats.averageWeight = cats.totalWeight / cats.count;
        return (this._weight = x);
      },
    });

    this.name = name;
    this.weight = weight;
  }

  Cat.averageWeight = function () {
    return cats.averageWeight;
  };

  return Cat;
})();
