{% raw %}
import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
  React.useEffect(() => {
    componentDidMount();
  }, []);
  let circleRef = null;
  let triRef = null;
  function componentDidMount() {
    const circle = circleRef;
    const tri = triRef;
    let context;
    if (tri.getContext) {
      context = tri.getContext("2d");
      context.beginPath();
      context.moveTo(0, 50);
      context.lineTo(100, 50);
      context.lineTo(50, 0);
      context.fillStyle = "#FDA600";
      context.fill();
    }
    if (circle.getContext) {
      context = circle.getContext("2d");
      let centerX = circle.width / 2;
      let centerY = circle.height / 2;
      let radius = 30;
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = "#0450C2";
      context.fill();
    }
  }
  return (<div id="container">
    <TooltipComponent content="SVG Ellipse" cssClass="e-tooltip-css" target="#ellipse">
      <TooltipComponent content="SVG Polyline" cssClass="e-tooltip-css" target="#polyline">
        <TooltipComponent content="Canvas Circle" cssClass="e-tooltip-css" target="#circle">
          <TooltipComponent content="Canvas Triangle" cssClass="e-tooltip-css" target="#triangle">
            <TooltipComponent content="SVG Square" cssClass="e-tooltip-css" target="#square">
              <div id="box" className="e-prevent-select">
                <div className="circletool" id="rectShape" style={{ left: "1%", top: "10%" }}>
                  <svg>
                    <rect id="square" className="shape" x="50" y="20" width="50" height="50" style={{
                      fill: "#FDA600",
                      stroke: "none",
                      strokeWidth: "5",
                      strokeOpacity: 0.9
                    }} />
                  </svg>
                </div>
                <div className="circletool" id="ellipseShape" style={{ top: "65%" }}>
                  <svg>
                    <ellipse id="ellipse" className="shape" cx="100" cy="50" rx="20" ry="40" style={{
                      fill: "#0450C2",
                      stroke: "none",
                      strokeWidth: "2"
                    }} />
                  </svg>
                </div>
                <div className="circletool" id="polyShape" style={{ top: "25%", left: "40%", position: "absolute" }}>
                  <svg>
                    <polyline id="polyline" className="shape" points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" style={{
                      fill: "#ffffff",
                      stroke: "#0450C2",
                      strokeWidth: "4"
                    }} />
                  </svg>
                </div>
                <div className="circletool" id="circleShape" style={{ top: "16%", left: "72%", position: "absolute" }}>
                  <canvas id="circle" ref={(circle) => (circleRef = circle)} className="shape" width="60" height="60" />
                </div>
                <div className="circletool" id="triShape" style={{ top: "73%", left: "76%" }}>
                  <canvas id="triangle" ref={(tri) => (triRef = tri)} className="shape" width="100" height="50" />
                </div>
              </div>
            </TooltipComponent>
          </TooltipComponent>
        </TooltipComponent>
      </TooltipComponent>
    </TooltipComponent>
  </div>);
}
export default App;
{% endraw %}