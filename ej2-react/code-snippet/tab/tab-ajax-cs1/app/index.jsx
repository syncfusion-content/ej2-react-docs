import * as React from "react";
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-react-navigations';

function App() {
  const [headerText, setHeaderText] = useState([
    { text: "Twitter" },
    { text: "Facebook" },
    { text: "WhatsApp" }
  ]);
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./ajax.html');
      const data = await response.text();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <TabComponent heightAdjustMode='Auto' id='tabelement'>
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]}
          content={'Twitter is an online social networking service that enables users to send and read short 140-character ' +
            'messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read ' +
            'them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San ' +
            'Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, ' +
            'Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, ' +
            'with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion ' +
            'search queries per day.'} />
        <TabItemDirective header={headerText[1]}
          content={'Facebook is an online social networking service headquartered in Menlo Park, California. Its website was ' +
            'launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo ' +
            'Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\' ' +
            'membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford ' +
            'University. It gradually added support for students at various other universities and later to high-school students.'} />
        <TabItemDirective header={headerText[2]} content={data} />
      </TabItemsDirective>
    </TabComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);