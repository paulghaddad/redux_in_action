export default function(store) {
  return function(next) {
    return function(action) {
      const result = next(action);
      console.log('Action:', action);
      console.log('State:', store.getState());
      return result;
    }
  }
}
