import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryDetails from './components/StoryDetails'

import Page from './components/Page'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
    <Route path="/" element={<Page />} />
    <Route path="/story/:id" element={<StoryDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
