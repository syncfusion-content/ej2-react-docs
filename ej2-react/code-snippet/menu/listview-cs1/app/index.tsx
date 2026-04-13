

import { Animation, enableRipple } from '@syncfusion/ej2-base';
import { ListViewComponent, SelectEventArgs } from '@syncfusion/ej2-react-lists';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let listObj: ListViewComponent;
    let listViewDisplay: any = { display: 'none' };
    let closeSpanDisplay: any = { display: 'none' };
    let dataSource: Array<{ [key: string]: any }> = [
        {
            child: [
            {
                child: [
                    { id: 'list1_1_1', text: 'Electric Cookers' },
                    { id: 'list1_1_2', text: 'Coffee Makers' },
                    { id: 'list1_1_3', text: 'Blenders' },
                ],
                id: 'list1_1',
                text: 'Kitchen'
            },
            {
                child: [
                    { id: 'list1_2_1', text: 'Fully Automatic' },
                    { id: 'list1_2_2', text: 'Semi Automatic' }
                ],
                id: 'list1_2',
                text: 'Washing Machine'
            },
            {
                child: [
                    { id: 'list1_3_1', text: 'Inverter ACs' },
                    { id: 'list1_3_2', text: 'Split ACs' },
                    { id: 'list1_3_3', text: 'Window ACs' },
                ],
                id: 'list1_3',
                text: 'Air Conditioners'
            }],
            id: 'list1',
            text: 'Appliances'
        },
        {
            child: [
            {
                child: [
                    { id: 'list2_1_1', text: 'Headphones' },
                    { id: 'list2_1_2', text: 'Memory Cards' },
                    { id: 'list2_1_3', text: 'Power Banks' }
                ],
                id: 'list2_1',
                text: 'Mobile'
            },
            {
                child: [
                    { id: 'list2_2_1', text: 'Pendrives' },
                    { id: 'list2_2_2', text: 'External Hard Disks' },
                    { id: 'list2_2_3', text: 'Monitors' }
                ],
                id: 'list2_2',
                text: 'Computer'
            }],
            id: 'list2',
            text: 'Accessories'
        },
        {
            child: [
                { id: 'list3_1', text: 'Men' },
                { id: 'list3_2', text: 'Women' }
            ],
            id: 'list3',
            text: 'Fashion'
        },
        {
            child: [
                { id: 'list4_1', text: 'Furniture' },
                { id: 'list4_2', text: 'Decor' }
            ],
            id: 'list4',
            text: 'Home & Living'
        },
        {
            child: [
                { id: 'list5_1', text: 'Televisions' },
                { id: 'list5_2', text: 'Home Theatres' },
                { id: 'list5_3', text: 'Gaming Laptops' }
            ],
            id: 'list5',
            text: 'Entertainment'
        }
    ];

    function onSelect(e: SelectEventArgs): void {
        if (e.data && !(e.data as { child: object }).child) {
            listViewDisplay = { display: 'none' };
            closeSpanDisplay = { display: 'none' };
            listObj.refresh();
        }
    }

    function onClick(): void {
        listViewDisplay = { display: 'none' };
        closeSpanDisplay = { display: 'none' };
    }

    function hamburgerClick(): void {
        const animation = new Animation({ duration: 500 });
        animation.animate(listObj.element, {
            begin: () => {
                listViewDisplay = { display: 'block' };
                closeSpanDisplay = { display: 'block' };
            },
            name: 'SlideDown'
        });
    }

    return (
        <div className='layoutWrapper'>
            <div className='speaker'>
                <div className='camera'/>
            </div>
            <div className='layout'>
                <div id='container'>
                    <div id='header'>
                        <span id='hamburger' onClick={hamburgerClick} className='e-icons menu default'/>
                        <div className='content'>Header</div>
                    </div>
                    <ListViewComponent id='listview' ref={scope => listObj = scope as ListViewComponent} dataSource={dataSource} showHeader={true} headerTitle='Menu' select={onSelect}/>
                    <span id='close' onClick={onClick} className='e-icons' style={closeSpanDisplay}/>
                </div>
            </div>
            <div className='outerButton'/>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


