

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
PdfViewerComponent.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner);
export function App() {
    return (<PdfViewerComponent id="container" height={'640px'} documentPath="PDF_Succinctly.pdf"
    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" />);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);


