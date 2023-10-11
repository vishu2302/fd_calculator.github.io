function calculateMA(){
    const principle = parseFloat(document.getElementById('principle').value)
    const interest = parseFloat(document.getElementById('interest').value)
    const time = parseFloat(document.getElementById('time').value)

    const ma = principle + (principle*time*interest)/100

    document.getElementById('result').innerText = `Maturity Amount ${ma.toFixed(3)}`
}

document.getElementById('calculate').addEventListener('click', calculateMA)