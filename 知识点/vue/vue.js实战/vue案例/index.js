Vue.component('mysurvey', {
    template:'\
        <div class="dataList">\
            <slot name="dataList" v-for="quesnaire in quesnairelist" \
            :quesnaire-id="quesnaire.id" :quesnaire-title="quesnaire.title" \
            :quesnaire-type="quesnaire.type" :quesnaire-value="quesnaire.value" \
            :quesnaire-preserve="quesnaire.preserve" \
            :quesnaire-introduce="quesnaire.introduce">\
            </slot>',
    props: {
        quesnairelist: {},
        currentPage: {}
    }
});

Vue.component('mybutton', {
    template:'\
        <div class="buttonAll">\
            <slot name="buttonAll" v-for="btn in btnlist" :btnid="btn.id" :btnname="btn.name"></slot>\
        </div>',
    props: {
        btnlist: {},
        currentPage: {},
        quesnairelist: {}
    }
})

var app = new Vue({
    el: '#app',
    data: {
        quesnairelist: [
            {id:1, title:"请问您的性别是？", type:"radio", preserve:'sex', value:['男', '女', '保密']},
            {id:2, title:"请选择您的兴趣爱好？", type:"checkbox", preserve:'hobby', value:['看书', '游泳', '跑步', '看电影', '听音乐']},
            {id:3, title:"请介绍一下自己：", type:'textarea', preserve:'introduce', value:['']}
        ],
        btnlist: [
            {id:"up", name:"上一题"},
            {id:"next", name:"下一题"},
            {id:"reset", name:"重置"},
            {id:"submit", name:"提交"}
        ],
        currentPage:1,
        sex: [],
        hobby: [],
        introduce: ''
    },
    methods: {
        handlerClick: function(e) {
            if(e.target.id=='reset') {
                if(this.currentPage==1) {
                    this.sex='';
                }
                if(this.currentPage==2) {
                    this.hobby=[];
                }
                if(this.currentPage==3) {
                    this.introduce='';
                }
            };
            if(e.target.id=='next') {
                var obj = this.isClick(this.currentPage);
                if(!obj.isTrue) {
                    alert(obj.isString);
                    return false;
                };
                this.currentPage++;
            };
            if(e.target.id=='submit') {
                var obj = this.isClick(this.currentPage);
                if(!obj.isTrue) {
                    alert(obj.isString);
                    return false;
                }
                alert("提交成功！<br>您的性别是："+
                    this.sex+"<br>您的爱好是："+
                    this.hobby+"<br>个人简介："+
                    this.introduce);
            };
            if(e.target.id=='up') {
                this.currentPage--;
            }
        },
        isClick: function(page) {
            var dataArr = this.quesnairelist.filter (function(item) {
                return item.id == page;
            })
            var data = dataArr[0];
            var obj = {};
            var isTrue = true;
            if(data.preserve == 'sex') {
                isTrue = this.sex.length ==0 ? false:true;
                isString = "请选择性别！";
            }else if(data.preserve == 'hobby') {
                isTrue = this.hobby.length < 2 ? false:true; 
                isString = "爱好至少选择两项，请重新选择！";
            }else if(data.preserve == 'textarea') {
                isTrue = this.introduce.length <100 ? false:true;
                isString = "自我介绍至少100字，请重新填写！"
            }
            obj.isTrue = isTrue;
            obj.isString = isString;
            return obj;
        }
    }
})


