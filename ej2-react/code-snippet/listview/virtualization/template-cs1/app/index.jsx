import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent, Inject, Virtualization } from '@syncfusion/ej2-react-lists';
function App() {
    // define the array of Json
    let listData;
    listData = [
        { name: 'Nancy', icon: 'N', id: '0', },
        { name: 'Andrew', icon: 'A', id: '1' },
        { name: 'Janet', icon: 'J', id: '2' },
        { name: 'Margaret', imgUrl: './margaret.png', id: '3' },
        { name: 'Steven', icon: 'S', id: '4' },
        { name: 'Laura', imgUrl: './laura.png', id: '5' },
        { name: 'Robert', icon: 'R', id: '6' },
        { name: 'Michael', icon: 'M', id: '7' },
        { name: 'Albert', imgUrl: './albert.png', id: '8' },
        { name: 'Nolan', icon: 'N', id: '9' }
    ];
    for (let i = 10; i <= 1010; i++) {
        let index = parseInt((Math.random() * 10).toString());
        listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
    }
    let template = '<div class="list-container"><div id="icon" class="${$imgUrl ? \'img\' : $icon }">' +
        '<span class="${$imgUrl ? \'hideUI\' : \'showUI\' }"> ${icon}</span>' +
        '<img class="${$imgUrl ? \'showUI\' : \'hideUI\' }" width = 45 height = 45 src="${$imgUrl ?  $imgUrl : \' \' }" /></div><div class="name">${name}</div></div>';
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='ui-list' dataSource={listData} enableVirtualization={true} template={template} height={500} headerTitle="contacts" showHeader={true}>
            <Inject services={[Virtualization]}/>
        </ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
