import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import blob from "./assets/blob.jpg"
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/home" element={<Dashboard />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
