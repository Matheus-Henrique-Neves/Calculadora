let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log("TESTANDO: " + e.target.innerText);
        
        display.innerText == 'ERROR' ? display.innerText= null : display.innerText;
        
        switch (e.target.innerText) {
            case 'C':
                display.innerText = null;
                break;
            case '=':
                try {
                    //vai tenta fazer as coisas aqui
                    //mas se der algo errado vai para catch
                    display.innerText=eval(display.innerText);
                }
                catch {
                    //mostrar erro
                    display.innerText = "ERROR";
                }
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;
                break;
        }


    });

});