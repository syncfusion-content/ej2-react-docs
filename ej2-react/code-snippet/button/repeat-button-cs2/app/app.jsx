import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    const [initialCount, setInitialCount] = React.useState(0);
    const [repeatCount, setRepeatCount] = React.useState(0);
    const [repeatDelay, setRepeatDelay] = React.useState(400);
    const [repeatInterval, setRepeatInterval] = React.useState(100);
    const [disabled, setDisabled] = React.useState(false);

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
        <div id="container">
            <div className="frame">
                <h3>Repeat Button</h3>
                <p style={{ fontSize: '13px', color: '#555', marginTop: 0 }}>
                    Hold the button to fire continuous <code>clicked</code> events.
                    The counters below track initial clicks vs. repeat fires.
                </p>

                <ButtonComponent
                    id="repeat-btn"
                    enableRepeat={true}
                    repeatDelay={repeatDelay}
                    repeatInterval={repeatInterval}
                    content="Hold Me"
                    disabled={disabled}
                    clicked={clickHandler}
                />

                <div className="controls">
                    <label>
                        Repeat Delay (ms)
                        <input
                            type="number"
                            id="delay-input"
                            value={repeatDelay}
                            min="0"
                            step="50"
                            onChange={(e) => setRepeatDelay(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Repeat Interval (ms)
                        <input
                            type="number"
                            id="interval-input"
                            value={repeatInterval}
                            min="0"
                            step="50"
                            onChange={(e) => setRepeatInterval(Number(e.target.value))}
                        />
                    </label>
                    <label className="inline">
                        <input
                            type="checkbox"
                            id="disabled-toggle"
                            checked={disabled}
                            onChange={(e) => setDisabled(e.target.checked)}
                        />
                        Disabled
                    </label>
                </div>

                <div className="counter-display">
                    <div className="counter-box">
                        <div className="label">Initial Clicks</div>
                        <div className="value" id="initial-count">{initialCount}</div>
                    </div>
                    <div className="counter-box repeat">
                        <div className="label">Repeat Clicks</div>
                        <div className="value" id="repeat-count">{repeatCount}</div>
                    </div>
                </div>

                <span className="reset-link" id="reset-btn" clicked={resetCounts}>
                    Reset counters
                </span>
            </div>
        </div>
    );
}

export default App;
ReactDom.render(<App />, document.getElementById('root'));
