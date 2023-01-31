
export interface IOrderModel {
    OrderID?: number;
    CustomerID?: string;
    Freight?: number;
    OrderDate?: Date;
    ShipCity?: string;
    ShipCountry?: string;
    ShipAddress?: string;
    isAdd?: boolean;
    currentTab?: number;
    Verified?: boolean;
}