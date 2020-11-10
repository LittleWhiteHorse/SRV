//示例一 封装组件 template的写法
Vue.component('anchor',{
    template:'#anchor',
    props: {
        level: {
            type:Number,
            required:true
        },
        title: {
            type: String,
            default:''
        }
    }
});

var app = new Vue({
    el:'#app1'
})

// 示例一 封装组件 使用render函数改写后
Vue.component('anchor',{
    template: '#anchor',
    props: {
        level: {
            type:Number,
            required: true
        },
        title: {
            type:String,
            default:''
        }
    },
    render: function (createElement) {
        return createElement (
            'h' + this.level,
            [
                createElement(
                    'a',
                    {
                        domProps:{
                            href:'#' + this.title
                        }
                    },
                    this.$slots.default
                )
            ]
        )
    }
});
var app = new Vue({
    el:'#app1_2'
})

//示例二 使用传统的template
Vue.component('ele', {
    template:'\
        <div id="element" \
        :class="{show: show}" \
        @click="handleClick">文本内容</div>',
    data: function () {
        return {
            show: true
        }
    },
    methods:{
        handleClick: function () {
            console.log('clicked!');
        }
    }
});
var app = new Vue ({
    el:'#app2_1'
})

//示例二 使用render函数
Vue.component('ele',{
    render: function (createElement) {
        return createElement(
            'div',
            {
                //动态绑定class，同：class
                class: {
                    'show': this.show
                },
                //普通html特性
                attrs: {
                    id:'element'
                },
                //给div绑定click事件
                on: {
                    click: this.handleClick
                }
            },
            '文本内容'
        )
    },
    data: function() {
        return {
            show: true
        }
    },
    methods: {
        handleClick: function () {
            console.log('clicked!');
        }
    }
});
var app = new Vue({
    el:'#app2_2'
})

//示例三 重复渲染多个组件（或元素）的方法
//局部声明组件
var Child = {
    render: function (createElement) {
        return createElement('p','text');
    }
};
Vue.component('ele',{
    render: function (createElement) {
        return createElement('div',
            Array.apply(null, {
                length: 5
            }).map(function() {
                return createElement(Child);
            })
        );
    }
});
var app = new Vue({
    el: '#app3'
})

//示例三 重复渲染含有组件的slot的方法
//全局注册组件
Vue.component('CHild',{
    render: function (createElement) {
        return createElement ('p', 'text');
    }
});
Vue.component('ele', {
    render: function (createElement) {
        //克隆slot节点的方法
        function cloneVNode (vnode) {
            //递归遍历所有子节点，并克隆
            const clonedChildren = vnode.children &&
            vnode.children.map(function(vnode){
                return cloneVNode(vnode);
            });
            const cloned = createElement(
                vnode.tag,
                vnode.data,
                clonedChildren
            );
            cloned.text = vnode.text;
            cloned.isComment = vnode.isComment;
            cloned.componentOptions = vnode.componentOptions;
            cloned.elm = vnode.elm;
            cloned.context = vnode.context;
            cloned.ns = vnode.ns;
            cloned.isStatic = vnode.isStatic;
            cloned.key = vnode.key;
            return cloned;
        }
        const vNodes = this.$slots.default;
        const clonedVNodes = vNodes.map(function(vnode) {
            return cloneVNode(vnode);
        });
        return createElement ('div', [
            vNodes,
            clonedVNodes
        ]);
    }
});
var app = new Vue({
    el: '#app3_2'
})

