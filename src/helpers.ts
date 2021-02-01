export function dice(dieType: number = 6, dieCount: number = 1) {
  let sum = 0;

  for (let i = 0; i < dieCount; i++) {
    const ran = Math.random();
    sum += Math.ceil(ran * dieType);
  }

  return sum;
}
