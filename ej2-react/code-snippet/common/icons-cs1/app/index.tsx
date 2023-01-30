
    
    import * as React from 'react';
    import * as ReactDom from 'react-dom';
    function App() {
        return (
            <div className="icon-bar">
               <span className="e-icons e-cut"></span>
               <span className="e-icons e-copy"></span>
               <span className="e-icons e-paste"></span>
            </div>
        );
    }
    export default App;
    ReactDom.render(<App />,document.getElementById('sample'));
    

    