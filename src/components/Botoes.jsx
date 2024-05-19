export default function Botao (props) {
    const modificaDisplay = () => {
        let tamanhoString = props.formulaDisplay.length
        
        if(!isNaN(props.valor)) { // é um numero
            if(props.valor !== '0' && tamanhoString === 0){ // num diferente de zero
                props.setBotoesPressionados(props.valor)
                props.setFormulaDisplay(props.valor)
            }
            else if (tamanhoString === 1 && props.formulaDisplay[tamanhoString -1] === '0') {
                props.setZeroAntesDoPonto(false)
                props.setBotoesPressionados(props.valor)
                props.setFormulaDisplay(props.valor)
            }
            else if (props.valor === '0' && tamanhoString === 0) {
                console.log('sera???')
                props.setZeroAntesDoPonto(true)
                props.setBotoesPressionados(props.valor)
                props.setFormulaDisplay(props.valor)
            }
            else if (props.formulaDisplay[tamanhoString -2] === '-' || props.formulaDisplay[tamanhoString -2] === '+' || props.formulaDisplay[tamanhoString -2] === '*' || props.formulaDisplay[tamanhoString -2] === '/') {
                console.log('hum')
                console.log('tamanho' + tamanhoString)
                console.log(props.formulaDisplay[tamanhoString -1])
                if (tamanhoString > 1 && props.formulaDisplay[tamanhoString -1] === '0') {
                    console.log('to entendendo')
                    props.setZeroAntesDoPonto(false)
                    props.setFormulaDisplay(props.formulaDisplay.slice(0, -1) + props.valor)
                    props.setBotoesPressionados(props.valor)
                }
                else if(isNaN(props.formulaDisplay[tamanhoString -3])) {
                    props.setBotoesPressionados(props.botoesPressionados + props.valor)
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                }
                else {
                    props.setBotoesPressionados(props.valor)
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                }
            }
            /*else if(props.valor === '0') {
                if(props.botoesPressionados[tamanhoString -2] !== '+' && props.botoesPressionados[tamanhoString -2] !== '-' && props.botoesPressionados[tamanhoString -2] !== 'x' && props.botoesPressionados[tamanhoString -2] !== '/'){}
            }*/
            else if (props.formulaDisplay[tamanhoString -1] === '+' || props.formulaDisplay[tamanhoString -1] === '-' || props.formulaDisplay[tamanhoString -1] === '*' || props.formulaDisplay[tamanhoString -1] === '/') {
                console.log('to aqui')
                if(props.valor === '0') {
                    console.log('sera')
                    props.setZeroAntesDoPonto(true)
                    props.setBotoesPressionados(props.valor)
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                } else {
                    props.setBotoesPressionados(props.valor)
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                }
            }
            else if (tamanhoString >= 1) {
                console.log('vendo aqui')
                if (props.zeroAntesDoPonto === false) {
                    console.log('olha')
                    props.setBotoesPressionados(props.botoesPressionados + props.valor)
                    console.log(props.formulaDisplay)
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                }
            }
            
        }
        else if(props.valor === '.' && props.decimal === false) {
            props.setZeroAntesDoPonto(false)
            console.log('foi aqui?')
            if(tamanhoString === 0) { //add 0 com um '.'
                props.setDecimal(true)
                props.setBotoesPressionados(props.botoesPressionados + props.valor)
                props.setFormulaDisplay(props.botoesPressionados + props.valor)
            } else if (tamanhoString !== 0 && !isNaN(props.formulaDisplay[tamanhoString -1])) {
                console.log('olaaaaa')
                props.setDecimal(true)
                props.setBotoesPressionados(props.botoesPressionados + props.valor)
                props.setFormulaDisplay(props.formulaDisplay + props.valor)
            }
        }
        else if(!isNaN(props.valor) && props.formulaDisplay[tamanhoString -1] === '.') { // insere um numero apos o '.'
            console.log('oi')
            props.setBotoesPressionados(props.botoesPressionados + props.valor)
            props.setFormulaDisplay(props.formulaDisplay + props.valor)
        }
        else if(props.valor === '+' || props.valor === '-' || props.valor === 'x' || props.valor === '/') {
            console.log('tres')
            console.log(props.botaoIgual)
            if (props.botaoIgual === true) {
                console.log('1')
                props.setBotaoIgual(false)
                let posicao = props.formulaDisplay.indexOf('=')
                props.setFormulaDisplay(props.formulaDisplay.substring(posicao + 1) + props.valor)
                props.setBotoesPressionados(props.valor)
            }
            else if(!isNaN(props.formulaDisplay[tamanhoString - 1])) {
                console.log('tudo')
                props.setDecimal(false)
                if(props.valor === 'x') {
                    props.setBotoesPressionados('x')
                    props.setFormulaDisplay(props.formulaDisplay + '*')
                } else {
                    props.setBotoesPressionados(props.valor)
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                }
            } else if (tamanhoString <= 1) {
                console.log('2')
                if(props.valor === 'x') {
                    props.setBotoesPressionados(props.valor)
                    props.setFormulaDisplay('*')
                } else {
                    props.setBotoesPressionados(props.valor)
                    props.setFormulaDisplay(props.valor)
                }
            }
            else if(!isNaN(props.formulaDisplay[tamanhoString -2]) && (props.formulaDisplay[tamanhoString -1] === '-' || props.formulaDisplay[tamanhoString -1] === '+' || props.formulaDisplay[tamanhoString -1] === '*' || props.formulaDisplay[tamanhoString -1] === '/')){
                console.log('bem')
                if(props.valor === '-') {
                    props.setFormulaDisplay(props.formulaDisplay + props.valor)
                    props.setBotoesPressionados(props.valor)
                }
            }
            else if(props.formulaDisplay[tamanhoString -2] === '-' || props.formulaDisplay[tamanhoString -2] === '+' || props.formulaDisplay[tamanhoString -2] === '*' || props.formulaDisplay[tamanhoString -2] === '/') {
                console.log('dois')
                if(props.valor !== '-' && props.valor !== '.'){
                    console.log('serio')
                    if(props.valor ==='x'){
                        props.setBotoesPressionados('x')
                        props.setFormulaDisplay(props.formulaDisplay.slice(0, -2) + '*')
                    } else {
                        props.setBotoesPressionados(props.valor)
                        props.setFormulaDisplay(props.formulaDisplay.slice(0, -2) + props.valor)
                    }
                }
            }
        }
        else if(props.valor === '-') {
            console.log('hum')
            if(props.formulaDisplay[tamanhoString -2] !== '-' || props.formulaDisplay[tamanhoString -2] !== '+' || props.formulaDisplay[tamanhoString -2] !== '*' || props.formulaDisplay[tamanhoString -2] !== '/') {
                props.setBotoesPressionados(props.valor)
                props.setFormulaDisplay(props.formulaDisplay + props.valor)
            }
        }
        else if (props.valor === 'AC') {
            props.setBotoesPressionados('0')
            props.setFormulaDisplay('')
            props.setDecimal(false)
            props.setZeroAntesDoPonto(false)
            props.setBotaoIgual(false)
        }
        else if(props.valor === '=') {
            let resultado
            let resultadoString
            props.setBotaoIgual(true)
            resultado = eval(props.formulaDisplay)
            resultadoString = resultado.toString()
            props.setBotoesPressionados(resultadoString)
            props.setFormulaDisplay(props.formulaDisplay + '=' + resultadoString)
        }
    }
    return (
        <button id={props.id} className={props.class} onClick={modificaDisplay}>{props.valor}</button>
    )
}