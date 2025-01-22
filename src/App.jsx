import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import DetailView from './pages/DetailView';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailView />} />
      </Routes>
    </div>
  )
}

export default App
