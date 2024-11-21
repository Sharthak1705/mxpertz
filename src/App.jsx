import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from './components/Page'
import StoryDetails from './components/storydata/StoryDetails';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
    <Route path="/" element={<Page />} />
    <Route path='/details/:id' element={<StoryDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
