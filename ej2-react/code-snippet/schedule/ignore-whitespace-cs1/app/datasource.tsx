/**
 * Schedule datasource spec
 */

 export let  resourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Workflow Analysis',
        StartTime: new Date(2021, 7, 1, 1, 0),
        EndTime: new Date(2021, 7, 1, 3, 0),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 2,
        Subject: 'Requirement planning',
        StartTime: new Date(2021, 7, 1, 1, 30),
        EndTime: new Date(2021, 7, 1, 3, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 3,
        Subject: 'Quality Analysis',
        StartTime: new Date(2021, 7, 1, 2, 0),
        EndTime: new Date(2021, 7, 1, 3, 30),
        IsAllDay: false,
        OwnerId: 3,
        RoomId: 1
    }, {
        Id: 4,
        Subject: 'Resource planning',
        StartTime: new Date(2021, 7, 6, 13, 0),
        EndTime: new Date(2021, 7, 6, 15, 30),
        IsAllDay: false,
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 5,
        Subject: 'Timeline estimation',
        StartTime: new Date(2021, 7, 7, 9, 0),
        EndTime: new Date(2021, 7, 7, 11, 30),
        IsAllDay: false,
        OwnerId: 1,
        RoomId: 1
    }];