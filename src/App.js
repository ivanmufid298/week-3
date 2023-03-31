import React from 'react'
import Counter from './components/counter/Counter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import List from './components/list/List'


export default function App() {
  return (
    <div>
      <React.Fragment>
        <table>
          <List />
        </table>
      </React.Fragment>
         {/* <Router>
             <Routes>
                 <Route exact path='/' element={<Counter/> } />
                 <React.Fragment>
                  <table>
                    <Route path='/list' element={<List />} />
                  </table>
                 </React.Fragment>
             </Routes>
         </Router> */}
    </div>
  )
}
