---
layout: post
title: Customize as chat window in React ListView component | Syncfusion
description: Learn here all about Customize ListView as chat window in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Customize ListView as chat window 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize ListView as chat window in React ListView component

The ListView can be customizable as a chat window. To achieve this, use ListView [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property and [`Avatar`](../../avatar/getting-started) component.

* The ListView template property is used to showcase the ListView as a chat window.
* The Avatar component is used to design the image of the contact person.

Refer the below template code snippet for Template of chat window.



```ts
function listTemplate(data: any): JSX.Element {
        let sendertemplate = <div className='settings'><div id="content"><div className="name">{data.text}</div><div id="info">{data.contact}</div></div>{
                    data.avatar !== "" ?
                        <div id="image"><span className='e-avatar img1 e-avatar-circle'>{data.avatar}</span></div> : <div id="image"><span className={`${data.pic} img1 e-avatar e-avatar-circle`}></span></div>
                }</div>
        let receivertemplate = <div className='settings'>{
                    data.avatar !== "" ?
                        <div id="image2"><span className='e-avatar img2 e-avatar-circle'>{data.avatar}</span></div> : <div id="image2"><span className={`${data.pic} img2 e-avatar e-avatar-circle`}></span></div>
                }<div id="content1"><div className="name1">{data.text}</div><div id="info1">{data.contact}</div></div></div>


        return (
            <div>
                {data.chat !== "receiver" ? (sendertemplate) : (receivertemplate)}
            </div>
        );
    }
```

```ts
function listTemplate(data) {
    let sendertemplate = <div className='settings'><div id="content"><div className="name">{data.text}</div><div id="info">{data.contact}</div></div>{data.avatar !== "" ?
            <div id="image"><span className='e-avatar img1 e-avatar-circle'>{data.avatar}</span></div> : <div id="image"><span className={`${data.pic} img1 e-avatar e-avatar-circle`}></span></div>}</div>;
    let receivertemplate = <div className='settings'>{data.avatar !== "" ?
            <div id="image2"><span className='e-avatar img2 e-avatar-circle'>{data.avatar}</span></div> : <div id="image2"><span className={`${data.pic} img2 e-avatar e-avatar-circle`}></span></div>}<div id="content1"><div className="name1">{data.text}</div><div id="info1">{data.contact}</div></div></div>;
    return (<div>
                {data.chat !== "receiver" ? (sendertemplate) : (receivertemplate)}
            </div>);
}
```

## Chat order in template

In the ListView template, we have rendered the list items based on receiver and sender information from dataSource of the ListView.

## Adding messages to chat window

    * Use textbox to get message from user.
    * Add the textbox message to the ListView dataSource using [addItem](https://ej2.syncfusion.com/react/documentation/api/list-view/#additem) method.



```ts

function btnClick() {
    let value = textboxEle.value;
    listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
    textboxEle.value ="";
}

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/chat-window-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/chat-window-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/chat-window-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/chat-window-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/chat-window-cs1" %}