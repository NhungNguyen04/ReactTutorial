
// props = read-only properties that are shared between components.
//          A parent component an send data to a child component
//          <Component key=value/>


import Student from './Student.jsx'
function App() {
  
  return(
    <div>
      <Student name="Timothee Chalamet" age={30} isStudent={false}/>
      <Student name="Harry Potter" age={15} isStudent={true}/>
      <Student name="Nhung Ne" age={20} isStudent={true}/>
      <Student/>
    </div>
  )
}

export default App
