{% raw %}



import { Tooltip } from '@syncfusion/ej2-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // define the JSON of data
  private countryData: { [key: string]: Object }[] = [
    { id: '1', text: 'Australia', content: 'National sports is Cricket' },
    { id: '2', text: 'Bhutan', content: 'National sports is Archery' },
    { id: '3', text: 'China', content: 'National sports is Table Tennis' },
    { id: '4', text: 'Cuba', content: 'National sports is Baseball' },
    { id: '5', text: 'India', content: 'National sports is Hockey' },
    { id: '6', text: 'Spain', content: 'National sports is Football' },
    { id: '7', text: 'United States', content: 'National sports is Baseball' }
  ];

  // maps the appropriate column to fields property
  private fields: object = { text: 'text', value: 'id' };
  private tooltip: any;
  private dropDownListObject: any;

  constructor(props: any) {
    super(props);
    this.onBeforeRender = this.onBeforeRender.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  public onBeforeRender(args: any) {
    // get the target element
    const result = this.dropDownListObject.dataSource;
    let i;
    for (i = 0; i < result.length; i++) {
      if (result[i].text === args.target.textContent) {
        this.tooltip.content = result[i].content;
        this.tooltip.dataBind();
        break;
      }
    }
  }
  public onClose() {
    this.tooltip.close();
  }
  public componentDidMount() {
    this.tooltip = new Tooltip({
      beforeRender: this.onBeforeRender,
      content: 'Loading...',
      position: 'TopCenter',
      target: '.e-list-item'
    });

    this.tooltip.appendTo('body');
  }
  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <DropDownListComponent id="ddlelement" ref={(scope) => { this.dropDownListObject = scope; }} dataSource={this.countryData} fields={this.fields} placeholder="Select a country" close={this.onClose} />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}