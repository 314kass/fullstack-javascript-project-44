export default (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
}