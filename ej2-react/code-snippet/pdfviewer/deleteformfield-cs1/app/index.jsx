{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields, TextFieldSettings } from '@syncfusion/ej2-react-pdfviewer';
export class App extends React.Component {
    render() {
        return (<div>
      <div className='control-section'>
        {/* Render the PDF Viewer */}
          <PdfViewerComponent id="container" ref={(scope) => { this.viewer = scope; }} documentPath="FormDesigner.pdf" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" documentLoad={this.documentLoaded} style={{ 'height': '640px' }}>

                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields]}/>
          </PdfViewerComponent>
      </div>
    </div>);
    }
    documentLoaded = () => {
        this.viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } }, as, TextFieldSettings);
        this.viewer.formDesignerModule.addFormField("Textbox", { name: "Textfield", bounds: { X: 300, Y: 229, Width: 150, Height: 24 } }, as, TextFieldSettings);
        this.viewer.formDesignerModule.deleteFormField(pdfviewer.formFieldCollections[0]);
    };
    ;
}
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}