function calculateOptionPrice() {
    const S = parseFloat(document.getElementById('stockPrice').value); // Stock Price
    const K = parseFloat(document.getElementById('strikePrice').value); // Strike Price
    const T = parseFloat(document.getElementById('timeToMaturity').value); // Time to Maturity in years
    const sigma = parseFloat(document.getElementById('volatility').value); // Volatility
    const r = parseFloat(document.getElementById('riskFreeRate').value); // Risk-free rate

    if (isNaN(S) || isNaN(K) || isNaN(T) || isNaN(sigma) || isNaN(r)) {
        alert("Please enter all values correctly!");
        return;
    }

    // Black-Scholes model calculation
    const d1 = (Math.log(S / K) + (r + Math.pow(sigma, 2) / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);

    const callPrice = S * normalCDF(d1) - K * Math.exp(-r * T) * normalCDF(d2);
    const putPrice = K * Math.exp(-r * T) * normalCDF(-d2) - S * normalCDF(-d1);

    // Update UI with calculated prices
    document.getElementById('callPrice').innerText = `$${callPrice.toFixed(2)}`;
    document.getElementById('putPrice').innerText = `$${putPrice.toFixed(2)}`;
}

// Cumulative normal distribution function approximation
function normalCDF(x) {
    return (1.0 + erf(x / Math.sqrt(2.0))) / 2.0;
}

// Error function approximation
function erf(x) {
    const sign = (x >= 0) ? 1 : -1;
    x = Math.abs(x);

    // Constants for approximation
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
}
