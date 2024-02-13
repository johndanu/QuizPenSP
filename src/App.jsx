import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";
import SubjectsView from './pages/subjects-view';
import SingleQuestionView from './pages/singleQuestion-view';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/subjects' element={<SubjectsView/>}/>
        <Route path='/questions' element={<SingleQuestionView/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
