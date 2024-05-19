import { useState } from "react";
import Botao from "./Botoes";
import Display from "./Display";
import '../style.css'

export default function Calculadora () {
    const [formulaDisplay, setFormulaDisplay] = useState('')
    const [botoesPressionados, setBotoesPressionados] = useState('0')
    const [decimal, setDecimal] = useState(false)
    const [zeroAntesDoPonto, setZeroAntesDoPonto] = useState(false)
    const [botaoIgual, setBotaoIgual] = useState(false)

    return (
        <div id="container">
            <div>
                <Display botoesPressionados={botoesPressionados} formulaDisplay={formulaDisplay}/>
                <table>
                    <tbody>
                        <tr>
                        </tr>
                        <tr>
                            <td colSpan={2}><Botao id={'clear'} valor={'AC'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'AC'}/></td>
                            <td><Botao id={'divide'} valor={'/'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'mathematicalSymbol'}/></td>
                            <td><Botao id={'multiply'} valor={'x'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'mathematicalSymbol'}/></td>
                        </tr>
                        <tr>
                            <td><Botao id={'seven'} valor={'7'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'eight'} valor={'8'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'nine'} valor={'9'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'subtract'} valor={'-'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'mathematicalSymbol'}/></td>
                        </tr>
                        <tr>
                            <td><Botao id={'four'} valor={'4'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'five'} valor={'5'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'six'} valor={'6'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'add'} valor={'+'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'mathematicalSymbol'}/></td>
                        </tr>
                        <tr>
                            <td><Botao id={'one'} valor={'1'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'two'} valor={'2'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'three'} valor={'3'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td rowSpan={2}><Botao id={'equals'} valor={'='} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'equals'}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><Botao id={'zero'} valor={'0'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                            <td><Botao id={'decimal'} valor={'.'} formulaDisplay={formulaDisplay} setFormulaDisplay={setFormulaDisplay} botoesPressionados={botoesPressionados} setBotoesPressionados={setBotoesPressionados} setDecimal={setDecimal} decimal={decimal} zeroAntesDoPonto={zeroAntesDoPonto} setZeroAntesDoPonto={setZeroAntesDoPonto} botaoIgual={botaoIgual} setBotaoIgual={setBotaoIgual} class={'number'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}