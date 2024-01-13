function gcd(n, m) {
  if (m > 0) {
    const k = n % m;
    return gcd(m, k);
  } return Math.abs(n);
}

export default gcd;
