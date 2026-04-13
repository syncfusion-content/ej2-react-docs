export interface IOrderModel {
    taskID?: number;
    taskName?: string;
    priority?: string;
    progress?: number;
    startDate?: Date;
    endDate?: Date;
    isAdd?: boolean;
    approved?: boolean;
}