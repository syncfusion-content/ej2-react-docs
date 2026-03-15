import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';

function App() {
    return (<SparklineComponent id='sparkline' height='100px' width='70%' dataSource={[
        { xval: '2005', yval: 20090440 },
        { xval: '2006', yval: 20264080 },
        { xval: '2007', yval: 20434180 },
        { xval: '2008', yval: 21007310 },
        { xval: '2009', yval: 21262640 },
        { xval: '2010', yval: 21515750 },
        { xval: '2011', yval: 21766710 },
        { xval: '2012', yval: 22015580 },
        { xval: '2013', yval: 22262500 },
        { xval: '2014', yval: 22507620 }
    ]} xName='xval' yName='yval' type='Line'>
    </SparklineComponent>);
}
export default App;
createRoot(document.getElementById('sparkline')).render(<App />);
