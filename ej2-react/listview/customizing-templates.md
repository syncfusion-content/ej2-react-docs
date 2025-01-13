---
layout: post
title: Customizing templates in React Listview component | Syncfusion
description: Learn here all about Customizing templates in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Customizing templates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customizing templates in React Listview component

The ListView component allows customization of list items, group titles, and header titles through various template options.

## Header template

The ListView header can be customized with the help of [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-view/#headertemplate) property.

To customize header template in your application, Declare custom React elements within the function which returns `JSX.Element` and assign it to `headerTemplate` property along with [`showHeader`](https://ej2.syncfusion.com/react/documentation/api/list-view/#showheader) property as `true` to display the ListView header.



```ts

function headerTemplate(data): JSX.Element {
    return (
        <div className="header-content">
          <span>Header</span>
        </div>
  )};

return (
    <ListViewComponent id='list'
            dataSource={listData}
            headerTemplate= {headerTemplate}
            showHeader = {true} >
    </ListViewComponent>
)

```

```ts
function headerTemplate(data) {
    return (<div className="header-content">
          <span>Header</span>
        </div>);
}
;
return (<ListViewComponent id='list' dataSource={listData} headerTemplate={headerTemplate} showHeader={true}>
    </ListViewComponent>);
```

In the below example, we have rendered Listview with customized header which contains search, add and sort buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/header-template-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/header-template-cs1" %}

## Template

The ListView items can be customized with the help of [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property.

To customize list items in your application, Declare custom React elements within the function which returns `JSX.Element` and assign it to `template` property.



```ts

function template(data): JSX.Element {
    return (
        <div className="list-tem">
          <span>{data.text}</span>
        </div>
  )};

return (
    <ListViewComponent id='list'
            dataSource={listData}
            template= {template} >
    </ListViewComponent>
)

```

```ts
function template(data) {
    return (<div className="list-tem">
          <span>{data.text}</span>
        </div>);
}
;
return (<ListViewComponent id='list' dataSource={listData} template={template}>
    </ListViewComponent>);
```

We provided the following built-in CSS classes to customize the list-items. Refer to the following table.

| CSS class        | Description           |
| ------------- |-------------|
| e-list-template, e-list-wrapper | These classes are used to differentiate normal and template rendering, which are mandatory for template rendering. The `e-list-template` class should be added to the root of the ListView element and `e-list-wrapper` class should be added to the template element wrapper <br/><br/>`<ListViewComponent`<br/> `cssClass="e-list-template"`<br/>`template={this.template}>`<br/> `</ListViewComponent>`<br/><br/>`template(data): JSX.Element {`<br/> `return (`<br/>`<div className="e-list-wrapper"></div>`<br/>`)};`
| e-list-content | This class is used to align list content and it should be added to the content element <br/><br/> `template(data): JSX.Element {`<br/>`return (` <br/>`<div className="e-list-wrapper">`<br/>`<span className="e-list-content">ListItem</span>`<br/>`</div>`<br/>`)};`|
| e-list-avatar | This class is used for avatar customization. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/react/documentation/avatar/getting-started) classes <br/> <br/> `template(data): JSX.Element {`<br/> `return (`<br/> `<div className="e-list-wrapper e-list-avatar">`<br/> `<span className="e-avatar e-avatar-circle">MR</span>`<br/> `<span className="e-list-content">ListItem</span>`<br/> `</div>`<br/> `)};`
| e-list-avatar-right | This class is used to align avatar to right side of the list item. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](https://ej2.syncfusion.com/react/documentation/avatar/getting-started) classes <br/><br/> `<div className="e-list-wrapper``e-list-avatar-right``">` <br/> `<span className="e-list-content">ListItem</span>`<br/>`<span className="e-avatar e-avatar-circle">MR</span>`<br/> `</div>`|
| e-list-badge | This class is used for badge customization .It should be added to the template element wrapper. After adding it, we can customize our element with [Badge](https://ej2.syncfusion.com/react/documentation/badge/getting-started) classes <br/><br/>`template(data): JSX.Element {`<br/> `return (`<br/>`<div className="e-list-wrapper e-list-avatar-right">`<br/>`<span className="e-list-content">ListItem</span>`<br/>`<span className="e-avatar e-avatar-circle">MR</span>`<br/>`</div>`<br/>`)};`|
| e-list-multi-line | This class is used for multi-line customization. It should be added to the template element wrapper. After adding it, we can customize List item's header and description <br/><br/>`template(data): JSX.Element {`<br/>`return (`<br/>`<div className="e-list-wrapper e-list-multi-line">`<br/>`<span className="e-list-content">ListItem</span>`<br/>`</div>`<br/>`)};`|
| e-list-item-header |This class is used to align a list header and it should be added to the header element along with the multi-line class <br/><br/> `template(data): JSX.Element {`<br/> `return (`<br/> `<div className="e-list-wrapper e-list-multi-line">`<br/> `<span className="e-list-item-header">ListItem Header</span>`<br/> `<span className="e-list-content">ListItem</span>`<br/> `</div>`<br/> `)};`

> **Note:** If you are using `Avatar` in ListView templates, you need to add `Layouts` component's styles as shown below in your `src/App.css` file:
>
> ```css
> @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
> ```

In the below example, we have customized list items like `Contact` app with our avatar component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/avatar-temp-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/avatar-temp-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/avatar-temp-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/avatar-temp-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/avatar-temp-cs1" %}

## Group template

The ListView group header can be customized with the help of [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-view/#grouptemplate) property.

To customize the group template in your application, Declare custom React elements within the function which returns `JSX.Element` and assign it to `groupTemplate` property.



```ts

function groupTemplate(data: any): JSX.Element {
    return(
        <div>
            <span className='category'>{data.items[0].category}</span>
            <span className="count"> {data.items.length} Item(s)</span>
        </div>
    );
}

return (
    <ListViewComponent id='list'
            dataSource={listData}
            groupTemplate= {groupTemplate} >
    </ListViewComponent>
)

```

```ts
function groupTemplate(data) {
    return (<div>
            <span className='category'>{data.items[0].category}</span>
            <span className="count"> {data.items.length} Item(s)</span>
        </div>);
}
return (<ListViewComponent id='list' dataSource={listData} groupTemplate={groupTemplate}>
    </ListViewComponent>);
```

In the below example, we have grouped Listview based on the category. The category of each list item should be mapped with [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/list-view/fieldSettingsModel/#groupby) field of the data. We have also displayed grouped list items count in the group list header.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/item-count-temp-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/item-count-temp-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/item-count-temp-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/item-count-temp-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/item-count-temp-cs1" %}
