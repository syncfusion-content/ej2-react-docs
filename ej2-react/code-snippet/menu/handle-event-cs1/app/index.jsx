{% raw %}
import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { useState } from "react";
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let menuItems = [
        {
            items: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ],
            text: 'Events'
        },
        {
            items: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ],
            text: 'Movies'
        },
        {
            items: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ],
            text: 'Directory'
        },
        {
            items: [
                { text: 'Our Policy' },
                { text: 'Site Map' }
            ],
            text: 'Queries'
        },
        { text: 'Services' }
    ];
    const [state, setState] = useState({
        eventTrace: ''
    });
    function beforeOpen(args) {
        updateEventLog(args);
    }
    function beforeClose(args) {
        updateEventLog(args);
    }
    function onClose(args) {
        updateEventLog(args);
    }
    function onOpen(args) {
        updateEventLog(args);
    }
    function select(args) {
        updateEventLog(args);
    }
    function updateEventLog(args) {
        setState({ eventTrace: state.eventTrace + args.name + ' Event triggered. <br />' });
    }
    function btnClick() {
        setState({ eventTrace: '' });
    }
    return (<div className='control-section'>
            <div className='menu-section'>
                <MenuComponent id='menu' items={menuItems} beforeOpen={beforeOpen} beforeClose={beforeClose} onClose={onClose} onOpen={onOpen} select={select}/>
            </div>
            <div className='property-section'>
                <table id='propertyTable' title='Event trace'>
                    <tbody>
                        <th>Event trace:-</th>
                        <tr>
                            <td dangerouslySetInnerHTML={{ __html: state.eventTrace }}/>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ButtonComponent id='clear' cssClass='e-small' content='Clear' onClick={btnClick}/>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
{% endraw %}