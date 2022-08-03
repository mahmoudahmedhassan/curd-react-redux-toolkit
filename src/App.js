import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Inputs from './Components/inputs/Inputs';
import Header from './Components/header/Header';
import ListItems from './Components/items/ListItems';
import Hey from './test/hey'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
      <Inputs/>
      <ListItems/>
      <Hey/>
     </div>
  );
}

export default App;
