import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Table, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['CreateTable']
  }
  private quickToolbarSettings: object = {
    table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell']
  }
  private rteValue: string = "<h2>Discover the Table's Powerful Features</h2><p>A table can be created in the editor using either a keyboard shortcut or the toolbar. With the quick toolbar, you can perform table cell insert, delete, split, and merge operations. You can style the table cells using background colours and borders.</p><table class=\"e-rte-table\" style=\"width: 100%; min-width: 0px; height: 151px\"><thead><tr><th><span>Name</span><br/></th><th><span>Age</span><br/></th><th><span>Gender</span><br/></th><th><span>Occupation</span><br/></th></tr></thead><tbody><tr><td>Selma Rose</td><td>30</td><td>Female</td><td><span>Engineer</span><br/></td></tr><tr><td><span>Robert</span><br/></td><td>28</td><td>Male</td><td><span>Graphic Designer</span></td></tr><tr><td><span>William</span><br/></td><td>35</td><td>Male</td><td>Teacher</td></tr></tbody></table>";

  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rteValue} toolbarSettings={this.toolbarSettings} quickToolbarSettings={this.quickToolbarSettings}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;