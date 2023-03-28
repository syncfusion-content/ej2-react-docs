{% raw %}



import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

    // define the array of data
    let atcObject: any;
    const sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
    function onOpen(e: any){
      const count = this.atcObject.getItems().length;
      // set the value to footerTemplate property
      const ele = document.getElementsByClassName('foot')[0];
      ele.innerHTML =  "Total list item: " + count;
    };

    return (
    // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" ref={(autocomplete) => {atcObject = autocomplete }} footerTemplate={footerTemplate} dataSource={sportsData} placeholder="Find a game" open={onOpen =onOpen.bind(this)}/>
    );

    // set the footer template
    function footerTemplate(): JSX.Element {
      return (
             <span className='foot'/>
        );
      }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}