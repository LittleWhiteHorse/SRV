var app = new Vue({
    el: '#list',
    data: {
        columns: [
            {
                id: 1,
                name: '王小明',
                age: '18',
                birthday: '1999-02-21',
                address: '北京市朝阳区芍药居'
            },
            {
                id: 2,
                name: '张小刚',
                age: '25',
                birthday: '1992-01-23',
                address: '北京市海淀区西二旗'
            },
            {
                id: 3,
                name: '李小红',
                age: '30',
                birthday: '1987-11-10',
                address: '上海市浦东新区世纪大道'
            },
            {
                id: 4,
                name: '周小伟',
                age: '26',
                birthday: '1991-10-10',
                address: '深圳市南山区深南大道'
            }
        ]
    },
    methods: {
        handleAsc: function (index) {

        },
        handleDesc: function (index) {
            
        }
    }
})