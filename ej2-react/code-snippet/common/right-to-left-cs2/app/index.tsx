


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { enableRtl } from '@syncfusion/ej2-base'
// Enables Right to left alignment for all controls
enableRtl(true);

export default class App extends React.Component<{}, {}> {
  private data = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];

  render() {
    return (
      // specifies the tag to render the ListView component
      <ListViewComponent id='list' dataSource={this.data} showHeader = 'true' headerTitle = 'Painting types' ></ListViewComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('element'));



