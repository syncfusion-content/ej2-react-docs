{% raw %}
import * as React from 'react';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { DetailsView, FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';


function App() {
    let fileObj: FileManagerComponent;
    let tabObj: TabComponent;

    function select(args: any): void {
      if (fileObj) {
        fileObj.refreshLayout();
      }
    }

    // Template for Pie Chart
    function template1(): JSX.Element {
      return(
          <div className="template" >
                  <div className="cnt-text">Overview</div>
                <div className="content">The File Manager component contains a context menu for performing file operations, large-icons view for displaying the files and folders, and a breadcrumb for navigation. However, these basic functionalities can be extended by using the additional feature modules like toolbar, navigation pane, and details view to simplify the navigation and file operations within the file system.</div>
          </div>
      );
    }
    function template2(): JSX.Element {
      let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
        return(
          <div className="template" >
              <div className="content-title">
                   <div className="cnt-text">File Manager with default functionalities</div>
              </div>
              <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" allowDragAndDrop={true}
                  ajaxSettings = {{
                    downloadUrl: hostUrl + 'api/FileManager/Download',
                    getImageUrl: hostUrl + "api/FileManager/GetImage",
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    url: hostUrl + "api/FileManager/FileOperations"
                  }} >
                  <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
              </FileManagerComponent>
            </div>
        );
    }
    let headertext: any;
    headertext = [{ text: "Overview" }, { text: "File Manager" }];
    return (
          <TabComponent ref={(tab) => { tabObj = tab }} showCloseButton={ true } heightAdjustMode='None' height={320} selected={select}>
              <TabItemsDirective>
              <TabItemDirective header={headertext[0]} content={ template1 as any } />
              <TabItemDirective header={headertext[1]} content={ template2.bind(this) as any }/>
              </TabItemsDirective>
          </TabComponent>
    );
}
export default App;{% endraw %}