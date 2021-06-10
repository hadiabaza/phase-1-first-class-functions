function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function namedFunc() {
    console.log("I am a named function");
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("hi");
  };
}
