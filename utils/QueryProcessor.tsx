export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return "My Andrew ID is kayliny";
  } else if (query.toLowerCase().includes("what is your name?")) {
    return "kaylin";
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
        const x: number = parseInt(addMatch[1]);
        const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    if (multiplyMatch) {
        const x: number = parseInt(multiplyMatch[1]);
        const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }

  const maxMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
    if (maxMatch) {
        const x: number = parseInt(maxMatch[1]);
        const y: number = parseInt(maxMatch[2]);
        const z: number = parseInt(maxMatch[3]);
    return (Math.max(x,y,z)).toString();
  }

  const subtractMatch = query.match(/What is (\d+) minus (\d+)/);
    if (subtractMatch) {
        const x: number = parseInt(subtractMatch[1]);
        const y: number = parseInt(subtractMatch[2]);
    return (x-y).toString();
  }

  const powerMatch = query.match(/What is (\d+) to the power of (\d+)?/);
    if (powerMatch) {
        const x: number = parseInt(powerMatch[1]);
        const y: number = parseInt(powerMatch[2]);
    return (x**y).toString();
  }

  // function isPrime(num: number): boolean {
  //   if (num <= 1) return false;
  //   if (num <= 3) return true;

  //   if (num % 2 === 0 || num % 3 === 0) return false;

  //   for (let i = 5; i * i <= num; i += 6) {
  //     if (num % i === 0 || num % (i + 2) === 0) return false;
  //   }

  //   return true;
  // }

  // const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  // if (primeMatch) {
  //   const numbersString = primeMatch[1];
  //   const numbers = numbersString.split(', ').map(Number);

  //   const primeNumbers = numbers.filter(isPrime);
  //   return primeNumbers.join(', ');
  // }


  return "";
}
