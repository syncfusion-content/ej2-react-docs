import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    const [initialCount, setInitialCount] = React.useState(0);
    const [repeatCount, setRepeatCount] = React.useState(0);

    function clickHandler(args) {
        if (args && args.isRepeat) {
            setRepeatCount((prev) => prev + 1);
        } else {
            setInitialCount((prev) => prev + 1);
        }
    }

    function resetCounts() {
        setInitialCount(0);
        setRepeatCount(0);
    }

    return (
        <div className='container'>
            <div className='btncontainer'>
                <ButtonComponent id='repeat-btn' enableRepeat={true} repeatDelay={400} repeatInterval={100} content='Repeat Button' onClick={clickHandler} />
                <ButtonComponent id='reset-btn' content='Reset' cssClass='e-outline' onClick={resetCounts} />
            </div>
            <div className='event'>
                <table className='table' title='Event Trace'>
                    <tbody>
                        <tr>
                            <th>Repeat click counts</th>
                        </tr>
                        <tr>
                            <td>Initial clicks: <strong>{initialCount}</strong></td>
                        </tr>
                        <tr>
                            <td>Repeat clicks: <strong>{repeatCount}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
ReactDom.render(<App />, document.getElementById('button'));
