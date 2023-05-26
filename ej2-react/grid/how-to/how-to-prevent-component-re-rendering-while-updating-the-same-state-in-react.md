---
layout: post
title: How to prevent component re-rendering while updating the same state in React | Syncfusion
description: Learn here all about How to prevent component re-rendering while updating the same state in React in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: How to prevent component re-rendering while updating the same state in React
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to prevent component re-rendering while updating the same state in React

The React component will automatically re-render whenever the state is updated. If you need to prevent unnecessary re-rendering while updating the same state value by using the `useCallback` or `useMemo` hook. This utilization of both `useCallback` and `useMemo` hooks is to improve the overall performance.

This demonstration showcases the implementation of a Master-Detail Grid using the React `useCallback` hook. It allows users to view the details of a specific record from the Master Grid in a separate grid known as the Detail Grid. This is achieved by clicking on a particular row. The steps to accomplish this scenario are as follows:

1. In the Master Grid's [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid/#rowselected) event, you can retrieve the selected record and update the state value called "setRecord" using the React `useState` hook. By doing this, the component will automatically re-render whenever the state is modified. To optimize performance and avoid unnecessary re-renders, you can utilize the `useCallback` hook to pass the selected record from the Master Grid to the Detail Grid only when there is a change in the row index value. The row index value is updated in the "setRowIdx" state using the [rowSelecting](https://ej2.syncfusion.com/react/documentation/api/grid/#rowselecting) event of the grid. Refer to the code snippet below.

    ```typescript
        const [rowIdx, setRowIdx] = useState(null);
        const [record, setRecord] = useState(null);

        const rowSelecting = (args: any) => {
            setRowIdx(args.rowIndex);
        };

        const rowSelected = useCallback((args: any) => {
            setRecord(args.data);
        }, [rowIdx]);
    ```

2. After obtaining the value from the Master Grid, you need to filter the CustomerID data within the detail's data source based on the selected record. This filtered data should then be bound to the Detail Grid using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property within the React `useEffect` hook. By using the `useEffect` hook, the binding operation will take place after the component renders and will be triggered whenever the selected record changes. Refer to the below code snippet.

    ```typescript
        useEffect(()=>{
            let showCustomerName: HTMLElement = document.getElementById('CustomerName') as HTMLElement;
            if(props.detailRecord){
                showCustomerName.textContent = props.detailRecord.ContactName;
                detailGrid.dataSource = data.filter((record: any) => record.CustomerName === props.detailRecord.ContactName).slice(0, 5);
            }
        },[detailGrid, props.detailRecord]);
    ```

In this demonstration, the [selectedRowIndex](https://ej2.syncfusion.com/react/documentation/api/grid/#selectedrowindex) property of the Grid was used to automatically select the second row. Based on that, Detail-Grid will be loaded with data during the initial rendering.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="Detail.jsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/Detail.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="Detail.tsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/Detail.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/masterdetail-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/masterdetail-cs1" %}

 > To prevent unnecessary re-rendering, you can utilize the `useMemo` and `useCallback` hook.