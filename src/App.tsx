import './App.css'

function App() {
  return (
    <div>
      <div>Node {window.versions.node()}</div>
      <div>Node {window.versions.chrome()}</div>
      <div>Node {window.versions.electron()}</div>
    </div>
  )
}

export default App
