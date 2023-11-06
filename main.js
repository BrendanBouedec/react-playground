
const lastName = "bouedec";
const firstName = "brendan";
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="name">{lastName.toUpperCase()}</span></h1>;
ReactDOM.render(helloWorld, document.querySelector('#app'));