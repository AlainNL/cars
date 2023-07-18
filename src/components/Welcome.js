const Welcome = () => {
  const bonjour = () => {
    console.log('bonjour')
  }

  const bonsoir = (Bonsoir) => {
    console.log(Bonsoir)
  }
  return (
    <div>
      {
        <button onClick={bonjour}>Invoyer une fonction avec Bonjour</button>

      }
      {
        <button onClick={() => bonsoir('Bonsoir')}> Invoyer une fonction avec arg 'Bonsoir'</button>
      }
      {
        <button onClick={() => console.log("Bonne nuit")}>Bonne nuit</button>
      }
    </div>
  )
}

export default Welcome
