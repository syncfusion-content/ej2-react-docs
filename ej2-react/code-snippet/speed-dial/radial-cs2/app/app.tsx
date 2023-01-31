{% raw %}


{/* Import the Speed Dial. */}
import { SpeedDialComponent, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{/* To render Speed Dial.*/}
function App() {

  const items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
  ];

  const radialSettings: RadialSettingsModel = { offset: '80px', direction: 'AntiClockwise', startAngle: 90, endAngle: 270 };

  return (
    <div>
      <div id="targetElement" style={{position:'relative', minHeight:'350px', border:'1px solid'}}></div>
      <SpeedDialComponent id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' items={items} mode= 'Radial' position= 'MiddleRight' radialSettings= {radialSettings} target="#targetElement"></SpeedDialComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


{% endraw %}