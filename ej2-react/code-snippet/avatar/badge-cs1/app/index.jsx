import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';

function ReactApp() {
    return (<div>
        <div className="sample_container avatar-badge">
            <div className="avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        <div className="avatar-sub-block">
                            {/* xSmall Avatar */}
                            <div className="e-avatar e-avatar-xsmall">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">6</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* Small Avatar */}
                            <div className="e-avatar e-avatar-small">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">12</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* Avatar */}
                            <div className="e-avatar">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification">46</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* Large Avatar */}
                            <div className="e-avatar e-avatar-large">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification">82</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* xLarge Avatar */}
                            <div className="e-avatar e-avatar-xlarge">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification">99+</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circleAvatar avatar-block">
                {/* Card Component  */}
                <div className="e-card e-avatar-showcase">
                    <div className="e-card-content">
                        <div className="avatar-sub-block">
                            {/* xSmall Circle Avatar */}
                            <div className="e-avatar e-avatar-circle e-avatar-xsmall">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">6</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* Small Circle Avatar */}
                            <div className="e-avatar e-avatar-circle e-avatar-small">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification e-badge-circle">12</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* Circle Avatar */}
                            <div className="e-avatar e-avatar-circle">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification">46</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* Large Circle Avatar */}
                            <div className="e-avatar e-avatar-circle e-avatar-large">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification">82</span>
                        </div>
                        <div className="avatar-sub-block">
                            {/* xLarge Circle Avatar */}
                            <div className="e-avatar e-avatar-circle e-avatar-xlarge">
                                <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="profile_pic"/>
                            </div>
                            {/* Notification Badge  */}
                            <span className="e-badge e-badge-primary e-badge-overlap e-badge-notification">99+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default ReactApp;
ReactDOM.render(<ReactApp />, document.getElementById("element"));
