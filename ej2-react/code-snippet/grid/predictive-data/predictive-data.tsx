import React, { useEffect, useRef, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { predictiveData, type predictive } from './datasource.ts';
import { getAzureChatAIRequest } from './openai-model.ts';
import './App.css'

const PredictiveGrid: React.FC = () => {
    const gridRef = useRef<GridComponent>(null);
    const [AIgeneratedData, setAIgeneratedData] = useState<predictive[]>([]);

    const handleCalculateGrade = async () => {
        if (!gridRef.current) return;
        gridRef.current.showSpinner();

        const prompt = `Final year GPA column should updated based on GPA of FirstYearGPA, SecondYearGPA and ThirdYearGPA columns. Total GPA should update based on average of all years GPA. Total Grade update based on total GPA. Updated the grade based on following details, 0 - 2.5 = F, 2.6 - 2.9 = C, 3.0 - 3.4 = B, 3.5 - 3.9 = B+, 4.0 - 4.4 = A, 4.5 - 5 = A+. average value decimal should not exceed 1 digit.`;
        const gridReportJson = JSON.stringify(gridRef.current.dataSource);
        const userInput = generatePrompt(gridReportJson, prompt);

        try {
            const aiOutput = await getAzureChatAIRequest({
                messages: [{ role: 'user', content: userInput }]
            });

            const cleanedOutput = aiOutput.replace('```json', '').replace('```', '');
            let parsedData: predictive[] = [];

            try {
                parsedData = JSON.parse(cleanedOutput);
            } catch (err) {
                console.error('Invalid JSON from AI:', cleanedOutput);
            }

            setAIgeneratedData(parsedData);
        } catch (error) {
            console.error('Error calculating grade:', error);
            gridRef.current.hideSpinner();
        }
    };

    const generatePrompt = (data: string, userInput: string): string => {
        return `Given the following datasource are bounded in the Grid table\n\n${data}.\n Return the newly prepared datasource based on following user query: ${userInput}\n\nGenerate an output in JSON format only and Should not include any additional information or contents in response`;
    };

    const customizeCell = (args: any) => {
        if (args.column.field === 'FinalYearGPA' || args.column.field === 'TotalGPA') {
            if ((args.data as predictive).FinalYearGPA! > 0) {
                args.cell.classList.add('e-PredictiveColumn');
            } else if ((args.data as predictive).TotalGPA! > 0) {
                args.cell.classList.add('e-PredictiveColumn');
            }
        }
        if (args.column.field === 'TotalGrade') {
            if ((args.data as predictive).TotalGPA! <= 2.5) {
                args.cell.classList.add('e-inactivecolor');
            } else if ((args.data as predictive).TotalGPA! >= 4.5) {
                args.cell.classList.add('e-activecolor');
            } else if ((args.data as predictive).TotalGPA! > 0) {
                args.cell.classList.add('e-averageColumn');
            }
        }
    };

    // Update grid when AIgeneratedData changes.
    useEffect(() => {
        if (AIgeneratedData.length > 0 && gridRef.current) {
            gridRef.current.showColumns(['Final Year GPA', 'Total GPA', 'Total Grade']); 
            updateRows(AIgeneratedData).then(() => {
                gridRef.current?.hideSpinner(); // Hide after updates complete.
            });
        }
    }, [AIgeneratedData]);

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const updateRows = async (generatedData: predictive[]): Promise<void> => {
        await delay(300); // Initial delay to match reference sample.
        for (let i = 0; i < generatedData.length; i++) {
            const item = generatedData[i];
            gridRef.current!.setRowData(item.StudentID, item);
            await delay(300); // Smooth update animation.
        }
    };

    return (
        <div>
            <ButtonComponent id="calculate_Grade" isPrimary={true} onClick={handleCalculateGrade} style={{ marginBottom: '10px' }}>
                Calculate Grade
            </ButtonComponent>
            <GridComponent ref={gridRef} dataSource={predictiveData} queryCellInfo={customizeCell} enableHover={false} allowSelection={false} >
                <ColumnsDirective>
                    <ColumnDirective field="StudentID" isPrimaryKey={true} headerText="Student ID" textAlign="Right" width="100" />
                    <ColumnDirective field="StudentName" headerText="Student Name" width="100" />
                    <ColumnDirective field="FirstYearGPA" headerText="First Year GPA" textAlign="Center" width="100" />
                    <ColumnDirective field="SecondYearGPA" headerText="Second Year GPA" textAlign="Center" width="100" />
                    <ColumnDirective field="ThirdYearGPA" headerText="Third Year GPA" textAlign="Center" width="100" />
                    <ColumnDirective field="FinalYearGPA" headerText="Final Year GPA" visible={false} textAlign="Center" width="100" />
                    <ColumnDirective field="TotalGPA" headerText="Total GPA" visible={false} textAlign="Center" width="100" />
                    <ColumnDirective field="TotalGrade" headerText="Total Grade" visible={false} textAlign="Center" width="100" />
                </ColumnsDirective>
            </GridComponent>
        </div>
    );
};

export default PredictiveGrid;