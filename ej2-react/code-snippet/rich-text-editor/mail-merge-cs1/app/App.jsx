import React from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
  Table,
  PasteCleanup,
  Inject,
} from '@syncfusion/ej2-react-richtexteditor';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { NodeSelection } from '@syncfusion/ej2-richtexteditor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.rteObj = null;
    this.mentionObj = null;
    this.range = new Range();
    this.selection = new NodeSelection();
    this.saveSelection = null;

    this.value = `<p>Dear <span contenteditable="false" class="e-mention-chip"><span>{{FirstName}}</span></span> <span contenteditable="false" class="e-mention-chip"><span>{{LastName}}</span></span>,</p>
  <p>We are thrilled to have you with us! Your unique promotional code for this month is: <span contenteditable="false" class="e-mention-chip"><span>{{PromoCode}}</span></span>.</p>
  <p>Your current subscription plan is: <span contenteditable="false" class="e-mention-chip"><span>{{SubscriptionPlan}}</span></span>.</p>
  <p>Your customer ID is: <span contenteditable="false" class="e-mention-chip"><span>{{CustomerID}}</span></span>.</p>
  <p>Your promotional code expires on: <span contenteditable="false" class="e-mention-chip"><span>{{ExpirationDate}}</span></span>.</p>
  <p>Feel free to browse our latest offerings and updates. If you need any assistance, don't hesitate to contact us at <a href="mailto:{{SupportEmail}}"><span contenteditable="false" class="e-mention-chip"><span>{{SupportEmail}}</span></span></a> or call us at <span contenteditable="false" class="e-mention-chip"><span>{{SupportPhoneNumber}}</span></span>.</p>
  <p>Best regards,<br>The <span contenteditable="false" class="e-mention-chip"><span>{{CompanyName}}</span></span> Team</p>`;

    this.items = [
      'Bold',
      'Italic',
      'Underline',
      '|',
      'Formats',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      '|',
      'CreateLink',
      'Image',
      'CreateTable',
      '|',
      { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
      {
        tooltipText: 'Insert Field',
        template: '#insertField',
        command: 'Custom',
      },
      'SourceCode',
      '|',
      'Undo',
      'Redo',
    ];

    this.toolbarSettings = {
      items: this.items,
    };

    this.mentionChar = '{{';

    this.itemsName = [
      { text: 'First Name' },
      { text: 'Last Name' },
      { text: 'Support Email' },
      { text: 'Company Name' },
      { text: 'Promo Code' },
      { text: 'Support Phone Number' },
      { text: 'Customer ID' },
      { text: 'Expiration Date' },
      { text: 'Subscription Plan' },
    ];

    this.placeholderData = {
      FirstName: 'John',
      LastName: 'Doe',
      PromoCode: 'ABC123',
      SubscriptionPlan: 'Premium',
      CustomerID: '123456',
      ExpirationDate: '2024-12-31',
      SupportEmail: 'support@example.com',
      SupportPhoneNumber: '+1-800-555-5555',
      CompanyName: 'Example Inc.',
    };

    this.textToValueMap = {
      'First Name': 'FirstName',
      'Last Name': 'LastName',
      'Support Email': 'SupportEmail',
      'Company Name': 'CompanyName',
      'Promo Code': 'PromoCode',
      'Support Phone Number': 'SupportPhoneNumber',
      'Customer ID': 'CustomerID',
      'Expiration Date': 'ExpirationDate',
      'Subscription Plan': 'SubscriptionPlan',
    };

    this.data = this.itemsName.map((item) => ({
      text: item.text,
      value: this.textToValueMap[item.text],
    }));

    this.fieldsData = { text: 'text', value: 'value' };
  }

  actionBegin = (args) => {
    if (
      args.requestType === 'EnterAction' &&
      this.mentionObj?.element.classList.contains('e-popup-open')
    ) {
      args.cancel = true;
    }
  };

  actionComplete = (e) => {
    const toolbar = this.rteObj?.getToolbar();
    if (!toolbar) return;

    const mergeBtn = toolbar.querySelector('#merge_data')?.parentElement;
    const insertBtn = toolbar.querySelector('#insertField')?.parentElement;

    if (e.requestType === 'SourceCode') {
      mergeBtn?.classList.add('e-overlay');
      insertBtn?.classList.add('e-overlay');
    } else if (e.requestType === 'Preview') {
      mergeBtn?.classList.remove('e-overlay');
      insertBtn?.classList.remove('e-overlay');
    }
  };

  blur = () => {
    this.range = this.selection.getRange(document);
    this.saveSelection = this.selection.save(this.range, document);
  };

  onDropDownClose = () => {
    if (this.rteObj) {
      this.rteObj.focusIn();
    }
  };

  onItemSelect = (args) => {
    if (args.item.text) {
      const value = this.textToValueMap[args.item.text];
      const trimmedValue = value.trim();
      this.rteObj.formatter.editorManager.nodeSelection.restore();
      this.rteObj.executeCommand(
        'insertHTML',
        `<span contenteditable="false" class="e-mention-chip"><span>{{${trimmedValue}}}</span></span>&nbsp;`,
        { undo: true }
      );
    }
  };

  displayTemplate = (data) => {
    return <>{`${data.value}}}`}</>;
  };
  onClickHandler = () => {
    if (this.rteObj) {
      const editorContent = this.rteObj.value;
      const mergedContent = this.replacePlaceholders(
        editorContent,
        this.placeholderData
      );
      if (this.rteObj.formatter.getUndoRedoStack().length === 0) {
        this.rteObj.formatter.saveData();
      }
      this.rteObj.value = mergedContent;
      this.rteObj.formatter.saveData();
    } else {
      console.log('MailMergeEditor is not initialized.');
    }
  };

  replacePlaceholders = (template, data) => {
    return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
      const value = data[key.trim()];
      return value !== undefined ? value : match;
    });
  };

  render() {
    return (
      <div>
        <RichTextEditorComponent
          ref={(richtexteditor) => {
            this.rteObj = richtexteditor;
          }}
          value={this.value}
          id="mailMergeEditor"
          toolbarSettings={this.toolbarSettings}
          placeholder="Type @ and tag the name"
          blur={this.blur}
          actionComplete={this.actionComplete}
          actionBegin={this.actionBegin}
          saveInterval={1}
        >
          <Inject
            services={[
              HtmlEditor,
              Toolbar,
              Image,
              Link,
              QuickToolbar,
              Table,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>

        <button
          className="e-control e-lib e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn"
          tabIndex={-1}
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
          content={
            <span style={{ display: 'inline-flex' }}>
              <span className="e-rte-dropdown-btn-text">Insert Field</span>
            </span>
          }
          select={this.onItemSelect}
          close={this.onDropDownClose}
          id="insertField"
        />

        <MentionComponent
          ref={(scope) => {
            this.mentionObj = scope;
          }}
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
