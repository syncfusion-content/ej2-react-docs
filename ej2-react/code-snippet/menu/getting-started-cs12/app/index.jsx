import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    // Menu items definition
    let menuItems = [
        {
            items: [
                { text: 'Washing Machine', url: 'https://www.google.com/search?q=washing+machine' },
                { text: 'Air Conditioners', url: 'https://www.google.com/search?q=air+conditioners' }
            ],
            text: 'Appliances'
        },
        {
            items: [
                { text: 'Headphones', url: 'https://www.google.com/search?q=headphones' },
                { text: 'Memory Cards', url: 'https://www.google.com/search?q=memory+cards' },
                { text: 'Power Banks', url: 'https://www.google.com/search?q=power+banks' }
            ],
            text: 'Mobile'
        },
        {
            items: [
                { text: 'Televisions', url: 'https://www.google.com/search?q=televisions' },
                { text: 'Home Theatres', url: 'https://www.google.com/search?q=home+theatres' },
                { text: 'Gaming Laptops', url: 'https://www.google.com/search?q=gaming+laptops' }
            ],
            text: 'Entertainment'
        },
        { text: 'Fashion', url: 'https://www.google.com/search?q=fashion' },
        { text: 'Offers', url: 'https://www.google.com/search?q=offers' }
    ];
    function beforeItemRender(args) {
        if (args.item.url) {
            args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
        }
    }
    return (<MenuComponent items={menuItems} beforeItemRender={beforeItemRender}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
