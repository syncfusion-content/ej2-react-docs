import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { Ajax } from '@syncfusion/ej2-base';
function App(props) {
    // define the array of data
    let headertext;
    headertext = [{ text: "Twitter" }, { text: "Facebook" }, { text: "WhatsApp" }];
    return (<TabComponent heightAdjustMode='Auto' id='tabelement'>
      <TabItemsDirective>
        <TabItemDirective header={headertext[0]} content={'Twitter is an online social networking service that enables users to send and read short 140-character ' +
            'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
            'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
            'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
            'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
            'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
            'search queries per day.'}/>
        <TabItemDirective header={headertext[1]} content={'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
            'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
            'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\' ' +
            'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
            'University. It gradually added support for students at various other universities and later to high-school students.'}/>
        <TabItemDirective header={headertext[2]} content={props.data}/>
      </TabItemsDirective>
    </TabComponent>);
}
let ajax = new Ajax('./ajax.html', 'GET', true);
ajax.send().then();
ajax.onSuccess = (dataSt) => {
    const root = ReactDOM.createRoot(document.getElementById('element'));
    root.render(<App data={dataSt}/>);
};
