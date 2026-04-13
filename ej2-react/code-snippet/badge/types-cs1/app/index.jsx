import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
function App() {
    return (<div className="sample_container">
        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <div>
                        <span className="e-badge e-badge-primary">Primary</span>
                    </div>
                </div>
                <div className="e-card-content">
                    <div>
                        <code>.e-badge-primary</code>
                    </div>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-secondary">Secondary</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-secondary</code>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-success">Success</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-success</code>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-danger">Danger</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-danger</code>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-warning">Warning</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-warning</code>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-info">Info</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-info</code>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-light">Light</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-light</code>
                </div>
            </div>
        </div>

        <div className="block">
            <div className="e-card e-badge-showcase">
                <div className="e-card-content">
                    <span className="e-badge e-badge-dark">Dark</span>
                </div>
                <div className="e-card-content">
                    <code>.e-badge-dark</code>
                </div>
            </div>
        </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
