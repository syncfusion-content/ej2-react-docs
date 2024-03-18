import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextArea.
function App() {
    return (
        <div className='wrap'>
            <h4> Small Size </h4>

            <div className="e-input-group e-small">
                <textarea className="e-input" placeholder="Enter your comments" onFocus={floatFocus} onBlur={floatBlur}></textarea>
            </div>

            <h4> Bigger Size </h4>

            <div className="e-input-group e-bigger">
                <textarea className="e-input" placeholder="Enter your comments" onFocus={floatFocus} onBlur={floatBlur}></textarea>
            </div>
        </div>
    );
}

function floatFocus(args) {
    args.target.parentElement.classList.add("e-input-focus");
}

function floatBlur(args) {
    args.target.parentElement.classList.remove('e-input-focus');
}

export default App;
ReactDom.render(<App />, document.getElementById('input-container'));
