function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const decimalNumber = parseInt(decimalInput, 10);
    
    if (isNaN(decimalNumber)) {
        document.getElementById('binaryResult').innerText = "Ce n'est pas un nombre décimal.";
    } else {
        const binaryResult = decimalNumber.toString(2);
        document.getElementById('binaryResult').innerText = `Résultat binaire: ${binaryResult}`;
    }
}