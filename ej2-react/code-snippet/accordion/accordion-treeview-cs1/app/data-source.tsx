export let DocDB: any = [
    {
        icon: 'folder',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx', icon: 'docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx', icon: 'docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt', icon: 'ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf', icon: 'pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf', icon: 'pdf' },
        ],
        nodeId: '03', nodeText: 'Documents',
    }
];

export let DownloadDB: any = [
    {
        icon: 'folder',
        nodeChild: [
            { nodeId: '05-01', nodeText: 'UI-Guide.pdf', icon: 'pdf' },
            { nodeId: '05-02', nodeText: 'Tutorials.zip', icon: 'zip' },
            { nodeId: '05-03', nodeText: 'Game.exe', icon: 'exe' },
            { nodeId: '05-04', nodeText: 'TypeScript.7z', icon: 'zip' },
        ],
        nodeId: '05', nodeText: 'Downloads',
    }
];

export let PicDB: any = [
    {
        expanded: true, icon: 'folder',
        nodeChild: [
            {
                expanded: true, icon: 'folder',
                nodeChild: [
                    { nodeId: '04-01-01', nodeText: 'WIN_20160726_094117.JPG', image: 'http://npmci.syncfusion.com/development/demos/src/images/employees/9.png' },
                    { nodeId: '04-01-02', nodeText: 'WIN_20160726_094118.JPG', image: 'http://npmci.syncfusion.com/development/demos/src/images/employees/3.png' },
                ],
                nodeId: '04-01', nodeText: 'Camera Roll',
            },
            { nodeId: '04-02', nodeText: 'Wind.jpg', icon: 'images' },
            { nodeId: '04-03', nodeText: 'Stone.jpg', icon: 'images' },
        ],
        nodeId: '04', nodeText: 'Pictures',
    }
];