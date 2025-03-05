{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { Browser } from '@syncfusion/ej2-base';
import './index.css';

function App() {
  function listTemplate(data) {
    return (<div className="settings">
      <div id="postContainer">
        <div id="postImg">
          <img src={data.image} />
        </div>
        <div id="content">
          <div className="name">{data.Name}</div>
          <div className="description">{data.content}</div>
          <div id="info">
            <div id="logo">
              <div id="share">
                <span className="share" />{" "}
              </div>
              <div id="comments">
                {" "}
                <span className="comments" />{" "}
              </div>
              <div id="bookmark">
                {" "}
                <span className="bookmark" />{" "}
              </div>
            </div>
            <div className="timeStamp">{data.timeStamp} </div>
          </div>
        </div>
      </div>
    </div>);
  }
  function mobTemplate(data) {
    return (<div className="settings">
      <div id="postContainer">
        <div id="postImg">
          <img src={data.image} />
        </div>
        <div id="content">
          <div id="info">
            <div id="logo">
              <div id="share">
                <span className="share" />{" "}
              </div>
              <div id="comments">
                {" "}
                <span className="comments" />{" "}
              </div>
              <div id="bookmark">
                {" "}
                <span className="bookmark" />{" "}
              </div>
            </div>
          </div>
          <div className="name">{data.Name}</div>
          <div className="description">{data.content}</div>
          <div className="timeStamp">{data.timeStamp} </div>
        </div>
      </div>
    </div>);
  }
  // define the array of Json
  let dataSource = [
    {
      Name: "IBM Open-Sources Web Sphere Liberty Code",
      content: "In September, IBM announced that it would be open-sourcing the code for WebSphere...",
      id: "1",
      image: "https://ej2.syncfusion.com/demos/src/listview/images/1.png",
      timeStamp: "Syncfusion Blog - October 19, 2017"
    },
    {
      Name: "Must Reads: 5 Big Data E-books to upend your development",
      content: "Our first e-book was published in May 2012-jQuery Succinctly was the start of over...",
      id: "2",
      image: "https://ej2.syncfusion.com/demos/src/listview/images/2.png",
      timeStamp: "Syncfusion Blog - October 18, 2017"
    },
    {
      Name: "The Syncfusion Global License: Your Questions, Answered ",
      content: "Syncfusion recently hosted a webinar to cover the ins and outs of the Syncfusion global...",
      id: "4",
      image: "https://ej2.syncfusion.com/demos/src/listview/images/3.png",
      timeStamp: "Syncfusion Blog - October 18, 2017"
    },
    {
      Name: "Know: What is Coming from Microsoft this Fall ",
      content: "On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform...",
      id: "5",
      image: "https://ej2.syncfusion.com/demos/src/listview/images/6.png",
      timeStamp: "Syncfusion Blog - October 17, 2017"
    }
  ];
  let fields = { text: "Name" };
  let wintemplate;
  let list = null;
  if (Browser.isDevice) {
    if (list) {
      list.element.style.width = "350px";
    }
    wintemplate = mobTemplate;
  }
  else {
    wintemplate = listTemplate;
  }
  return (<div>
    <ListViewComponent id="list" ref={l => { list = l; }} dataSource={dataSource} fields={fields} headerTitle="Syncfusion Blog" showHeader={true} template={wintemplate} />
  </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}
