import { ActionEventArgs, Inject, InPlaceEditorComponent, MultiSelect } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public inplaceEditorObj: InPlaceEditorComponent;
  
  public serviceUrl = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';
  public frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
  public value = ['JavaScript', 'jQuery'];
  public model = { mode: 'Box', dataSource: this.frameWorkList, placeholder: 'Select skill' };

  public chipOnCreate(): void {
    (this.inplaceEditorObj as any).element.querySelector('.e-editable-value').innerHTML = this.chipCreation((this.inplaceEditorObj.value as string[]), true);
  }

  public onActionSuccess(e: ActionEventArgs): void {
    e.value = this.chipCreation(e.value.split(','), true);
  }

  public onActionFailure(e: ActionEventArgs): void {
    e.value = this.chipCreation(e.value.split(','), false);
  }

  public chipCreation(data: string[], isSuccess: boolean): string {
    let value: string = '<div class="e-chip-list">';
    [].slice.call(data).forEach((val: string) => {
        value += '<div class="e-chip"> <span class="e-chip-text' + (!isSuccess ? 'e-highlight' : '') + '"> ' + val + '</span></div>';
    });
    value += '</div>';
    return value;
  }

  public create(): void {
    this.chipOnCreate();
  }

  public render() {
    return (
      <div id='container'>
          <span className="content-title"> Select frameworks: </span>
          <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text! }} id='multiselect' data-underline='false' mode='Inline' type='MultiSelect' value={this.value} name='skill' url={this.serviceUrl} primaryKey='FrameWork' adaptor='UrlAdaptor' model={this.model} actionSuccess={ this.onActionSuccess=this.onActionSuccess.bind(this) } actionFailure={ this.onActionFailure=this.onActionFailure.bind(this) } created={this.create=this.create.bind(this)} >
          <Inject services={[MultiSelect]} />
          </InPlaceEditorComponent>
      </div>
    );
  }
}

export default App;