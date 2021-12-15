import BasicForm from '../components/BasicForm';
import SimpleInput from '../components/SimpleInput';
import styles from './app.module.css';

export function App() {
  return (
    <div className="app">
      <div className="form">
        <SimpleInput />
      </div>
      <div className="form">
        <BasicForm />
      </div>
    </div>
  );
}

export default App;
