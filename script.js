document.addEventListener('DOMContentLoaded', function () {
  const convertBtn = document.getElementById('convertBtn');
  convertBtn.addEventListener('click', convertCurrency);
});

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('from').value;
  const toCurrency = document.getElementById('to').value;

  // You would typically fetch the exchange rates from an API here.
  // For demonstration purposes, let's assume the following exchange rates:
  const exchangeRates = {
    usd: { eur: 0.85, gbp: 0.73 },
    eur: { usd: 1.18, gbp: 0.86 },
    gbp: { usd: 1.37, eur: 1.16 }
  };

  if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } else {
    document.getElementById('result').textContent = 'Invalid conversion';
  }
}
