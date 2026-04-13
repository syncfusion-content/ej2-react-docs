{% raw %}
import * as React from 'react';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { getComponent, compile } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { employeeData } from './datasource';
export function AgeTemplate(props) {
    let qryBldrObj;
    let sliderObj;
    let rangeTicks = { placement: 'Before', largeStep: 5, showSmallTicks: true };
    let state = Object.assign({}, props);
    qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder');
    function fieldChange(args) {
        qryBldrObj.notifyChange(args.value, args.element, 'field');
    }
    function valueChange(args) {
        let elem = sliderObj.element;
        qryBldrObj.notifyChange(args.value, elem, 'value');
        refreshTable(qryBldrObj.getRule(elem), elem.id.split('_valuekey0')[0]);
    }
    function sliderCreated() {
        let elem = sliderObj.element;
        refreshTable(qryBldrObj.getRule(elem), elem.id.split('_valuekey0')[0]);
    }
    function myFunction(ruleID) {
        let element = document.getElementById(ruleID + '_section');
        if (element.className.indexOf('e-hide') > -1) {
            element.className = element.className.replace('e-hide', '');
            document.getElementById(ruleID + '_option').textContent = 'Hide Details';
        }
        else {
            element.className += ' e-hide';
            document.getElementById(ruleID + '_option').textContent = 'View Details';
        }
    }
    function refreshTable(rule, ruleID) {
        let template = '<tr><td>${EmployeeID}</td><td>${FirstName}</td><td>${Age}</td></tr>';
        let compiledFunction = compile(template);
        let predicate = qryBldrObj.getPredicate({ condition: 'and', rules: [rule] });
        let dataManagerQuery = new Query().select(['EmployeeID', 'FirstName', 'Age']).where(predicate);
        let result = new DataManager(employeeData).executeLocal(dataManagerQuery);
        let table = document.getElementById(ruleID + '_datatable');
        if (result.length) {
            table.style.display = 'block';
        }
        else {
            table.style.display = 'none';
        }
        table.querySelector('tbody').innerHTML = '';
        result.forEach((data) => {
            table.querySelector('tbody').appendChild(compiledFunction(data)[0].querySelector('tr'));
        });
    }
    const args = state;
    return (<div className="e-rule e-rule-template">
          <div className="e-rule-filter e-custom-filter">
            <DropDownListComponent change={fieldChange} fields={args.fields} dataSource={args.columns} value={args.rule.field}/>
          </div>
    <div>
      <div className="e-slider-value">
        <SliderComponent ticks={rangeTicks} ref={(scope) => { sliderObj = scope; }} id={args.ruleID + '_valuekey0'} change={valueChange} created={sliderCreated} value={args.rule.value} min={30} max={50}/>
      </div>
      <div className="e-rule-btn">
        <button id={args.ruleID + '_option'} onClick={myFunction.bind(this, args.ruleID)} className="e-primary e-btn e-small">
          View Details
        </button>
        <button className="e-removerule e-rule-delete e-css e-btn e-small e-round">
          <span className="e-btn-icon e-icons e-delete-icon"/>
        </button>
      </div>
    </div>
          <div id={args.ruleID + '_section'} className="e-rule-value-group e-hide">
              <div>
                  <table id={args.ruleID + '_datatable'} className='e-rule-table e-hide'>
                      <thead>
                          <tr><th>EmployeeID</th><th>FirstName</th><th>Age</th></tr>
                      </thead>
                      <tbody>
                      </tbody>
                  </table>     
              </div>
          </div>
        </div>);
}
{% endraw %}