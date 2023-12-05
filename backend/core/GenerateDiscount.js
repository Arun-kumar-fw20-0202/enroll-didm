//
const generateDiscount = () => {
  const Discount = Math.random();

  const scaledNumber = Discount * 15 + 15;

  const finalNumber = Math.floor(scaledNumber);

  return finalNumber;
};

module.exports = { generateDiscount };
