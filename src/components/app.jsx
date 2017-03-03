import React from 'react';
//import Header from '../src/components/header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {    
    return (
      <MuiThemeProvider>
        <div>           
            <p>App Start!</p>
        </div>   
      </MuiThemeProvider>  
    );
  }
}

export default App;