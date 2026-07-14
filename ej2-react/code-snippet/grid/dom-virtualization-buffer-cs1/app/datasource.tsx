export interface ProductData {
    SKUID?: string;
    ProductName?: string;
    Category?: string;
    AvailableStock?: number;
    UnitPrice?: number;
}

export const productData: ProductData[] = [
    { SKUID: 'SKU001', ProductName: 'Laptop Pro 15', Category: 'Electronics', AvailableStock: 1200, UnitPrice: 1299.99 },
    { SKUID: 'SKU002', ProductName: 'Wireless Mouse', Category: 'Accessories', AvailableStock: 450, UnitPrice: 29.99 },
    { SKUID: 'SKU003', ProductName: 'USB-C Hub', Category: 'Accessories', AvailableStock: 320, UnitPrice: 49.99 },
    { SKUID: 'SKU004', ProductName: 'Monitor 4K', Category: 'Electronics', AvailableStock: 180, UnitPrice: 599.99 },
    { SKUID: 'SKU005', ProductName: 'Mechanical Keyboard', Category: 'Accessories', AvailableStock: 890, UnitPrice: 149.99 },
    { SKUID: 'SKU006', ProductName: 'External SSD 1TB', Category: 'Storage', AvailableStock: 560, UnitPrice: 129.99 },
    { SKUID: 'SKU007', ProductName: 'Webcam HD', Category: 'Electronics', AvailableStock: 320, UnitPrice: 89.99 },
    { SKUID: 'SKU008', ProductName: 'Desk Lamp LED', Category: 'Accessories', AvailableStock: 640, UnitPrice: 39.99 },
    { SKUID: 'SKU009', ProductName: 'Cable Management Kit', Category: 'Accessories', AvailableStock: 1100, UnitPrice: 19.99 },
    { SKUID: 'SKU010', ProductName: 'Laptop Stand', Category: 'Accessories', AvailableStock: 750, UnitPrice: 59.99 },
    { SKUID: 'SKU011', ProductName: 'Portable SSD 512GB', Category: 'Storage', AvailableStock: 420, UnitPrice: 79.99 },
    { SKUID: 'SKU012', ProductName: 'USB Hub 7-Port', Category: 'Accessories', AvailableStock: 280, UnitPrice: 34.99 },
    { SKUID: 'SKU013', ProductName: 'Graphic Tablet', Category: 'Electronics', AvailableStock: 150, UnitPrice: 399.99 },
    { SKUID: 'SKU014', ProductName: 'Noise Cancelling Earbuds', Category: 'Electronics', AvailableStock: 920, UnitPrice: 199.99 },
    { SKUID: 'SKU015', ProductName: 'Screen Protector Pack', Category: 'Accessories', AvailableStock: 1500, UnitPrice: 9.99 }
];

// Generate larger dataset by repeating and modifying the base data
export const generateProductData = (count: number): ProductData[] => {
    const data: ProductData[] = [];
    const baseIndex = 1000;
    
    for (let i = 0; i < count; i++) {
        const baseProduct = productData[i % productData.length];
        data.push({
            SKUID: `SKU${String(baseIndex + i).padStart(6, '0')}`,
            ProductName: `${baseProduct.ProductName} - Variant ${Math.floor(i / productData.length) + 1}`,
            Category: baseProduct.Category,
            AvailableStock: Math.floor(Math.random() * 1500) + 50,
            UnitPrice: baseProduct.UnitPrice! + (Math.random() * 100 - 50)
        });
    }
    
    return data;
};

export const largeProductData = generateProductData(10000);
