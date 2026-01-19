import { Inject, InPlaceEditorComponent, MultiSelect } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    inplaceEditorObj;
    serviceUrl = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';
    frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
    value = ['JavaScript', 'jQuery'];
    model = { mode: 'Box', dataSource: this.frameWorkList, placeholder: 'Select skill' };
    chipOnCreate() {
        this.inplaceEditorObj.element.querySelector('.e-editable-value').innerHTML = this.chipCreation(this.inplaceEditorObj.value, true);
    }
    onActionSuccess(e) {
        e.value = this.chipCreation(e.value.split(','), true);
    }
    onActionFailure(e) {
        e.value = this.chipCreation(e.value.split(','), false);
    }
    chipCreation(data, isSuccess) {
        let value = '<div class="e-chip-list">';
        [].slice.call(data).forEach((val) => {
            value += '<div class="e-chip"> <span class="e-chip-text' + (!isSuccess ? 'e-highlight' : '') + '"> ' + val + '</span></div>';
        });
        value += '</div>';
        return value;
    }
    create() {
        this.chipOnCreate();
    }
    render() {
        return (<div id='container'>
          <span className="content-title"> Select frameworks: </span>
          <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='multiselect' data-underline='false' mode='Inline' type='MultiSelect' value={this.value} name='skill' url={this.serviceUrl} primaryKey='FrameWork' adaptor='UrlAdaptor' model={this.model} actionSuccess={this.onActionSuccess = this.onActionSuccess.bind(this)} actionFailure={this.onActionFailure = this.onActionFailure.bind(this)} created={this.create = this.create.bind(this)}>
          <Inject services={[MultiSelect]}/>
          </InPlaceEditorComponent>
      </div>);
    }
}
export default App;