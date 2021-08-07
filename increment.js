console.log(React);
console.log(ReactDOM);

const domCont = document.querySelector("#root");

// JSx
const IncrementComponent = () => {
    const[counter, setCounter] = React.useState(0);
    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick = { ()=> setCounter(counter+1)}>
                    Increment+
                </button>
            </div>
        </div>
    )
}
//ReactDOM.render(<IncrementComponent/>, domCont);
ReactDOM.render(
    <div className = "container">
    <IncrementComponent/>
    <IncrementComponent/>
    </div>, domCont);