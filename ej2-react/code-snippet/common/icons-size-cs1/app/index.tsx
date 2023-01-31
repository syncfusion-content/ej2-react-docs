
    
    import * as React from 'react';
    import * as ReactDom from 'react-dom';

    function App() {
        return (
            <div>
                <p><b>Smaller Icons</b></p>
                <div className="small-icon-bar">
                    <span className="e-icons e-small e-cut"></span>
                    <span className="e-icons e-small e-copy"></span>
                    <span className="e-icons e-small e-paste"></span>
                </div>
                <p><b>Medium Icons</b></p>
                <div className="medium-icon-bar">
                    <span className="e-icons e-medium e-cut"></span>
                    <span className="e-icons e-medium e-copy"></span>
                    <span className="e-icons e-medium e-paste"></span>
                </div>
                <p><b>Larger Icons</b></p>
                <div className="large-icon-bar">
                    <span className="e-icons e-large e-cut"></span>
                    <span className="e-icons e-large e-copy"></span>
                    <span className="e-icons e-large e-paste"></span>
                </div>
            </div>
        );
    }
    export default App;
    ReactDom.render(<App />,document.getElementById('sample'));
    

    