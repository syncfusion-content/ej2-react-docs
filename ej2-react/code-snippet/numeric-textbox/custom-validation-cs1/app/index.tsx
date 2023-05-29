{% raw %}


import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes NumericTextBox component
export default class App extends React.Component<{}, {}> {
  public numericInstance: any;
  private formObject: FormValidator;

   constructor(props: any) {
     super(props);
     this.onChange = this.onChange.bind(this);
     this.onCreate = this.onCreate.bind(this);
   }

   public onChange(){
          this.formObject.validate("numeric");
   }

   public onCreate(): void{
      // checks the value of NumericTextbox and returns the corresponding boolean value
        const customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
          if(this.numericInstance.value>=10 && this.numericInstance.value<=100) {
            return true;
          }
          else {
            return false;
         }
        };
        const options: FormValidatorModel = {
          rules: {
              'numeric': { required: [true, "Number is required"] },
          }
        };
        // defines FormValidator to validate the NumericTextBox
        this.formObject = new FormValidator('#form-element', options);

        this.formObject.addRules('numeric', { range: [customFn, "Please enter a number between 10 to 100"] });
        const proxy = this;
        (document.getElementById('submit_btn') as HTMLElement).addEventListener('click', () => {
              proxy.formObject.validate('numeric');
              const ele: HTMLInputElement = document.getElementById('numeric') as HTMLInputElement;
               // checks for incomplete value and alerts the formt submit
              if (ele.value !== "" && parseInt(ele.value, 10) >=10 && parseInt(ele.value, 10)<=100) {
                alert("Submitted");
               }
        });
   }
   public render() {
     return (
          <div>
            <NumericTextBoxComponent id="numeric" name='numeric'  placeholder="NumericTextbox" min= {10} max={100} strictMode={false} ref={(numeric) => { this.numericInstance = numeric as NumericTextBoxComponent; }}  change={this.onChange} created={this.onCreate} floatLabelType='Always' />
            <label className='e-error' htmlFor={'numeric'}/>
            <button id="submit_btn" style={{ marginTop: '10px' }}>Submit</button>
          </div>
     );
   }
};
ReactDOM.render(<App />, document.getElementById('numericContainer'));



{% endraw %}