

import { AnimationSettingsModel, ProgressButtonComponent, SpinSettingsModel } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {

  let animationSettings: AnimationSettingsModel = { effect: 'SlideLeft',  duration: 500, easing: 'linear' };
  let spinSettings : SpinSettingsModel = { position: 'Center' };

  return (
    <ProgressButtonComponent content='Slide Left' enableProgress = {true} animationSettings={animationSettings} spinSettings={spinSettings}/>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));



