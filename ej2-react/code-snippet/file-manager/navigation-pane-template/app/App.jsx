
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    let hostUrl = "https://physical-service.syncfusion.com/";
    let height = "375px";
    let ajaxSettings = {
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
    };

    const navigationPaneTemplate = (item) => {
        return (
            <div className="e-nav-pane-node" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span className="folder-name" style={{ marginLeft: 8 }}>{item.name}</span>
            </div>
        );
    };

    return (<div className="control-section">
        <FileManagerComponent id="file" height={height} ajaxSettings={ajaxSettings} navigationPaneTemplate={navigationPaneTemplate}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
