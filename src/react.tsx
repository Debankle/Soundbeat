import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Playbar from './playbar';
import Header from './header';
import Sidebar from './sidebar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Playbar />
                <Sidebar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));