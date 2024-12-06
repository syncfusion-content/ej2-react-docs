{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import './index.css';
function App() {
    // Datasource for listview, badge field is the class data for Badges
    let dataSource = [
        { id: 'p_01', text: 'Primary', messages: '3 New', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },
        { id: 'p_02', text: 'Social', messages: '27 New', badge: 'e-badge e-badge-secondary', icons: 'social', type: 'Primary' },
        { id: 'p_03', text: 'Promotions', messages: '7 New', badge: 'e-badge e-badge-success', icons: 'promotion', type: 'Primary' },
        { id: 'p_04', text: 'Updates', messages: '13 New', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },
        { id: 'p_05', text: 'Starred', messages: '', badge: '', icons: 'starred', type: 'All Labels' },
        { id: 'p_06', text: 'Important', messages: '2 New', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },
        { id: 'p_07', text: 'Sent', messages: '', badge: '', icons: 'sent', type: 'All Labels' },
        { id: 'p_08', text: 'Outbox', messages: '', badge: '', icons: 'outbox', type: 'All Labels' },
        { id: 'p_09', text: 'Drafts', messages: '7 New', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' },
    ];
    // Map fields
    let fields = { groupBy: 'type' };
    // Assign template
    function template(data) {
        return (<div className='listWrapper' style={{ width: 'inherit', height: 'inherit' }}>
                <span className={`${data.icons} list_svg`}>&nbsp;</span>
                <span className='list_text'>{data.text}</span>
                <span className={`${data.badge}`} style={{ float: 'right', marginTop: '16px', fontSize: '12px' }}>{data.messages}</span>
            </div>);
    }
    function onActionComplete() {
        let list = document.getElementById('lists').getElementsByClassName('e-list-group-item')[0];
        list.style.display = 'none';
    }
    return (<div className="sample_container badge-list">
            {/* Listview element */}
            <ListViewComponent id="lists" dataSource={dataSource} fields={fields} headerTitle='Inbox' showHeader={true} template={template} actionComplete={onActionComplete.bind(this)}></ListViewComponent>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
{% endraw %}