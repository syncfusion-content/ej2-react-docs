{% raw %}
import { RichTextEditorComponent, Inject, IToolbarItems, HtmlEditor, Toolbar, ToolbarSettingsModel, Image, Link, NodeSelection, QuickToolbar, ActionCompleteEventArgs, ActionBeginEventArgs, Table, PasteCleanup } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { MentionComponent, FieldsModel } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

class App extends React.Component<{}, {}> {
  private rteObj: RichTextEditorComponent | null = null;
  private mentionObj: MentionComponent | null = null;
  private range: Range = new Range();
  private selection: NodeSelection = new NodeSelection();
  private saveSelection: any = null;

  private value: string = `<p>Dear <span contenteditable="false" class="e-mention-chip"><span>{{FirstName}}</span></span> <span contenteditable="false" class="e-mention-chip"><span>{{LastName}}</span></span>,</p>
<p>We are thrilled to have you with us! Your unique promotional code for this month is: <span contenteditable="false" class="e-mention-chip"><span>{{PromoCode}}</span></span>.</p>
<p>Your current subscription plan is: <span contenteditable="false" class="e-mention-chip"><span>{{SubscriptionPlan}}</span></span>.</p>
<p>Your customer ID is: <span contenteditable="false" class="e-mention-chip"><span>{{CustomerID}}</span></span>.</p>
<p>Your promotional code expires on: <span contenteditable="false" class="e-mention-chip"><span>{{ExpirationDate}}</span></span>.</p>
<p>Feel free to browse our latest offerings and updates. If you need any assistance, don't hesitate to contact us at <a href="mailto:{{SupportEmail}}"><span contenteditable="false" class="e-mention-chip"><span>{{SupportEmail}}</span></span></a> or call us at <span contenteditable="false" class="e-mention-chip"><span>{{SupportPhoneNumber}}</span></span>.</p>
<p>Best regards,<br>The <span contenteditable="false" class="e-mention-chip"><span>{{CompanyName}}</span></span> Team</p>`;

