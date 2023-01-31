import * as React from "react";
import * as ReactDOM from "react-dom";
export default class ReactApp extends React.Component {
    render() {
        return (<div>
        <div className="e-card" id="basic">
          <div className="e-card-title">Explore Cities</div>
          <div className="e-card-separator"/>
          <div className="e-card-content">
            Sydney is a city on the east coast of Australia. Sydney is the capital city of New South Wales. About four million people live in Sydney which makes it the biggest city in Oceania.
            </div>
          <div className="e-card-separator"/>
          <div className="e-card-content">
            New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact upon commerce and etc.
            </div>
          <div className="e-card-separator"/>
          <div className="e-card-content">
            Malaysia is one of the Southeast Asian countries, on a peninsula of the Asian continent, to a certain extent; it can be recognized as part of the Asian continent.
            </div>
        </div>
      </div>);
    }
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));
