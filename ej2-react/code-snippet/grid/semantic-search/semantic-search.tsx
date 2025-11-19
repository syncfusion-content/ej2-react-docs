import React, { useEffect, useRef, useState } from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Query, Predicate } from '@syncfusion/ej2-data';
import { MedicalRecords, type MedicalRecord } from './datasource';
import { cosineSimilarity } from './cosine-similarity';
import { embeddingModel } from './embedding-model';

const SemanticFilteringGrid: React.FC = () => {
    const gridRef = useRef<GridComponent>(null);
    const [productEmbeddings, setProductEmbeddings] = useState<{ [key: string]: number[] }>({});
    const [searchValue, setSearchValue] = useState<string>('');
    const [isEmbeddingsLoaded, setIsEmbeddingsLoaded] = useState<boolean>(false);

    // Generate embeddings for all records on mount.
    useEffect(() => {
        const getEmbeddingsData = async () => {
            try {
                const embeddings: { [key: string]: number[] } = {};
                for (let record of MedicalRecords) {
                    const data = (await embeddingModel(
                        `${record.DoctorDetails} ${record.PatientID} ${record.Symptoms} ${record.Diagnosis}`
                    )) as number[];
                    embeddings[record.RecordID] = data;
                }
                setProductEmbeddings(embeddings);
                setIsEmbeddingsLoaded(true);
            } catch (error) {
                console.error('Failed to generate embeddings:', error);
                setIsEmbeddingsLoaded(false);
            }
        };
        getEmbeddingsData();
    }, []);

    const handleSmartSearch = async () => {
        if (!gridRef.current) return;

        if (!isEmbeddingsLoaded) {
            console.warn('Embeddings not loaded yet. Please wait.');
            return;
        }

        if (searchValue.trim()) {
            gridRef.current.showSpinner();
            await executePrompt(searchValue.trim());
        } else {
            gridRef.current.query = new Query();
        }
    };

    const executePrompt = async (queryText: string) => {
        try {
            const queryVector = await embeddingModel(queryText);
            if (!Array.isArray(queryVector)) {
                console.error('Invalid query vector:', queryVector);
                gridRef.current!.hideSpinner();
                return;
            }
            const similarityThreshold = 0.8;

            const outputData = MedicalRecords.filter((record: any) => {
                const emb = productEmbeddings[record.RecordID];
                if (!emb || !Array.isArray(emb)) {
                    return false; // Skip if embedding missing or invalid.
                }
                const similarity = cosineSimilarity(emb, queryVector);
                return similarity > similarityThreshold;
            });

            gridRef.current!.hideSpinner();

            if (outputData.length > 0) {
                gridRef.current!.query = new Query().where(generatePredicate(outputData));
            } else {
                gridRef.current!.query = new Query().take(0);
            }
        } catch (error) {
            console.error('Error in executePrompt:', error);
            gridRef.current!.hideSpinner();
        }
    };

    const generatePredicate = (filteredData: MedicalRecord[]) => {
        const predicates: Predicate[] = [];
        for (let i = 0; i < filteredData.length; i++) {
            predicates.push(new Predicate('Symptoms', 'contains', filteredData[i].Symptoms));
        }
        return Predicate.or(predicates);
    };

    return (
        <div>
            <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
                <TextBoxComponent placeholder="Search here" width={200} value={searchValue} input={(e: any) => setSearchValue(e.value)}/>
                <ButtonComponent isPrimary={true} onClick={handleSmartSearch} disabled={!isEmbeddingsLoaded}>Smart Search</ButtonComponent>
            </div>
            <GridComponent ref={gridRef} dataSource={MedicalRecords} enableAltRow={true} allowTextWrap={true}>
                <ColumnsDirective>
                    <ColumnDirective field="RecordID" headerText="Record ID" textAlign="Right" width="90" />
                    <ColumnDirective field="PatientID" headerText="Patient ID" textAlign="Right" width="90" />
                    <ColumnDirective field="Symptoms" headerText="Symptoms" width="140" />
                    <ColumnDirective field="Diagnosis" headerText="Diagnosis" width="100" />
                    <ColumnDirective field="DoctorDetails" headerText="Doctor Information" width="140" />
                </ColumnsDirective>
            </GridComponent>
        </div>
    );
};

export default SemanticFilteringGrid;