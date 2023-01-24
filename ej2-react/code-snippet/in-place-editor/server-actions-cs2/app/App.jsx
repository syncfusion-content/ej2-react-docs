{% raw %}
import { Inject, InPlaceEditorComponent, MultiSelect } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    let inplaceEditorObj;
    const serviceUrl = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';
    const frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
    const value = ['JavaScript', 'jQuery'];
    const model = { mode: 'Box', dataSource: frameWorkList, placeholder: 'Select skill' };
    function chipOnCreate() {
        inplaceEditorObj.element.querySelector('.e-editable-value').innerHTML = chipCreation(inplaceEditorObj.value, true);
    }
    function onActionSuccess(e) {
        e.value = chipCreation(e.value.split(','), true);
    }
    function onActionFailure(e) {
        e.value = chipCreation(e.value.split(','), false);
    }
    function chipCreation(data, isSuccess) {
        let value = '<div class="e-chip-list">';
        [].slice.call(data).forEach((val) => {
            value += '<div class="e-chip"> <span class="e-chip-text' + (!isSuccess ? 'e-highlight' : '') + '"> ' + val + '</span></div>';
        });
        value += '</div>';
        return value;
    }
    function create() {
        chipOnCreate();
    }
    return (<div id='container'>
          <span className="content-title"> Select frameworks: </span>
          <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text; }} id='multiselect' data-underline='false' mode='Inline' type='MultiSelect' value={value} name='skill' url={serviceUrl} primaryKey='FrameWork' adaptor='UrlAdaptor' model={model} actionSuccess={onActionSuccess = onActionSuccess.bind(this)} actionFailure={onActionFailure = onActionFailure.bind(this)} created={create = create.bind(this)}>
          <Inject services={[MultiSelect]}/>
          </InPlaceEditorComponent>
      </div>);
}
export default App;
{% endraw %}