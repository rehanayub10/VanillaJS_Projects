const amount = document.getElementById('amount')
    , rating = document.getElementById('rating')
    , numPeople = document.getElementById('numPeople')
    , button = document.getElementById('button');


let result = document.querySelector('.result')
    , submitted = false;

button.addEventListener('click', displayResult);

const calculateTipAmount = (amount, rating, numPeople) => {
    return (parseFloat(amount.value) * (parseInt(rating.value,10)/100)/parseInt(numPeople.value,10)).toFixed(2);
};

function displayResult(e) {
    if (!submitted) {
        e.preventDefault();
        result.innerHTML = `<h3>Tip Amount</h3>
                            <span>$ ${calculateTipAmount(amount,rating,numPeople)}</span>`;
    }

    submitted = true;
}

