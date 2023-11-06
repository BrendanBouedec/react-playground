//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';
function Firstname(props) {
    return <span className="firstname">{firstName}</span>
}
function Lastname(props) {
    return <span className="lastname red-text">{lastName}</span>
}
// Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;

// function HelloWorld() {
//     const name = {
//         firstName: "brendan",
//         lastName: "bouedec"
//     }

//     return <h1><span className="firstname">{name.firstName}</span> <span className="lastname red-text">{name.lastName}</span></h1>;
// }

/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */
ReactDOM.render(<React.Fragment><Firstname /> <Lastname /></React.Fragment>, document.querySelector('#app'));
