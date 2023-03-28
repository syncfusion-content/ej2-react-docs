{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
function ReactApp() {
    let dataSource = [
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-xsmall' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-small' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-large' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-xlarge' }
    ];
    return (<div className='control-pane'>
            <div className="sample_container avatar-badge">
                <div className="avatar-block">
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {dataSource.map(function (item) {
            return (<div className={`e-avatar e-avatar-circle ${item.size}`} style={{ backgroundImage: `url(${item.src})` }}></div>);
        })}
                        </div>
                        <div className="e-card-content">
                            <div>Using <code>background-image</code> property</div>
                        </div>
                    </div>
                </div>

                <div className="circleAvatar avatar-block">
                    <div className="e-card e-avatar-showcase">
                        <div className="e-card-content">
                            {dataSource.map(function (item) {
            return (<div className={`e-avatar e-avatar-circle ${item.size}`}>
                                    <img src={item.src}/>
                                </div>);
        })}
                        </div>
                        <div className="e-card-content">
                            <div>Using <code>img</code> tag</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default ReactApp;
ReactDOM.render(<ReactApp />, document.getElementById("element"));
{% endraw %}