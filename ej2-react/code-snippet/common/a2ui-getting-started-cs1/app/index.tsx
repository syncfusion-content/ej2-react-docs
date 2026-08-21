import { useState, useEffect, useRef } from 'react';
import { syncfusionCatalog, SyncfusionA2UIProvider } from '@syncfusion/ej2-react-a2ui';
import { MessageProcessor } from '@a2ui/web_core/v0_9';
import './../index.css';

// Minimal A2UI message list that renders a Syncfusion Grid with two employee rows.
// processMessages() accepts A2uiMessage[] (one message per array item).
const MESSAGES = [
    {
        version: 'v0.9',
        createSurface: { surfaceId: 'surface-1', catalogId: 'syncfusion-a2ui-catalog' },
    },
    {
        version: 'v0.9',
        updateComponents: {
            surfaceId: 'surface-1',
            components: [
                { id: 'root', component: 'Column', children: ['grid1'] },
                {
                    id: 'grid1',
                    component: 'SyncfusionDataGrid',
                    width: '100%',
                    height: '320px',
                    dataSource: { path: '/rows' },
                    allowPaging: true,
                    pageSettings: { pageSize: 5 },
                    allowSorting: true,
                    columns: [
                        { field: 'id', headerText: 'Employee ID', width: 140 },
                        { field: 'name', headerText: 'Name', width: 180 },
                        { field: 'department', headerText: 'Department', width: 160 },
                    ],
                },
            ],
        },
    },
    {
        version: 'v0.9',
        updateDataModel: {
            surfaceId: 'surface-1',
            path: '/rows',
            value: [
                { id: 'EMP001', name: 'Emma Johnson', department: 'Engineering' },
                { id: 'EMP002', name: 'James Wilson', department: 'Sales' },
            ],
        },
    },
];

function App() {
    const [surface, setSurface] = useState(null);

    const processor = useRef(
        new MessageProcessor([syncfusionCatalog]),
    ).current;

    useEffect(() => {
        const sub = processor.onSurfaceCreated(setSurface);
        processor.processMessages(MESSAGES);
        return () => sub.unsubscribe();
    }, [processor]);

    return (
        <div>
            {surface && <SyncfusionA2UIProvider surface={surface} />}
        </div>
    );
}
export default App;
