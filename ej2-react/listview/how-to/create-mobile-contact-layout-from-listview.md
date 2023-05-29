---
layout: post
title: Create mobile contact layout from listview in React Listview component | Syncfusion
description: Learn here all about Create mobile contact layout from listview in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Create mobile contact layout from listview 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create mobile contact layout from listview in React Listview component

You can customize the ListView using the [template](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property. Refer to the following steps to customize ListView as mobile contact view with our `ej2-avatar`.

* Render the ListView with [dataSource](https://ej2.syncfusion.com/react/documentation/api/list-view/#datasource) that has avatar data. You can set avatar data as either text or class names. Refer to the following codes.



  ```ts

   let dataSource = [
    {
      text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01"
    },
    {
      text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: ""
   }
  ];

  ```

  ```ts
   let dataSource = [
     {
         text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01"
     },
     {
         text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: ""
     }
   ];
  ```

* Set `avatar` classes in ListView template to customize contact icon. In the following codes, medium size avatar has been set using the class name `e-avatar e-avatar-circle` from data source.



  ```ts

   function listTemplate(data): JSX.Element {
    let letterAvatar = <span className='e-avatar e-avatar-circle'>{data.avatar}</span>
    let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-circle`}></span>
 
     return (
        <div className='e-list-wrapper e-list-multi-line e-list-avatar'>
            {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
            <span className="e-list-content">{data.contact}</span>
        </div>
    );
  }

  ```

  ```ts
   function listTemplate(data) {
     let letterAvatar = <span className='e-avatar e-avatar-circle'>{data.avatar}</span>;
     let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-circle`}></span>;
     return (<div className='e-list-wrapper e-list-multi-line e-list-avatar'>
            {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
            <span className="e-list-content">{data.contact}</span>
        </div>);
    }
  ```

> Avatars can be set in different sizes in avatar classes. To know more about avatar classes, refer to [Avatar](https://ej2.syncfusion.com/react/demos/#/material/avatar/default).

* Sort the contact names using the [`sortOder`](https://ej2.syncfusion.com/react/documentation/api/list-view/#sortorder) property of ListView.

* Enable the [`showHeader`](https://ej2.syncfusion.com/react/documentation/api/list-view/#showheader) property, and set the [`headerTitle`](https://ej2.syncfusion.com/react/documentation/api/list-view/#headertitle) as `Contacts`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/avatar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/avatar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/avatar-cs1" %}