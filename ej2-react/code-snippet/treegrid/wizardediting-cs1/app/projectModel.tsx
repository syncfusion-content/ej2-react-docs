export interface IProjectModel {
  TaskID?: number;
  TaskName?: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Priority?: string;
  isAdd?: boolean;
  currentTab?: number;
}

