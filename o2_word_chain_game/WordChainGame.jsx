const React = require('react');
const { useState, useRef } = React;
// const { Component } = React;


// class WordChainGame extends Component {
const WordChainGame = () => {
  const [word, setWord] = useState('johnwoo');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
    // state = {
    //   word: 'johnwoo',
    //   value: '',
    //   result: '',
    // };

  const inputRef = useRef(null);

    // onSubmitForm = (e) => {
  const onSubmitForm = (e) => {
      e.preventDefault();

      // if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      if (word[word.length - 1] === value[0]) {

        // this.setState({
        //   result: 'Right!',
        //   word: this.state.value,
        //   value: '',
        // });
        setResult('Right!');
        setWord(value);
        setValue('');

        // this.input.focus();
        inputRef.current.focus();
      } else {
        
        // this.setState({
        //   result: 'Wrong!',
        //   value: '',
        // });
        setResult('Wrong!');
        setValue('');

        // this.input.focus();
        inputRef.current.focus();
      }
    };

    // onChangeInput = (e) => {
  const onChangeInput = (e) => {
      // this.setState({ value: e.currentTarget.value });
      setValue(e.target.value);
    };

    // input;

    // onRefInput = (c) => {
    //   this.input = c;
    // };


    // render() {
      return (
        <>
           {/* {this.state.word} */}
          <div>{word}</div>

                     {/* {this.onSubmitForm} */}
          <form onSubmit={onSubmitForm}>

               {/* ref={this.onRefInput} */}
            <input ref={inputRef} value={value} onChange={onChangeInput} />
            <button>Input!</button>
          </form>

           {/* {this.state.result} */}
          <div>{result}</div>
        </>
      )
    }
// }

module.exports = WordChainGame;