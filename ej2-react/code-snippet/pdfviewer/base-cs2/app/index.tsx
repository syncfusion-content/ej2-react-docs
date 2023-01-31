{% raw %}


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { RouteComponentProps } from 'react-router';

export class App extends React.Component<{}, {}> {
  render() {
    return (
    <div>
      <div className='control-section'>
        {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          enableToolbar={false}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, Annotation, TextSelection, TextSearch]} />
        </PdfViewerComponent>
      </div>
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


{% endraw %}