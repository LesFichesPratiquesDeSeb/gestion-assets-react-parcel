import {React} from 'react';
import  {render} from 'react-dom';
const app = document.getElementById('app');

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>

            <img src="image.jpg" alt="image" />
        </div>
    )
}

render(<App />, app)