import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeViewComponent, FieldsSettingsModel } from '@syncfusion/ej2-react-navigations';

interface TreeData {
    id: number;
    pid?: number | null;
    name: string;
    hasChild?: boolean;
    isChecked?: boolean;
    isExpanded?: boolean;
}

function App() {

    const totalNodes: number = 8000;
    const employeesPerDept: number = 20;

    const departments: string[] = [
        'Engineering',
        'Sales',
        'Human Resources',
        'Finance',
        'Marketing',
        'Customer Support',
        'Operations',
        'Legal',
        'Research',
        'IT Infrastructure'
    ];

    const employeeRoles: string[] = [
        'Manager',
        'Senior Engineer',
        'Software Engineer',
        'Business Analyst',
        'QA Engineer',
        'Consultant',
        'Specialist',
        'Coordinator',
        'Executive',
        'Associate'
    ];

    const generateOrganizationData = (
        total: number,
        children: number
    ): TreeData[] => {

        const data: TreeData[] = [];
        let index: number = 0;
        let id: number = 1;
        let deptIndex: number = 0;

        while (index < total) {

            const deptId = id++;
            const deptName =
                departments[deptIndex % departments.length];

            const parentIndex = index;

            data[index++] = {
                id: deptId,
                pid: null,
                name: deptName,
                hasChild: false,
                isChecked: true,
                isExpanded: false
            };

            let childCount: number = 0;

            for (
                let i = 0;
                i < children && index < total;
                i++
            ) {

                const role =
                    employeeRoles[i % employeeRoles.length];

                data[index++] = {
                    id: id++,
                    pid: deptId,
                    name: `${role} - Employee ${i + 1}`,
                    isChecked: true,
                    isExpanded: false
                };

                childCount++;
            }

            if (childCount > 0) {
                data[parentIndex].hasChild = true;
            }

            deptIndex++;
        }

        return data;
    };

    const orgData: TreeData[] = generateOrganizationData(
        totalNodes,
        employeesPerDept
    );

    const fields: FieldsSettingsModel = {
        dataSource: orgData,
        id: 'id',
        parentID: 'pid',
        text: 'name',
        hasChildren: 'hasChild',
        isChecked: 'isChecked',
        expanded: 'isExpanded'
    };

    return (
        <div id="treeparent">
            <TreeViewComponent
                id="treeview"
                fields={fields}
                enableVirtualization={true}
                showCheckBox={true}
                height="400px"
            />
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));