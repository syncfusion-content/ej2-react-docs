import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let animation = {
        duration: 800,
        effect: 'FadeIn'
    };
    let menuItems = [
        {
            text: 'Show All Bookmarks'
        },
        {
            items: [
                {
                    items: [
                        {
                            text: 'Google'
                        },
                        {
                            text: 'Gmail'
                        }
                    ],
                    text: 'Most Visited'
                },
                {
                    text: 'Recently Added'
                }
            ],
            text: 'Bookmarks Toolbar'
        }
    ];
    return (<div className="container">
                <div id='target'>Right click / Touch hold to open the ContextMenu</div>
                <ContextMenuComponent id='contextmenu' target='#target' items={menuItems} animationSettings={animation}/>
            </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
