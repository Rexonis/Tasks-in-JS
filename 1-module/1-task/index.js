function factorial(n) {
  let fact = 1;
  while (n > 1) {
    fact = fact * n;
    n--;
  }
  return fact;
}
