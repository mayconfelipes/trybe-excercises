import './App.css';

const compromissos = ['Escovar os dentes', 'Tomar Banho', 'Tomar café', 'Fazer exercícios', 'Meditar', 'Ler', 'Estudar'];

function App() {
  return (
    compromissos.map(function(item){
      return <li>{item}</li>
    })
  );
}

export default App;
