const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WordChainGame = require('./WordChainGame');

const Hot = hot(WordChainGame);

ReactDom.render(<Hot />, document.querySelector('#root'));