const amount = document.getElementById('amount')
    , rating = document.getElementById('rating')
    , numPeople = document.getElementById('numPeople')
    , button = document.getElementById('button');


let result = document.querySelector('.result')
    , submitted = false;

button.addEventListener('click', submitted ? reset : displayResult);

const calculateTipAmount = (amount, rating, numPeople) => {
    const output = (parseFloat(amount.value) * (parseInt(rating.value,10)/100)/parseInt(numPeople.value,10)).toFixed(2);
    return isNaN(output) ? '0.00' : output;
};

function displayResult(e) {

    e.preventDefault();

    if (!submitted) {
        result.innerHTML = `<h3>Tip Amount</h3>
                            <span>$ ${calculateTipAmount(amount,rating,numPeople)}</span>`;
        
        e.target.textContent = 'Reset';
    }

    submitted = true;
}

function reset (e) {

    e.preventDefault();

    if (submitted) {
        e.target.textContent = 'Calculate';
        amount.value = '';
        rating.value = 10;
        numPeople.value = 1;
        result.innerHTML = '';
    }

    submitted = false;
}

