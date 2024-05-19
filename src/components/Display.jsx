export default function Display(props) {
    return (
        <div id="container-display">
            <p id="secondDisplay">{props.formulaDisplay}</p>
            <p id="display">{props.botoesPressionados}</p>
        </div>
    )
}