//示例四 使用原生javascript代替vue的内置指令
Vue.component('ele', {
    render: function (createElement) {
        if(this.show) {
            return createElement ('p', 'show的值为true');
        } else {
            return createElement ('p', 'show的值为false');
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
});
var app = new Vue({
    el: '#app4_1',
    data: {
        show:false
    }
})

//示例四_2
Vue.component('ele', {
    render: function (createElement) {
        var nodes = [];
        for (var i=0; i< this.list.length; i++) {
            nodes.push(createElement('p', this.list[i]));
        }
        return createElement('div', nodes);
    },
    props: {
        list: {
            type:Array
        }
    }
});
var app = new Vue({
    el: '#app4_2',
    data: {
        list:[
            '《Vue.js实战》',
            '《JavaScript高级程序设计》',
            '《JavaScript语言精粹》'
        ]
    }
})

//示例五 if、else语句和数组map方法充分配合使用来渲染
Vue.component('ele', {
    render: function (createElement) {
        if (this.list.length) {
            return createElement('ul',this.list.map(function (item) {
                return createElement('li', item);
            }));
        } else {
            return createElement('p', '列表为空');
        }
    },
    props: {
        list: {
            type: Array,
            default: function () {
                return [];
            }
        }
    }
});
var app = new Vue({
    el:'#app5',
    data: {
        list:[]
    },
    methods: {
        handleClick: function () {
            this.list = [
                '《Vue.js实战》',
                '《JavaScript高级程序设计》',
                '《JavaScript语言精粹》'
            ];
        }
    }
})

//示例六
Vue.component('ele', {
    render: function (createElement) {
        var _this = this;
        return createElement('div', [
            createElement('input', {
                domProps: {
                    value: this.value
                },
                on: {
                    input: function (event) {
                        _this.value = event.target.value;
                    }
                }
            }),
            createElement('p', 'value:'+this.value)
        ])
    },
    data: function () {
        return {
            value:''
        }
    }
});
var app = new Vue({
    el: '#app6'
})

//示例七 聊天发送内容的场景
Vue.component('ele', {
    render: function (createElement) {
        var _this = this;
        //渲染聊天内容列表
        if (this.list.length) {
            var listNode = createElement ('ul', this.list.map(function (item) {
                return createElement('li', item);
            }));
        } else {
            var listNode = createElement('p', '暂无聊天内容');
        }

        return createElement ('div', [
            listNode,
            createElement ('input', {
                attrs: {
                    placeholder: '输入内容，按回车键发送'
                },
                style: {
                    width: '200px'
                },
                on: {
                    keyup: function (event) {
                        //如果不是回车键，不发送数据
                        if (event.keyCode !== 13) return;
                        //添加输入的内容到聊天列表
                        _this.list.push(event.target.value);
                        //发送后，清空输入框
                        event.target.value = '';
                    }
                }
            })
        ])
    },
    data: function () {
        return {
            value:'',
            list:[]
        }
    }
});
var app = new Vue ({
    el:'#app7'
})

//示例八
Vue.component('ele', {
    render: function (createElement) {
        if (this.$slots.default === undefined) {
            return createElement('div','没有使用slot时显示的文本');
        } else {
            return createElement('div', this.$slots.default);
        }
    }
});
var app = new Vue({
    el:'#app8'
})

//示例九
//图片组件选项
var ImgItem = {
    props: ['data'],
    render: function (createElement) {
        return createElement ('div', [
            createElement('p', '图片组件'),
            createElement('img', {
                attrs: {
                    src: this.data.url
                }
            })
        ])
    }
};
//视频组件选项
var VideoItem = {
    props: ['data'],
    render: function (createElement) {
        return createElement ('div',[
            createElement('p','视频组件'),
            createElement('video',{
                attrs: {
                    src: this.data.url,
                    controls: 'controls',
                    autoplay: 'autoplay'
                }
            })
        ])
    }
};
//纯文本组件选项
var TextItem = {
    props: ['data'],
    render: function (createElement) {
        return createElement('div',[
            createElement('p','纯文本组件'),
            createElement('p',this.data.text)
        ]);
    }
};
Vue.component('smart-item', {
    //函数化组件
    functional: true,
    render: function (createElement, context) {
        //根据传入的数据，智能判断显示哪种组件
        function getComponent () {
            var data = context.props.data;
            //判断prop:data的type字段是属于哪种类型的组件
            if(data.type === 'img') return ImgItem;
            if(data.type === 'video') return VideoItem;
            return TextItem;
        }
        return createElement(
            getComponent(),
            {
                props: {
                    //把smart-item的prop: data传给上面智能选择的组件
                    data: context.props.data
                }
            },
            context.children
        )
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
})
var app = new Vue({
    el: '#app9',
    data: {
        data: {}
    },
    methods: {
        //切换不同类型组件的数据
        change: function(type) {
            if(type==='img') {
                this.data = {
                    type:'img',
                    url:'https://raw.githubusercontent.com/iview/iview/master/assets/logo.png'
                }
            } else if (type === 'video') {
                this.data = {
                    type: 'video',
                    url: 'http://vjs.zencdn.net/v/oceans.mp4'
                }
            } else if (type === 'text') {
                this.data = {
                    type: 'text',
                    content: '这是一段纯文本'
                }
            }
        }
    },
    create: function () {
        //初始化时，默认设置图片组件的数据
        this.change('img');
    }
})





