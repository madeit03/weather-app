import './App.css'
import Header from './components/main';
import Hello from './components/hello';
import Overalay from './components/overlay'

const App = () => {
    return (
        <div className="app">
            <Overalay />
            <Header />
            <Hello />
        </div>
    )
}

export default App;






