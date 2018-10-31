import React from 'react';
import Search from './Search';
import Header from './Header';
import Name from './Name';
import Description from './Description';

class App extends React.Component {
    render() {
        return (
            <div className="strain-of-the-day">
               <div className="menu">
               <Header />
               <Search />
               </div>
               <Name />
               <Description />
            </div>
        );
    }
}

export default App