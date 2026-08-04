export interface SaleRecord {
  [key: string]: string | number;
  Year: string;
  Product: string;
  Region: string;
  Amount: number;
}

export const pivotData: SaleRecord[] = [
  { Year: 'FY 2022', Product: 'Bikes', Region: 'North America', Amount: 72000 },
  { Year: 'FY 2022', Product: 'Bikes', Region: 'Europe', Amount: 54000 },
  { Year: 'FY 2022', Product: 'Clothing', Region: 'North America', Amount: 42000 },
  { Year: 'FY 2022', Product: 'Clothing', Region: 'Europe', Amount: 36000 },
  { Year: 'FY 2022', Product: 'Accessories', Region: 'North America', Amount: 30000 },
  { Year: 'FY 2022', Product: 'Accessories', Region: 'Europe', Amount: 24000 },
  { Year: 'FY 2023', Product: 'Bikes', Region: 'North America', Amount: 86000 },
  { Year: 'FY 2023', Product: 'Bikes', Region: 'Europe', Amount: 68000 },
  { Year: 'FY 2023', Product: 'Clothing', Region: 'North America', Amount: 50000 },
  { Year: 'FY 2023', Product: 'Clothing', Region: 'Europe', Amount: 43000 },
  { Year: 'FY 2023', Product: 'Accessories', Region: 'North America', Amount: 38000 },
  { Year: 'FY 2023', Product: 'Accessories', Region: 'Europe', Amount: 31000 },
  { Year: 'FY 2024', Product: 'Bikes', Region: 'North America', Amount: 98000 },
  { Year: 'FY 2024', Product: 'Bikes', Region: 'Europe', Amount: 79000 },
  { Year: 'FY 2024', Product: 'Clothing', Region: 'North America', Amount: 61000 },
  { Year: 'FY 2024', Product: 'Clothing', Region: 'Europe', Amount: 52000 },
  { Year: 'FY 2024', Product: 'Accessories', Region: 'North America', Amount: 47000 },
  { Year: 'FY 2024', Product: 'Accessories', Region: 'Europe', Amount: 39000 }
];
