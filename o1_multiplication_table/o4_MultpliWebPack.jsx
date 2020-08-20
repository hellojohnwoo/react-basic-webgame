const React = require('react');
const { useState, useRef } = React;

const o4_MulitpliWebPack = () => {       // Destructuring assignment
    const [ firstNumber, setFirstNumber ] = useState(Math.ceil(Math.random() * 9));
    const [ secondNumber, setSecondNumber ] = useState(Math.ceil(Math.random() * 9));
    const [ value, setValue ] = useState('');
    const [ result, setResult ] = useState('');
    const inputEl = useRef(null);

    const onSubmitForm  = (e) => {
        e.preventDefault();
        if (parseInt(value) === firstNumber * secondNumber) {
            setResult('Right Answer :' + value);
            setFirstNumber(Math.ceil(Math.random() * 9));
            setSecondNumber(Math.ceil(Math.random() * 9));
            setValue('');
            inputEl.current.focus();
        } else  {
            setResult('Wrong Answer : ' + value);
            setValue('');
            inputEl.current.focus();
        }
    };

    return (
        <>
            <div>{firstNumber} X {secondNumber} = ?</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button>Input Number</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
}

module.exports = o4_MulitpliWebPack;