{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Annotation, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export class App extends React.Component {
    viewer;
    render() {
        return (<div>
      <div className='control-section'>
        <ButtonComponent id="showtoolbarItemBtn" onClick={this.showToolbarClicked.bind(this)}>ShowToolbarItem</ButtonComponent>
        {/* Render the PDF Viewer */}
        <PdfViewerComponent ref={(scope) => { this.viewer = scope; }} id="container" documentPath="PDF_Succinctly.pdf" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>

                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                ThumbnailView, Print, TextSelection, TextSearch]}/>
        </PdfViewerComponent>
      </div>
    </div>);
    }
    showToolbarClicked() {
        this.viewer.toolbar.showToolbarItem(["OpenOption"], false);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}