{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent, LevelDirective, LevelsDirective } from '@syncfusion/ej2-react-treemap';
export function App() {
  return ( <TreeMapComponent 
        dataSource={[
            { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 20 },
            { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 30 },
            { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', JobGroup: 'Advertising', EmployeesCount: 40 },
            { Category: 'Employees', Country: 'USA', JobDescription: 'Management', JobGroup: 'Lead', EmployeesCount: 80 },
            { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 100 },
            { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives',  JobGroup: 'Recruiters', EmployeesCount: 30 },
            { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', JobGroup: 'Finance', EmployeesCount: 40 },
            { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
            { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 60 },
            { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', JobGroup: 'Advertising', EmployeesCount: 70 },
            { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 80 },
            { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', JobGroup: 'Lead', EmployeesCount: 10 },
            { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', JobGroup: 'Finance', EmployeesCount: 20 },
            { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 30 },
            { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', JobGroup: 'Recruiters', EmployeesCount: 50 },
            { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', JobGroup: 'Finance', EmployeesCount: 60 },
            { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 70 },
            { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', JobGroup: 'Advertising', EmployeesCount: 100 }    
        ]}
        palette= {["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"]}
        weightValuePath= 'EmployeesCount'>
        <LevelsDirective>
            <LevelDirective groupPath='Country' groupGap={10} border={{ color: 'black', width: 0.5 }} />
            <LevelDirective groupPath='JobDescription' groupGap={10} border={{ color: 'black', width: 0.5 }} />
            <LevelDirective groupPath='JobGroup' groupGap={10} border={{ color: 'black', width: 0.5 }} />
        </LevelsDirective>
    </TreeMapComponent> );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}