// import the Button component
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import the CheckBox component
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
// import the DatePicker component
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import the TextBox component
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
export default class DynamicForm extends React.Component {
    objectProps;
    constructor(props) {
        super(props);
    }
    onSubmit() {
        alert("Form submitted!!!");
    }
    renderStatus(element) {
        switch (element.type) {
            case 'date':
                return <div>
          <DatePickerComponent type={element.type} floatLabelType={element.floatLabelType} placeholder={element.placeholder} width={element.width}/>
        </div>;
            case 'checkbox':
                return <div id="checkBox">
          <CheckBoxComponent type={element.type} label={element.label}/>
        </div>;
            case 'submit':
                return <ButtonComponent id={element.type} type={element.type}> Sign up </ButtonComponent>;
            default:
                return <div id="textValue">
          <TextBoxComponent type={element.type} floatLabelType={element.floatLabelType} placeholder={element.placeholder}/>
        </div>;
        }
    }
    render() {
        this.objectProps = this.props;
        return (Object.keys(this.objectProps.dataObject).map((key, value) => {
            return (<div key={key.toString()}>
            <form onSubmit={this.onSubmit}>
              {this.renderStatus(this.objectProps.dataObject[key])}
            </form>
        </div>);
        }));
    }
}
