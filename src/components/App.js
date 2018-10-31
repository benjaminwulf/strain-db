import React from 'react';
import Search from './Search';
import Header from './Header';
import Description from './Description';

class App extends React.Component {
    render() {
        return (
            <div className="strain-of-the-day">
               <div className="menu">
               <Header />
               <Search />
               </div>
            </div>
        );
    }
}

export default App