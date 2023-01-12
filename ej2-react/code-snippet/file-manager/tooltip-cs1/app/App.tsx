import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
import { getValue, select } from '@syncfusion/ej2-base';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';

function App() {
    let fileObj: FileManagerComponent;
    let tooltipObj: TooltipComponent;
    let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";   
    function onTooltipBeforeRender(args: TooltipEventArgs): void {
      const buttonId: string = select('button', args.target).id;
      let description: string = '';
        switch (buttonId) {
            case fileObj.element.id + '_tb_newfolder':
                description = 'Create a new folder';
                break;
            case fileObj.element.id + '_tb_upload':
                description = 'Upload new files';
                break;
            case fileObj.element.id + '_tb_cut':
                description = 'Cut files and folders from the current location';
                break;
            case fileObj.element.id + '_tb_copy':
                description = 'Copy files and folders from the current location';
                break;
            case fileObj.element.id + '_tb_paste':
                description = 'Paste files and folders in the current location';
                break;
            case fileObj.element.id + '_tb_delete':
                description = 'Delete selected files and folders';
                break;
            case fileObj.element.id + '_tb_download':
                description = 'Download selected files and folders';
                break;
            case fileObj.element.id + '_tb_rename':
                description = 'Rename selected file or folder';
                break;
            case fileObj.element.id + '_tb_sortby':
                description = 'Change the file sorting order';
                break;
            case fileObj.element.id + '_tb_refresh':
                description = 'Refresh the current location';
                break;
            case fileObj.element.id + '_tb_selection':
                description = 'Following items are currently selected:';
                for (let i: number = 0; i < fileObj.selectedItems.length; i++) {
                    description = description + '</br>' + fileObj.selectedItems[i];
                }
            break;
            case fileObj.element.id + '_tb_view':
                description = 'Switch the layout view';
                break;
            case fileObj.element.id + '_tb_details':
                description = 'Get the details of the seletced items';
                break;
            default:
                description = '';
                break;
        }
      tooltipObj.content = args.target.getAttribute('title') + '</br>' + description;
    }
    function fileLoad(args: any): void {
      const target: Element = args.element;
      if (args.module==='DetailsView') {
          const element: Element = select('[title]', args.element);
          const title: string = getValue('name', args.fileDetails) +
              '\n' + getValue('dateModified', args.fileDetails);
          element.setAttribute('title', title);
      } else if (args.module==='LargeIconsView') {
          const title: string = getValue('name', args.fileDetails) +
              '\n' + getValue('dateModified', args.fileDetails);
          target.setAttribute('title', title);
      }
    }

    return (
        <TooltipComponent id="template-tootip" ref={ s => (tooltipObj = s as TooltipComponent)} target="#file_toolbar [title]" beforeRender={onTooltipBeforeRender} >
            <div className="filemanager-container">
            {/* Filemanager element */}
                <FileManagerComponent ref={ s => (fileObj = s as FileManagerComponent)} id="file" 
                    ajaxSettings = {{
                        downloadUrl: hostUrl +'api/FileManager/Download',
                        getImageUrl: hostUrl +'api/FileManager/GetImage',
                        uploadUrl: hostUrl +'api/FileManager/Upload',
                        url: hostUrl + 'api/FileManager/FileOperations'         
                    }} fileLoad={fileLoad}>
                    <Inject services={[ NavigationPane, DetailsView, Toolbar]} />
                </FileManagerComponent>
            </div>
        </TooltipComponent>
    );
}
export default App;

