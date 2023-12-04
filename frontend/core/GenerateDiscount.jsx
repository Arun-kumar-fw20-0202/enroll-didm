function generateRandomNumber() {
  const randomNumber = Math.random();

  const scaledNumber = randomNumber * 15 + 15;

  const finalNumber = Math.floor(scaledNumber);

  return finalNumber;
}

export default generateRandomNumber;
