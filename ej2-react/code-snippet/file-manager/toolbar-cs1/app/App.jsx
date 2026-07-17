
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject, ToolbarItemsDirective, ToolbarItemDirective } from '@syncfusion/ej2-react-filemanager';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
function App() {
    let fileObj;
    let checkbox;
    let hostUrl = "https://physical-service.syncfusion.com/";
    let height = "375px";
    let view = "Details";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };

    function checkboxTemplate() {
        return (
          <CheckBoxComponent ref={ scope => (checkbox = scope )} label="Select All" checked={false} change={onChange} />
        );
      }
    
    function onChange(args) {
        if (args.checked) {
            fileObj.selectAll(); 
            checkbox.label = 'Unselect All';
        }
        else {
            fileObj.clearSelection();
            checkbox.label = 'Select All';
        }
    }
    return (<div>
      <div className="control-section">
          <FileManagerComponent ref={s => (fileObj = s)} id="file" height={height} view={view} ajaxSettings={ajaxSettings}>
            <ToolbarItemsDirective>
                <ToolbarItemDirective name= 'NewFolder' text= 'Create folder' prefixIcon= 'e-plus' tooltipText= 'Create folder'/>
                <ToolbarItemDirective name= 'Upload'/>
                <ToolbarItemDirective name= 'SortBy'/>
                <ToolbarItemDirective name= 'Refresh'/>
                <ToolbarItemDirective name= 'Cut'/>
                <ToolbarItemDirective name= 'Copy'/>
                <ToolbarItemDirective name= 'Paste'/>
                <ToolbarItemDirective name= 'Delete'/>
                <ToolbarItemDirective name= 'Download'/>
                <ToolbarItemDirective name= 'Rename'/>
                <ToolbarItemDirective name= 'Select' template={checkboxTemplate}/>
                <ToolbarItemDirective name= 'Selection'/>
                <ToolbarItemDirective name= 'View'/>
                <ToolbarItemDirective name= 'Details'/>
            </ToolbarItemsDirective>
                <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
      </div>
  </div>);
}
export default App;
