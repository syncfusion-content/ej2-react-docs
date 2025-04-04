---
layout: post
title: Customize ListView with dynamic tags | Syncfusion
description: Learn here all about Customize ListView with dynamic tags in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Customize ListView with dynamic tags 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize ListView with dynamic tags in React ListView component

You can customize the ListView items using the [`template`](https://ej2.syncfusion.com/react/documentation/api/list-view/#template) property. In this example, dynamic tags are added to and removed from list items using another ListView. Follow these steps to achieve this:

* Render the ListView with a data source, and add a button element to each list item using the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/list-view/#actioncomplete) event. Refer to the following code sample for the actionComplete event:

   ```ts
    // The actionComplete event for first ListView to add the button
      function addButton(args) {
       let buttonObj = { obj: ButtonComponent, prop: { iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round' } };
        let ele = document.getElementsByClassName("e-but");
       for (let i: number = 0; i < ele.length; i++) {
        buttonObj.obj = new ButtonComponent(buttonObj.prop);
        buttonObj.obj.appendTo(ele[i]);
     }
   }

  ```

* Initialize dynamic ListView with required property that holds the tags of parent ListView, and bind the [`select`](https://ej2.syncfusion.com/react/documentation/api/list-view/#select) event (triggers when the list item is selected), in which you can get and add the selected item value as tags into parent ListView. Refer to the following code sample.

   ```ts

     //Select the event that is is rendered inside dialog for ListView
     function addTag(e) {
       let listTag = document.createElement('span');
       listTag.className = 'advanced-option';
       let labelElem = document.createElement('span');
       labelElem.className = 'label';
       let deleteElem = document.createElement('span');
       deleteElem.className = 'delete';
       deleteElem.onclick = removeTag;
       labelElem.innerHTML = e.target.textContent;
       listTag.appendChild(labelElem);
       listTag.appendChild(deleteElem);
       let tag = document.createElement('span');
       tag.className = 'advanced-option-list';
       tag.appendChild(listTag);
       listviewInstance.element.querySelector('.e-active').appendChild(tag);
      }
  ```

* Render the dialog component with empty content and append the created dynamic ListView object to the dialog on [`created`](https://ej2.syncfusion.com/react/documentation/api/dialog/#created) event.

* Bind the click event for button icon (+) to update the ListView data source with tags, and open the dialog with this dynamic ListView. Refer to the following code sample.

  ```ts
    //Method to hide/show the dialog and update the ListView data source
   function renderDialog(id) {
       if (document.getElementsByClassName('e-popup-open').length !== 0) {
        dialogInstance.hide();
     }
      else {
        let listElem = document.getElementById('dialog').querySelector("#list");
        let listIns = document.getElementById('dialog').querySelector("#list") && document.getElementById('dialog').querySelector("#list").ej2_instances && document.getElementById('dialog').querySelector("#list").ej2_instances[0] ? document.getElementById('dialog').querySelector("#list").ej2_instances[0] : undefined;
        if (listIns) {
            listIns.dataSource = datasource[id];
            listIns.fields = fields;
            listIns.addEventListener('select', () => { addTag(event); });
            listIns.dataBind();
            listIns.appendTo(listElem);
            dialogInstance.position = { X: document.querySelector('.e-add-icon').getBoundingClientRect().left + 50, Y: document.querySelector('.e-add-icon').getBoundingClientRect().top - 5 };
            dialogInstance.show();
        }
    }
   }
  ```

* Bind the click event with added dynamic tags to remove it. Refer to the following code sample.

  ```ts

   //Method to remove the list item
   function removeTag() {
     parentNode.parentNode.remove();
  }

  ```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/dynamic-tag-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/dynamic-tag-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/dynamic-tag-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/dynamic-tag-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/dynamic-tag-cs1" %}
