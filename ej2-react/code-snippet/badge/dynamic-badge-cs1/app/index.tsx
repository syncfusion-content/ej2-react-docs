{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

interface IBadgeValuesProps {
    BadgeType: string;
    BadgeContent: string;
}
function BadgePortable(props:IBadgeValuesProps) {
    return (
        <span className={props.BadgeType}
            style={{ float: 'right', marginTop: '16px', fontSize: '12px' }}>{props.BadgeContent} New
        </span>
    );
}
interface IBadgeValues {
    Primary: number;
    Social: number;
    Promotions: number;
    Updates: number;
    Important: number;
    Drafts: number;
}
function App(props:IBadgeValues) {
    // Datasource for listview, badge field is the class data for Badges
    let dataSource: { [key: string]: Object }[] = [
        { id: 'p_01', text: 'Primary', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },
        { id: 'p_02', text: 'Social', badge: 'e-badge e-badge-secondary', icons: 'social', type: 'Primary' },
        { id: 'p_03', text: 'Promotions', badge: 'e-badge e-badge-success', icons: 'promotion', type: 'Primary' },
        { id: 'p_04', text: 'Updates', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },
        { id: 'p_05', text: 'Starred', badge: '', icons: 'starred', type: 'All Labels' },
        { id: 'p_06', text: 'Important', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },
        { id: 'p_07', text: 'Sent', badge: '', icons: 'sent', type: 'All Labels' },
        { id: 'p_08', text: 'Outbox', badge: '', icons: 'outbox', type: 'All Labels' },
        { id: 'p_09', text: 'Drafts', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' },
    ];
    // Map fields
    let fields: object = { groupBy: 'type' };
    let Values = {
    Primary: 3,
    Social: 27,
    Promotions: 7,
    Updates: 13,
    Drafts: 7,
    Important: 2
    };
    function listTemplate(data: any): JSX.Element {
        return (
            <div className='listWrapper' style={{ width: 'inherit', height: 'inherit' }}>
                <span className={`${data.icons} list_svg`}>&nbsp;</span>
                <span className='list_text'>{data.text}</span>
                {
                    data.badge !== '' ?
                        <BadgePortable BadgeContent={Values[data.text]} BadgeType={data.badge} /> : ''
                }
            </div>
        );
    }

    function onClick(): void {
          let badgeElements = Array.prototype.slice.call(document.getElementById('lists').getElementsByClassName('e-badge'));
          badgeElements.forEach((element) => {
          element.textContent = (Number(element.textContent.split(' ')[0])) + 1 + ' New';
        })
    }
    return (
        <div className="sample_container badge-list">
            {/* Listview element */}
            <ListViewComponent id="lists" dataSource={dataSource} fields={fields} headerTitle='Inbox' showHeader={true} template={listTemplate.bind(this) as any}></ListViewComponent>
            <p className='crossline'></p>
            <span className='incr_button'>
                <button className='e-btn e-primary' onClick={onClick.bind(this)}>Increment Badge Count</button>
            </span>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));


{% endraw %}