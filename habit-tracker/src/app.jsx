import './app.css';



function App() {

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName : 'yun',
    lastName : 'younu'
  }
  

  const name = 'younu';
  return (

    <>
      <h1>hello {formatName(user)}</h1>
      <h1>hello {name}</h1>
      <h1>ntm</h1>
      {
        name && <h1>hello {name}</h1>
      }
      {
        ['🐶','🐭'].map(item => (
          <h1>{item}</h1>
        ))
      }
    </>
  );
}

export default App;
