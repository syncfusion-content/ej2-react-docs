import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<div>
            <div className="block">
                <div className="badge-block">
                    <div className="firefox svg_icons"></div>
                    {/* Warning Colored Notification Badge*/}
                    <span className="e-badge e-badge-warning e-badge-notification e-badge-overlap leftTop">99+</span>
                </div>

                <div className="badge-block">
                    <div className="facebook svg_icons"></div>
                    {/* Danger Colored Notification Badge*/}
                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap leftTop">99+</span>
                </div>

                <div className="badge-block">
                    <div className="skype svg_icons"></div>
                    {/* Secondary Colored Notification Badge*/}
                    <span className="e-badge e-badge-secondary e-badge-notification e-badge-overlap leftTop">18</span>
                </div>
            </div>
            <div className="badge-block">
                <div className="badge-block">
                    <div className="firefox svg_icons"></div>
                    {/* Warning Colored Notification Badge*/}
                    <span className="e-badge e-badge-warning e-badge-notification e-badge-overlap leftBottom">99+</span>
                </div>

                <div className="badge-block">
                    <div className="facebook svg_icons"></div>
                    {/* Danger Colored Notification Badge*/}
                    <span className="e-badge e-badge-danger e-badge-notification e-badge-overlap leftBottom">99+</span>
                </div>

                <div className="badge-block">
                    <div className="skype svg_icons"></div>
                    {/* Secondary Colored Notification Badge*/}
                    <span className="e-badge e-badge-secondary e-badge-notification e-badge-overlap leftBottom">18</span>
                </div>
            </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
