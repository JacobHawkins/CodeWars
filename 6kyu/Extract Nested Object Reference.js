/**
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
 */

// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function (string) {
  var arr = string.split('.');
  return arr.reduce(function (pv, cv) {
    return pv ? pv[cv] : pv;
  }, this);
};
