// const helloWorld = React.createElement('h1', {}, 'Hello world!');


// // mauvaise pratique


// //ReactDOM.render(helloWorld, document.body);

const element = <h1>Hello world!</h1>
ReactDOM.render(element, document.querySelector('#app'));
