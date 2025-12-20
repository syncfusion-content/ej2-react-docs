{% raw %}
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
  let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
  const getFileIconCssClass = (item: any): string => {
    if (!item.isFile) return 'e-list-icon e-fe-folder';
    const extensionMap: Record<string, string> = {
      jpg: 'image',
      jpeg: 'image',
      png: 'image',
      gif: 'image',
      mp3: 'music',
      wav: 'music',
      mp4: 'video',
      avi: 'video',
      doc: 'doc',
      docx: 'docx',
      ppt: 'pptx',
      pptx: 'pptx',
      xls: 'xlsx',
      xlsx: 'xlsx',
      txt: 'txt',
      js: 'js',
      css: 'css',
      html: 'html',
      exe: 'exe',
      msi: 'msi',
      php: 'php',
      xml: 'xml',
      zip: 'zip',
      rar: 'rar',
      pdf: 'pdf',
    };
    const extension = (item.name.split('.').pop() || '').toLowerCase();
    const iconType = extensionMap[extension] || 'unknown';
    return `e-list-icon e-fe-${iconType}`;
  };
  const largeIconsTemplate = (item: any): JSX.Element => {
    const formattedDate = item.dateCreated
      ? new Date(item.dateCreated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      : '';
    const iconClass = getFileIconCssClass(item);
    return (
      <div className="custom-icon-card">
        <div className="file-header">
          <div className="file-name" title={item.name}>
            {item.name}
          </div>
        </div>
        <div className={iconClass}></div>
        <div className="file-formattedDate">Created on {formattedDate}</div>
      </div>
    );
  };

  return (
    <div className="control-section">
      <FileManagerComponent id="file" cssClass="e-fm-template-sample" height="375px" ajaxSettings={{
        downloadUrl: hostUrl + 'api/FileManager/Download',
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        url: hostUrl + "api/FileManager/FileOperations"
      }} largeIconsTemplate={largeIconsTemplate as any}>
        <Inject services={[NavigationPane, DetailsView, Toolbar]} />
      </FileManagerComponent>
    </div>
  );
}
export default App; {% endraw %}