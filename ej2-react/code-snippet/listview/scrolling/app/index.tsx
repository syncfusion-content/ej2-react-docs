


import React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import '././index.css';

function App() {
  let listviewInstance: ListViewComponent | null = null;
  let data: { text: string; positionClass: string; templateHeight?: string }[] = [{
    text: "Hi Guys, Good morning! \uD83D\uDE0A, I'm very delighted to share with you the news that our team is going to launch a new mobile application",
    positionClass: 'right',
  }, {
    text: "Oh! That's great \uD83D\uDE42",
    positionClass: 'left',
  },
  {
    text: 'That is a good news \uD83D\uDE00',
    templateHeight: '80px',
    positionClass: 'right',
  },
  {
    text: 'What kind of application we are gonna launch? \uD83E\uDD14',
    positionClass: 'left',
  },
  {
    text: 'A kind of "Emergency Broadcast App" like being able to just invite someone to teams without it impacting how many people have official access',
    positionClass: 'right',
  },
  {
    text: 'Who will be the client users for our applications? ',
    positionClass: 'left',
  },
  {
    text: 'Is currently the only way to invite someone through 0365? Just wondering down the road how organization would want to handle that with freelancers, like being able to just invite someone to teams without it impacting how many people have official access \uD83D\uDE14',
    positionClass: 'right',
  },
  {
    text: 'Yes, however, that feature of inviting someone from outside your organization is planned - expected closer to GA next year \uD83D\uDC4D',
    positionClass: 'left',
  },
  {
    text: 'I guess we should switch things over to hear for a while. How long does the trial last? \uD83E\uDD14',
    positionClass: 'right',
  },
  { text: 'I think the trial is 30 days. \uD83D\uDE03', positionClass: 'left' },
  {
    text: 'Only 0365 only members of your organization. They said that they are listening to customer feedback and hinted that guest users would be brought in down the road \uD83D\uDE09',
    positionClass: 'right',
  },
  { text: 'Cool thanks! \uD83D\uDC4C', positionClass: 'left' }
  ];
  function listTemplate(data: any): JSX.Element {
    const wrapperClass = `e-list-wrapper e-list-multi-line${data.positionClass === 'right' ? ' e-list-wrapper-right' : ''}`;
    return (
      <div className={ wrapperClass }>
        <span className="e-list-item-header text-span">
          {data.text }
        </span>
      </div>
    );
  }
  let itemsRendered = 7;
  let itemPerScroll = 5;
  let result: { text: string; positionClass: string; templateHeight?: string }[] = [];
  const onListScrolled = (args:any) => {
    if (args.scrollDirection === 'Bottom' && args.distanceY < 100) {
      if (itemsRendered < data.length) {
        const startIndex = itemsRendered;
        const endIndex = Math.min(itemsRendered + itemPerScroll, data.length);
        result = data.slice(startIndex, endIndex) as  { text: string; positionClass: string; templateHeight?: string }[];
        listviewInstance?.addItem(result);
        itemsRendered = endIndex;
      }
    }
  }
  return (
    <div className="grid-container"><div><h3>Chat</h3>
      <ListViewComponent id='list' dataSource={data.slice(0, itemsRendered)} height= "320px"
    width= "400px" template={listTemplate.bind(this) as any} cssClass='e-list-template' scroll={onListScrolled.bind(this) as any} ref={scope => { listviewInstance = scope;}}></ListViewComponent>
    </div></div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


