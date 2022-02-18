import './App.css';
import SignUp from './Signup'
import {AuthProvider} from '../contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
    <div className="container">

      <SignUp/>

    </div>

    </AuthProvider>
  );
}

export default App;
