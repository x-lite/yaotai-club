export default [
    {
        title: '首页',
        icon: 'bar-chart',
        key: '/admin/home'
    },
    {
        title: '表格',
        icon: 'mail',
        key: '/admin/table',
        chilren: [
            {
                title: '表格1',
                key: '/admin/table1'
            },
            {
                title: '表格2',
                key: '/admin/table2'
            },
            {
                title: '表格3',
                key: '/admin/table3'
            }, {
                title: '表格4',
                key: '/admin/table4'
            }
        ]
    },
    {
        title: '用户管理',
        icon: 'user',
        key: '/admin/form',
        chilren: [
            {
                title: '表单1',
                key: '/admin/form1'
            },
            {
                title: '表单2',
                key: '/admin/form2'
            },
            {
                title: '表单3',
                key: '/admin/form3'
            }, {
                title: '表单4',
                key: '/admin/form4'
            }
        ]
    },
    {
        title: '系统设置',
        key: '/admin/t',
        icon: 'setting',
    }
];