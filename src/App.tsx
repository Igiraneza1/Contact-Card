// App.tsx or App.jsx

import './App.css';

import ContactCard from './omponents/usercard/UserCard';
function App() {
  return (
    <div className="App">
      <ContactCard name="Adeline" email="igiranezaadeline@gmail.com" phone="+250780000000" />
    </div>
  );
}

export default App;
