import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    // Preview Template Component
    const PreviewTemplate = (props) => {
      const file = props.selectedFile;
      const type = (file.rawFile.type || file.type || '').toLowerCase();
      const isImage = type.startsWith('image/');
      const isVideo = type.startsWith('video/');
      const sizeBytes = file.size || 0;
      const humanSize = sizeBytes < 1024
        ? `${sizeBytes} B`
        : sizeBytes < 1024 * 1024
          ? `${(sizeBytes / 1024).toFixed(1)} KB`
          : `${(sizeBytes / (1024 * 1024)).toFixed(1)} MB`;
      const ext = (file.name.split('.').pop() || '').toUpperCase();

      return (
        <div className="c-preview--card">
          <div className="c-preview-card">
            <div className="c-badge-row">
              <span className="c-badge">{ext || (type ? type.split('/')[1] : 'FILE')}</span>
              <span>{humanSize}</span>
            </div>
            
            <div className="c-media-frame">
              {isImage && (
                <img className="c-media-img" src={file.fileSource} alt={file.name} />
              )}
              {isVideo && (
                <video 
                  className="c-media-video" 
                  controls 
                  disablePictureInPicture 
                  playsInline 
                  preload="metadata" 
                  title={file.name}
                >
                  <source src={file.fileSource} type={type} />
                </video>
              )}
              {!isImage && !isVideo && (
                <div>No media content to display</div>
              )}
            </div>
            
            <div className="c-caption">
              <span className="c-name" title={file.name}>{file.name}</span>
              <a 
                className="c-btn-link" 
                href={file.fileSource} 
                target="_blank" 
                rel="noopener noreferrer"
                download={file.name}
              >
                Download
              </a>
            </div>
          </div>
        </div>
      );
    };
    // Attachment Chip Template Component
    const AttachmentChipTemplate = (props) => {
      const file = props.selectedFile;
      const isImage = !!(file && file.rawFile && typeof file.rawFile.type === 'string' && file.rawFile.type.indexOf('image/') === 0);
      const isVideo = !!(file && file.rawFile && typeof file.rawFile.type === 'string' && file.rawFile.type.indexOf('video/') === 0);

      return (
        <div className="c-attach">
          <div className="c-attach-thumb">
            {isImage && (
              <img className="c-attach-img" src={file.fileSource} alt={file.name} />
            )}
            {isVideo && (
              <span className="e-icons e-video"></span>
            )}
            {!isImage && !isVideo && (
              <span className="e-icons e-chat-file-icon"></span>
            )}
          </div>
          <div className="c-attach-body">
            <div className="c-attach-name" title={file.name}>{file.name}</div>
            <div className="c-attach-meta">{file.type || ''}</div>
          </div>
        </div>
      );
    };
    const attachmentSettings =  {
        attachmentTemplate: AttachmentChipTemplate,
        previewTemplate: PreviewTemplate,
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
    const currentUserModel = {
        id: "user1",
        user: "Albert"
    };
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} className="chat-attachment-template" enableAttachments={true} attachmentSettings= {attachmentSettings} ></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));