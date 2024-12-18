import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import './index.css';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
// To render Chip.
function App() {
    return (<ChipListComponent id="chip-avatar">
          <ChipsDirective>
          <ChipDirective
          leadingIconCss="trendingIcon"
          template='<a href="https://timesofindia.indiatimes.com/news" target="_blank" class="anchorElement">#BreakingNews</a><span class="textElement">125k posts</span>'
        ></ChipDirective>
        <ChipDirective
          leadingIconCss="cameraIcon"
          template='<a href="https://blog.google/products/photos/" target="_blank" class="anchorElement">#PhotoOfTheDay</a>'
        ></ChipDirective>
        <ChipDirective
          leadingIconCss="trendingIcon"
          template='<a href="https://indianexpress.com/section/technology/" target="_blank" class="anchorElement">#TechNews</a><span class="textElement">107k posts</span>'
        ></ChipDirective>
          </ChipsDirective>
      </ChipListComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('chip'));