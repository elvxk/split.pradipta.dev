const formatCurrency = (amount) => {
  const parse = parseFloat(amount);
  return (
    parse.toLocaleString("id-ID", {
      minimumFractionDigits: 0,
    }) + " IDR"
  );
};

export default formatCurrency;
