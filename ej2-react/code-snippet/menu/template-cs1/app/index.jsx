{% raw %}
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(false);
function App() {
    // Menu fields definition
    let menuFields = {
        children: ['options'],
        text: ['category', 'value']
    };
    // Menu data definition
    let data = [
        {
            category: 'Products',
            options: [
                { value: 'JavaScript', url: 'javascript' },
                { value: 'Angular', url: 'angular' },
                { value: 'ASP.NET Core', url: 'core' },
                { value: 'ASP.NET MVC', url: 'mvc' }
            ]
        },
        {
            category: 'Services',
            options: [
                {
                    support: [
                        { id: 1, count: '1200+', value: 'Application Development' },
                        { id: 2, count: '3700+', value: 'Maintenance & Support' },
                        { id: 3, value: 'Quality Assurance' },
                        { id: 4, count: '900+', value: 'Cloud Integration' }
                    ]
                }
            ]
        },
        {
            category: 'About Us',
            options: [
                {
                    about: {
                        value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                    }
                }
            ]
        },
        { category: 'Careers' },
        { category: 'Sign In' }
    ];
    function menuTemplate(data) {
        return (data.category ? <span>{data.category}</span> :
            (data.value && data.url) ?
                <div className='e-avatar e-avatar-small image' style={{ backgroundImage: 'url(https://ej2.syncfusion.com/react/demos/src/menu/images/' + data.url + '.png)' }}>{data.value}</div> :
                data.support ?
                    <ul>
                            {data.support.map((supp) => <li key={supp.id}>
                                    {supp.value}
                                    {supp.count ? <span className='e-badge e-badge-success'>{supp.count}</span> : ""}
                                </li>)}
                        </ul> :
                    <div tabIndex={0} className="e-card">
                            <div className="e-card-header">
                                <div className="e-card-header-caption">
                                    <div className="e-card-header-title">About Us</div>
                                </div>
                            </div>
                            <div className="e-card-content">
                                {data.about.value}
                            </div>
                            <div className="e-card-actions">
                                <button className="e-btn e-outline">
                                    Read More
                    </button>
                            </div>
                        </div>);
    }
    return (<div className="menu-section">
            <MenuComponent items={data} fields={menuFields} template={menuTemplate}/>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
{% endraw %}