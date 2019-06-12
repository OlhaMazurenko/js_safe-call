function safeCall(f) {
  try {
    f();
  } catch(error) {
    return false;
  }
  return true
}
  
console.log(safeCall(() => console.log('Hello!')));
console.log(safeCall(() => JSON.parse('abc')));
console.log(safeCall(() => false));
console.log(safeCall(() => abc));
 