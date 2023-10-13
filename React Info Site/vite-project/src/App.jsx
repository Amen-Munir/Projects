
import './App.css'


function Main() {
  return (
    <nav>
        <img src="./images/react-logo.png" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
    </nav>
)
}
function Navbar()
{
  return (
    <main>
        <h1 className='main--title'>Fun facts about React</h1>
        <ul className="main--facts">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)
}
function App() {


  return (
    <>
      <Main />
      <Navbar />
    </>
  )
}

export default App
