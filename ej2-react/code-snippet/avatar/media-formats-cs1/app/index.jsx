import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
function ReactApp() {
    return (<div>
        <div className="sample_container avatar-types">
            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        {/* XLarge Circle Avatar Component  */}
                        <div className="e-avatar e-avatar-xlarge e-avatar-circle">
                                <img className="image" src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="avatar"/>
                            </div>
                    </div>
                    <div className="e-card-content">
                        <div>Image</div>
                    </div>
                </div>
            </div>

            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        {/* XLarge Circle Avatar Component  */}
                        <div className="e-avatar e-avatar-xlarge e-avatar-circle">
                            <div className="svg_icons chrome"></div>
                        </div>
                    </div>
                    <div className="e-card-content">
                        <div>SVG</div>
                    </div>
                </div>
            </div>

            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        {/* XLarge Circle Avatar Component  */}
                        <div className="e-avatar e-avatar-xlarge e-avatar-circle">GR</div>
                    </div>
                    <div className="e-card-content">
                        <div>Initial</div>
                    </div>
                </div>
            </div>

            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        {/* XLarge Circle Avatar Component  */}
                        <div className="e-avatar e-avatar-xlarge e-avatar-circle">
                            <div className="e-people icons"></div>
                        </div>
                    </div>
                    <div className="e-card-content">
                        <div>Font Icon</div>
                    </div>
                </div>
            </div>

            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        {/* XLarge Circle Avatar Component  */}
                        <div className="e-avatar e-avatar-xlarge e-avatar-circle">User</div>
                    </div>
                    <div className="e-card-content">
                        <div>Word</div>
                    </div>
                </div>
            </div>

            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        {/* XLarge Circle Avatar Component  */}
                        <div className="e-avatar e-avatar-xlarge e-avatar-circle custom">
                            <div className="e-people icons"></div>
                        </div>
                    </div>
                    <div className="e-card-content">
                        <div>Custom</div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default ReactApp;
ReactDOM.render(<ReactApp />, document.getElementById("element"));
