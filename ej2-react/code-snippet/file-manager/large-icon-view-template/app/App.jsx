
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
    const getFileIconCssClass = (item) => {
        if (!item.isFile) return 'e-list-icon e-fe-folder';
        const extensionMap = {
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
    const largeIconsTemplate = (item) => {
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

    return (<div className="control-section">
        <FileManagerComponent id="file" cssClass="e-fm-template-sample" height={height} ajaxSettings={ajaxSettings} largeIconsTemplate={largeIconsTemplate}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
        </FileManagerComponent>
    </div>);
}
export default App;
