{% raw %}
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
class App extends React.Component {
    innerSplitterInstance;
    splitterInstance;
    leftPaneContent() {
        return (<div>
          <div className="content">
              <a href="https://www.syncfusion.com/ebooks/neuralnetworks" target="_blank">Neural Networks Using C# Succinctly</a>
              <p>Neural networks are an exciting field of software development used to calculate outputs from input data.
              While the idea seems simple enough, the implications of such networks are staggering—think optical character recognition,
              speech recognition, and regression analysis. With Neural Networks Using C# Succinctly by James McCaffrey, you’ll learn
              how to create your own neural network to solve classification problems, or problems where the outcomes can only be one of
              several values. <br /><br />Learn about encoding and normalizing data, activation functions and how to choose the right one, and ultimately
              how to train a neural network to find weights and bias values that provide accurate predictions.
              An artificial neural network (sometimes abbreviated ANN, or shortened to just "neural network" when the context is clear) is
              a software system that loosely models biological neurons and synapses. Before explaining exactly how neural networks work, it is
              useful to understand what types of problems they can solve.
          </p>
          </div>
      </div>);
    }
    rightPaneContent1() {
        return (<div>
      <div className="content">
      <a href="https://www.syncfusion.com/ebooks/data_capture_and_extraction_with_c_sharp_succinctly" target="_blank"> Data Capture and Extraction with C# Succinctly </a>
      <p>Capturing and extracting information is one of the most important tasks a developer can perform, and making this task more
        engaging without relying entirely on specialized tools is an efficient way to improve productivity.
        In Data Capture and Extraction with C# Succinctly, author Ed Freitas guides readers toward getting more out of C# in minimal time.
        Email has become a pillar of our modern and connected society, and it now serves as a primary means of communication. Because each email
        is filled with valuable information, data extraction has emerged as a worthwhile skill set for developers in today’s business world.
      </p>
      </div>
      </div>);
    }
    rightPaneContent2() {
        return (<div>
        <div className="content">
          <a href="https://www.syncfusion.com/ebooks/spark" target="_blank">Spark Succinctly</a>
          <p>Mastering big data requires an aptitude at every step of information processing.
              Post-processing, one of the most important steps, is where you find Apache Spark frequently employed.
              Spark Succinctly, by Marko Svaljek, addresses Spark’s use in the ultimate step in handling big data. This e-book, the
              third installment in Svaljek’s IoT series, teaches the basics of using Spark and explores how to work with RDDs, Scala and
              Python tasks, JSON files, and Cassandra.Many of the leading companies in the world today face the problem of big data.
          </p>
       </div>
      </div>);
    }
    onCreate() {
        // Initialize Splitter component
        const cont = this.innerSplitterInstance.element.querySelectorAll(".e-pane")[1];
        cont.appendChild(this.splitterInstance.element);
    }
    render() {
        return (<div id="target" className="control-section splitter-expand">
          <SplitterComponent id="splitter1" separatorSize={3} height="350px" width="100%" ref={(splitter) => { this.innerSplitterInstance = splitter; }}>
          <PanesDirective>
              <PaneDirective size='48%' content={this.leftPaneContent}/>
              <PaneDirective />
          </PanesDirective>
          </SplitterComponent>
          <SplitterComponent id="splitter2" separatorSize={3} orientation="Vertical" ref={(splitter) => { this.splitterInstance = splitter; }} created={this.onCreate = this.onCreate.bind(this)}>
            <PanesDirective>
                <PaneDirective size='50%' content={this.rightPaneContent1}/>
                <PaneDirective content={this.rightPaneContent2}/>
            </PanesDirective>
          </SplitterComponent>
          </div>);
    }
}
export default App;
{% endraw %}