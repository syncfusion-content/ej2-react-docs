---
layout: post
title: Mail Merge in React Rich Text Editor | Syncfusion
description: Learn how to use and customize the Mail Merge in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Mail Merge
documentation: ug
domainurl: ##DomainURL##
---

# Mail merge in React Rich Text Editor component

The Rich Text Editor can be customized to implement **Mail Merge** functionality by inserting placeholders into the editor using custom toolbar items. These placeholders are later replaced with actual data to generate personalized content such as letters, invoices, and reports.

This feature simplifies the creation of dynamic documents by allowing users to insert merge fields that are automatically populated with real data during content generation.

## Adding custom toolbar items for inserting merge fields

To enable mail merge functionality, the Rich Text Editor toolbar is extended with two custom buttons: `Insert Field` and `Merge Data`. These buttons are added using the `template` property in [toolbarSettings.items](https://helpej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettingsModel#items), which points to custom HTML elements (#insertField and #merge_data).

- **Insert Field:** Opens a dropdown list of merge fields for inserting placeholders like `{{FirstName}}` into the editor.
- **Merge Data:** Replaces all placeholders in the editor with actual values from a predefined data source.

```ts
function App() {
    const items: (string | IToolbarItems)[] = ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|',
      'CreateLink', 'Image', 'CreateTable', '|',
      { tooltipText: 'Merge Data', template: '#merge_data', command: 'Custom' },
      { tooltipText: 'Insert Field', template: '#insertField', command: 'Custom' },
      'SourceCode', '|', 'Undo', 'Redo'
    ]
    //Rich Text Editor ToolbarSettings
    const toolbarSettings: ToolbarSettingsModel = {
        items: items
    };
  return (
    <RichTextEditorComponent  toolbarSettings={toolbarSettings}></RichTextEditorComponent>
  );
}

export default App;
```

## Using DropDownButton for selecting placeholders

The **DropDownButton** component displays a list of merge fields such as First Name, Last Name, and Company Name. When a user selects an item, the corresponding placeholder (e.g., {{FirstName}}) is inserted at the current cursor position using the `insertHTML` command.

```ts
function App() {
    let itemsName: { text: string }[] = [
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
    function onItemSelect(args: { item: { text: string } }) {
      if (args.item.text != null) {
          const value = textToValueMap[args.item.text];
          const trimmedValue = value.trim();
          rteObj.formatter.editorManager.nodeSelection.restore();
          rteObj.executeCommand(
              'insertHTML',
              `<span contenteditable="false" class="e-mention-chip"><span>{{${trimmedValue}}}</span></span>&nbsp;`,
              { undo: true }
          );
      }
  }
  return ( <DropDownButtonComponent
              className="e-rte-dropdown-btn e-control e-dropdown-btn e-lib e-btn e-rte-dropdown-popup e-rte-dropdown-items e-formats-tbar-btn e-rte-elements e-rte-dropdown-menu"
              items={itemsName}
              content='<span style="display: inline-flex;"><span class="e-rte-dropdown-btn-text">Insert Field</span></span>'
              select={onItemSelect}
              id="insertField"
          ></DropDownButtonComponent>
  );
}

export default App;
```

## Populating merge fields using Mention

The **Mention** component provides an alternative way to insert placeholders by typing the <code>&#123;&#123;</code> character inside the editor. A popup list of merge fields appears, allowing quick selection without using the toolbar.

```ts
function App() {
    const fieldsData: { text: string; value: string } = { text: 'text', value: 'value' };
    const data: { text: string; value: string }[] = [
        { text: 'First Name', value: 'FirstName' },
        { text: 'Last Name', value: 'LastName' },
        { text: 'Support Email', value: 'SupportEmail' },
        { text: 'Company Name', value: 'CompanyName' },
        { text: 'Promo Code', value: 'PromoCode' },
        { text: 'Support Phone Number', value: 'SupportPhoneNumber' },
        { text: 'Customer ID', value: 'CustomerID' },
        { text: 'Expiration Date', value: 'ExpirationDate' },
        { text: 'Subscription Plan', value: 'SubscriptionPlan' },
    ];
    function displayTemplate(data: { value: string }) {
      return (<React.Fragment>
          {data.value}&#125;&#125;
      </React.Fragment>);
    }
   
  return (
    <MentionComponent id="mentionEditor" target="#mailMergeEditor" mentionChar="{{" showMentionChar={true} allowSpaces={true} dataSource={data} fields={fieldsData} popupWidth="250px" popupHeight="200px" displayTemplate={displayTemplate}></MentionComponent>
  );
}

export default App;
```

## Replacing placeholders with actual data dynamically

When the **Merge Data** button is clicked, the editor content is processed to replace all placeholders with actual values from the `placeholderData` object. This is done using a regular expression in the `replacePlaceholders()` function.

```ts
function App() {
     function onClickHandler(args: any): void {
      if (rteObj) {
          let editorContent: string = rteObj.value;
          let mergedContent: string = replacePlaceholders(editorContent, placeholderData);
          if (rteObj.formatter.getUndoRedoStack().length === 0) {
              rteObj.formatter.saveData();
          }
          rteObj.value = mergedContent;
          rteObj.formatter.saveData();
      } else {
          console.log('MailMergeEditor is not initialized.');
      }
  };

  function replacePlaceholders(template: string, data: { [key: string]: string }): string {
      return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
          const value = data[key.trim()];
          return value !== undefined ? value : match;
      });
  };

 return (
    <button className="e-control e-lib e-btn e-formats-tbar-btn e-rte-elements e-tbar-btn" tabIndex={-1}id="merge_data" style={{ width: '100%' }} onClick={onClickHandler}>
        <span style={{ display: 'inline-flex' }}>
            <span className="e-tbar-btn-text">Merge Data</span>
        </span>
    </button>
  );
}
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mail-merge-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mail-merge-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/mail-merge-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/mail-merge-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/mail-merge-cs4" %}