  private items: (string | IToolbarItems)[] = [
    'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
    'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
    { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
    { tooltipText: 'Insert Field', template: '#insertField', command: 'Custom' },
    'SourceCode', '|', 'Undo', 'Redo'
  ];

  private toolbarSettings: ToolbarSettingsModel = { items: this.items };

  private mentionChar: string = "{{";
  private placeholder: string = "Type {{ and tag a field";

  private itemsName: { text: string }[] = [
    { text: 'First Name' }, { text: 'Last Name' }, { text: 'Support Email' },
    { text: 'Company Name' }, { text: 'Promo Code' }, { text: 'Support Phone Number' },
    { text: 'Customer ID' }, { text: 'Expiration Date' }, { text: 'Subscription Plan' }
  ];

  private placeholderData = {
    FirstName: 'John', LastName: 'Doe', PromoCode: 'ABC123',
    SubscriptionPlan: 'Premium', CustomerID: '123456',
    ExpirationDate: '2024-12-31', SupportEmail: 'support@example.com',
    SupportPhoneNumber: '+1-800-555-5555', CompanyName: 'Example Inc.'
  };

  private textToValueMap: { [key: string]: string } = {
    'First Name': 'FirstName', 'Last Name': 'LastName', 'Support Email': 'SupportEmail',
    'Company Name': 'CompanyName', 'Promo Code': 'PromoCode',
    'Support Phone Number': 'SupportPhoneNumber', 'Customer ID': 'CustomerID',
    'Expiration Date': 'ExpirationDate', 'Subscription Plan': 'SubscriptionPlan'
  };

  private data: { text: string; value: string }[] = [
    { text: 'First Name', value: 'FirstName' },
    { text: 'Last Name', value: 'LastName' },
    { text: 'Support Email', value: 'SupportEmail' },
    { text: 'Company Name', value: 'CompanyName' },
    { text: 'Promo Code', value: 'PromoCode' },
    { text: 'Support Phone Number', value: 'SupportPhoneNumber' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Expiration Date', value: 'ExpirationDate' },
    { text: 'Subscription Plan', value: 'SubscriptionPlan' }
  ];

  private fieldsData: FieldsModel = { text: 'text', value: 'value' };

  private actionBegin = (args: ActionBeginEventArgs) => {
    if (args.requestType === 'EnterAction' && this.mentionObj?.element.classList.contains('e-popup-open')) {
      args.cancel = true;
    }
  };

  private actionComplete = (e: ActionCompleteEventArgs) => {
    const tb = this.rteObj?.getToolbar();
    const merge = tb?.querySelector('#merge_data')?.parentElement;
    const insert = tb?.querySelector('#insertField')?.parentElement;
    if (e.requestType === 'SourceCode') {
      merge?.classList.add('e-overlay');
      insert?.classList.add('e-overlay');
    } else if (e.requestType === 'Preview') {
      merge?.classList.remove('e-overlay');
      insert?.classList.remove('e-overlay');
    }
  };

  private blur = () => {
    this.range = this.selection.getRange(document);
    this.saveSelection = this.selection.save(this.range, document);
  };

  private onDropDownClose = () => this.rteObj?.focusIn();

  private onItemSelect = (args: { item: { text: string } }) => {
    if (!args.item.text) return;
    const val = this.textToValueMap[args.item.text].trim();
    this.rteObj?.formatter.editorManager.nodeSelection.restore();
    this.rteObj?.executeCommand(
      'insertHTML',
      `<span contenteditable="false" class="e-mention-chip"><span>{{${val}}}</span></span>&nbsp;`,
      { undo: true }
    );
  };

  
private displayTemplate = (data: { value: string }) => (
  <span>{`{{${data.value}}}`}</span>
);

  private onClickHandler = () => {
    if (!this.rteObj) return;
    const content = this.rteObj.value;
    const merged = this.replacePlaceholders(content, this.placeholderData);
    if (this.rteObj.formatter.getUndoRedoStack().length === 0) {
      this.rteObj.formatter.saveData();
    }
    this.rteObj.value = merged;
    this.rteObj.formatter.saveData();
  };

  private replacePlaceholders = (template: string, data: { [k: string]: string }) =>
    template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => data[key.trim()] ?? _);

  public render() {
    return (
      <div>
        <RichTextEditorComponent
          ref={r => (this.rteObj = r)}
          value={this.value}
          id="mailMergeEditor"
          toolbarSettings={this.toolbarSettings}
          placeholder={this.placeholder}
          blur={this.blur}
          actionComplete={this.actionComplete}
          actionBegin={this.actionBegin}
          saveInterval={1}
        >
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar, Table, PasteCleanup]} />
        </RichTextEditorComponent>

        <button
          className="e-control e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn"
          id="merge_data"
          style={{ width: '100%' }}
          onClick={this.onClickHandler}
        >
          <span style={{ display: 'inline-flex' }}>
            <span className="e-tbar-btn-text">Merge Data</span>
          </span>
        </button>

        <DropDownButtonComponent
          className="e-rte-dropdown-btn e-rte-dropdown-popup e-rte-dropdown-items e-rte-elements e-rte-dropdown-menu"
          items={this.itemsName}
          content='<span style="display:inline-flex"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>'
          select={this.onItemSelect}
          close={this.onDropDownClose}
          id="insertField"
        />

        <MentionComponent
          ref={m => (this.mentionObj = m)}
          id="mentionEditor"
          target="#mailMergeEditor"
          mentionChar={this.mentionChar}
          showMentionChar={true}
          allowSpaces={true}
          dataSource={this.data}
          fields={this.fieldsData}
          popupWidth="250px"
          popupHeight="200px"
          displayTemplate={this.displayTemplate}
        />
      </div>
    );
  }
}

export default App;
{% endraw %}