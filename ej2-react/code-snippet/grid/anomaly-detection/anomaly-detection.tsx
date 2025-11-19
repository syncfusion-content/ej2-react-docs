import React, { useEffect, useRef, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { machineDataList, type MachineData } from './datasource.ts';
import { getAzureChatAIRequest } from './openai-model.ts';
import './App.css'

const AnomalyDetectionGrid: React.FC = () => {
    const gridRef = useRef<GridComponent>(null);
    const [AIgeneratedData, setAIgeneratedData] = useState<MachineData[]>([]);

    const handleDetectAnomaly = async () => {
        if (!gridRef.current) return;
        gridRef.current.showSpinner();

        const gridReportJson = JSON.stringify(gridRef.current.dataSource);
        const userInput = generatePrompt(gridReportJson);

        try {
            const aiOutput = await getAzureChatAIRequest({ messages: [{ role: 'user', content: userInput }] });
            const cleanedOutput = aiOutput.replace('```json', '').replace('```', '');
            const parsedData: MachineData[] = JSON.parse(cleanedOutput);

            gridRef.current.hideSpinner();
            setAIgeneratedData(parsedData);
        } catch (error) {
            console.error('Error detecting anomaly:', error);
            gridRef.current.hideSpinner();
        }
    };

    const generatePrompt = (data: string): string => {
        return `Given the following datasource are bounded in the Grid table\n\n${data}.\n Return the anomaly data rows (ie. pick the ir-relevant datas mentioned in the corresponding table) present in the table mentioned above as like in the same format provided do not change the format. Example: Watch out the production rate count and the factors that is used to acheive the mentioned production rate(Temprature, Pressure, Motor Speed) If the production rate is not relevant to the concern factors mark it as anomaly Data. If it is anomaly data then due to which column data it is marked as anomaly that particular column name should be updated in the AnomalyFieldName. Also Update the AnomalyDescription stating that due to which reason it is marked as anomaly a short description. Example if the data is marked as anomaly due to the Temperature column, Since the mentioned temperature is too high than expected, it is marked as anomaly data.\n\nGenerate an output in JSON format only and Should not include any additional information or contents in response`;
    };
    
    const customizeCell = (args: any) => {
        if (!isNullOrUndefined(AIgeneratedData) && AIgeneratedData.length > 0) {
            let isAnomalyData = false;
            AIgeneratedData.forEach(e => {
                if (!isNullOrUndefined(e.AnomalyFieldName) &&
                    e.MachineID === args.data.MachineID &&
                    (e.AnomalyFieldName === args.column.field || args.column.field === 'AnomalyDescription')) {
                    isAnomalyData = true;
                }
            });
            if (isAnomalyData) {
                args.cell.classList.add('anomaly-cell');
                args.cell.classList.remove('normal-cell');
            } else if (args.column.field === 'AnomalyDescription') {
                args.cell.classList.add('normal-cell');
                args.cell.classList.remove('anomaly-cell');
            }
        } else if (args.column.field === 'AnomalyDescription') {
            args.cell.classList.add('normal-cell');
            args.cell.classList.remove('anomaly-cell');
        }
    };
    
    useEffect(() => {
        if (AIgeneratedData.length > 0 && gridRef.current) {
            gridRef.current.showColumns(['Anomaly Description']); 
            AIgeneratedData.forEach(item => {
                gridRef.current?.setRowData(item.MachineID, item);
            });
            gridRef.current.refresh(); 
        }
    }, [AIgeneratedData]);

    return (
        <div>
            <ButtonComponent id="anomaly" isPrimary={true} onClick={handleDetectAnomaly} style={{ marginBottom: '10px' }}>
                Detect Anomaly Data
            </ButtonComponent>
            <GridComponent ref={gridRef} dataSource={machineDataList} queryCellInfo={customizeCell} enableHover={false} enableStickyHeader={true}
                allowTextWrap={true} allowSelection={false} rowHeight={75} height={450} >
                <ColumnsDirective>
                    <ColumnDirective field="MachineID" isPrimaryKey={true} headerText="Machine ID" textAlign="Right" width="85" />
                    <ColumnDirective field="Temperature" headerText="Temperature (C)" textAlign="Right" width="120" />
                    <ColumnDirective field="Pressure" headerText="Pressure (psi)" textAlign="Right" width="100" />
                    <ColumnDirective field="Voltage" headerText="Voltage (V)" textAlign="Right" width="100" />
                    <ColumnDirective field="MotorSpeed" headerText="Motor Speed (rpm)" textAlign="Right" width="140" />
                    <ColumnDirective field="ProductionRate" headerText="Production Rate (units/hr)" textAlign="Right" width="140" />
                    <ColumnDirective field="AnomalyDescription" visible={false} headerText="Anomaly Description" width="290" />
                </ColumnsDirective>
            </GridComponent>
        </div>
    );
};

export default AnomalyDetectionGrid;