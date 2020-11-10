//开篇示例
new Vue({
	el:'#appS',
	data: {
		showBtn:true
	},
	methods:{
		handleClick:function(){
			alert('Clicked!');
		}
	}
})

//示例：1
new Vue({
	el : '#app',
	data : {
		books : [
			{ name : '《Vue.js实践》'},
			{ name : '《Javascript 语言精粹》'},
			{ name : '《Javascript 高级程序设计》'}
		]
	}
});

//示例：2
var app = new Vue({
	el : "#app2",
	data : {
		name : ''
	}
});


//写法一
var app = new Vue({
	el:'#app2',
	data:{
		a:2
	}
})
console.log(app.a);

//写法二
var myData = {
	a:1  //a为属性
};

var app =new Vue({
	el:'#app2',
	data:myData
})
console.log(app.a);
app.a = 2; //修改属性，原数据也会被修改
console.log(myData.a);  //获取原数据中的a的属性值
myData.a = 3;  //修改原数据中的a的属性值
console.log(app.a);  //反之，修改原数据，Vue属性也会修改

//Vue生命周期示例
var app = new Vue({
	el:'#app2',
	data:{
		a:2
	},
	created:function(){
		console.log(this.a);
	},
	mounted:function(){
		console.log(this.$el);
	}
})

//示例三
var app = new Vue({
	el:'#app3',
	data:{
		book:'《Vue.js实战》',
		date: new Date()
	},
	mounted: function(){
		var _this = this;  //声明一个变量指向Vue实例this,保证作用域一致
		this.timer = setInterval(function(){
			_this.date = new Date();  //修改数据data
		},1000);
	},
	beforeDestroy: function(){
		if(this.timer) {
			clearInterval(this.timer); //在Vue实例销毁前，清楚我们的定时器
		}
	}
})

//示例四
var app = new Vue ({
	el:'#app4',
	data: {
		link:'<a href="#">这是一个链接</a>'
	}
})

//示例五
var app = new Vue({
	el:'#app5',
	data:{
		number:100,
		isOk:false,
		text:'123,456'
	}
})

//示例六
var padDate = function(value){
	//在月份、日期、小时等小于10时前面补0
	return value < 10 ? '0'+value : value;
};
var app = new Vue({
	el:'#app6',
	data:{
		date: new Date()
	},
	filters:{
		formatDate :function(value){   //这里的value就是需要过滤的数据
			var date = new Date(value);
			var year = date.getFullYear();
			var month = padDate(date.getMonth()+1);
			var day = padDate(date.getDate());
			var hours = padDate(date.getHours());
			var minutes = padDate(date.getMinutes());
			var seconds = padDate(date.getSeconds());
			//将整理好的数据返回出去
			return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' +seconds; 
		}
	},
	mounted: function(){
		var _this = this;  //声明一个变量指向Vue实例this,保证作用域一致
		this.timer = setInterval(function(){
			_this.date = new Date();  //修改数据date

		},1000)
	},
	beforeDestroy:function(){
		if(this.timer){
			clearInterval(this.timer);  //在Vue实例销毁前，清楚我们的定时器
		}
	}
})

//示例七
var app = new Vue({
	el:'#app7',
	data:{
		show:true
	}
})

//示例八
var app = new Vue({
	el:'#app8',
	data:{
		url:'https://www.baidu.com',
		imgUrl:'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%8F%AF%E7%88%B1%E5%9B%BE%E7%89%87&step_word=&hs=2&pn=24&spn=0&di=172283860650&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2338706814%2C143480671&os=4270194993%2C280388949&simid=3480198052%2C496263393&adpicid=0&lpn=0&ln=1553&fr=&fmq=1550134246532_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic17.nipic.com%2F20111010%2F7385529_211819391121_2.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bgtrtv_z%26e3Bv54AzdH3Ffi5oAzdH3FdAzdH3Fm8AzdH3Fc8lcbnbh8k190k0b_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined'
	}
})

//示例九:v-on指令，方法一：
	var app = new Vue({
		el:'#app9',
		data:{
			show:true
		},
		methods:{
			handleClose: function(){
				this.show = false;
			}
		}
	})

	//方法二：
	var app = new Vue({
		el:'#app9_2',
		data:{
			show:true
		}
	})

	//方法三：
	var app = new Vue({
		el:'#app9_3',
		data:{
			show:true
		},
		methods :{
			handleClose:function(){
				this.close();
			},
			close:function(){
				this.show=false;
			}
		}
	})

	//方法四：
	var app =new Vue({
		el:'#app9_3',
		data:{
			show:true
		},
		methods:{
			init:function(text){
				console.log(text);
			}
		},
		mounted:function(){
			this.init('在初始化时调用');  //在初始化时调用 
		}
	});
	app.init('通过外部调用');  //在Vue实例外部调用

//第三章 示例十
var app = new Vue({
	el:'#app10',
	data:{
		text:'123,456'
	},
	computed:{
		reversedText:function(){
			//这里的this指向的时当前的Vue实例
			return this.text.split(',').reverse().join(',');
		}
	}
})

//示例十一
var app = new Vue({
	el:'#app11',
	data:{
		package1:[
			{
				name:'iphone7',
				price:7199,
				count:2
			},
			{
				name:'ipad',
				price:2888,
				count:1
			}
		],
		package2:[
			{
				name:'apple',
				price:3,
				count:5
			},
			{
				name:'banana',
				price:2,
				count:20
			}
		]
	},
	computed:{
		prices: function(){
			var prices = 0;
			for(var i=0;i<this.package1.length;i++){
				prices += this.package1[i].price*this.package1[i].count;
			}
			for(var i=0;i<this.package2.length;i++){
				prices += this.package2[i].price*this.package2[i].count;
			}
			return prices;
		}
	}
})

//示例十二
var app = new Vue({
	el:'#app12',
	data:{
		firstName:'Jack',
		lastName:'Green'
	},
	computed:{
		fullName:{
			//getter用于读取
			get:function(){
				return this.firstName + ' ' + this.lastName;
			},
			//setter,写入时触发
			set:function(newValue){
				var names = newValue.split(' ');
				this.firstName = names[0];
				this.lastName = names[names.length-1];
			}
		}
	}
})
app.fullName = 'John Doe';

//示例十三
var app1 = new Vue({
	el:'#app13_1',
	data:{
		text:'123,456'
	}
});
var app2 = new Vue({
	el:'#app13_2',
	computed:{
		reversedText:function(){
			//这里依赖的是实例app1的数据text
			return app1.text.split(',').reverse().join('.');
		}
	}
})

//第四章 示例十四
var app = new Vue({
	el:'#app14',
	data:{
		isActive:true,
		isError:false
	}
})

//示例十五
var app = new Vue({
	el:'#app15',
	data:{
		isAcive:true,
		error:null
	},
	computed:{
		classes:function(){
			return {
				active:this.isActive && !this.error,
				'text-fail':this.error && this.error.type === 'fail'
			}
		}
	}
})

//示例十六
var app = new Vue({
	el:'#app16',
	data:{
		activeCls:'active',
		errorCls:'error'
	}
})

//示例十七
var app = new Vue({
	el:'#app17',
	data:{
		isActive:true,
		activeCls:'active',
		errorCls:'error'
	}
})

//示例十八
var app = new Vue({
	el:'#app18',
	data:{
		isActive:true,
		errorCls:'error'
	}
})

//示例十九
var app = new Vue({
	el:'#app19',
	data:{
		size:'large',
		disabled:true
	},
	computed:{
		classes:function(){
			return [
				'btn',
				{
					['btn-'+this.size]:this.size !=='',
					['btn-disabled']:this.disabled
				}
			]
		}
	}
})

//示例二十
var app = new Vue({
	el:'#app20',
	data:{
		color:'red',
		fontSize:14
	}
})

//示例二十一
var app = new Vue({
	el:'#app21',
	data:{
		styles:{
			color:'red',
			fontSize:14+'px'
		}
	}
})

//示例二十二
var app = new Vue({
	el:'#app22',
	data:{
		message:'这是一段文字'
	}
})

//示例二十三
var app = new Vue({
	el:'#app23',
	data:{
		message:'这是一段文本'
	}
})

//示例二十四
var app = new Vue({
	el:'#app24',
	data:{
		status:1
	}
})

//示例二十五
var app = new Vue({
	el:'#app25',
	data:{
		status:1
	}
})

//示例二十六
var app = new Vue({
	el:'#app26',
	data:{
		type:'name'
	},
	methods:{
		handleToggleClick:function(){
			this.type=this.type==='name'?'mail':'name';
		}
	}
})

//示例二十七
var app = new Vue({
	el:'#app27',
	data:{
		type:'name'
	},
	methods:{
		handleToggleClick2:function(){
			this.type=this.type==='name'?'mail':'name';
		}
	}
})

//示例二十八
var app = new Vue({
	el:'#app28',
	data:{
		status:1
	}
})

//示例二十九
var app = new Vue({
	el:'#app29',
	data:{
		books:[
			{name:'《Vue.js实战》'},
			{name:'《JavaScript语言精粹》'},
			{name:'《JavaScript高级程序设计》'}
		]
	}
})

//示例三十
var app = new Vue({
	el:'#app30',
	data:{
		books:[
			{name:'《Vue.js实战》'},
			{name:'《JavaScript语言精粹》'},
			{name:'《JavaScript高级程序设计》'}
		]
	}
})

//示例三十一
var app31 = new Vue({
	el:'#app31',
	data:{
		books:[
			{
				name:'《Vue.js实战》',
				author:'梁灏'
			},
			{
				name:'《JavaScript语言精粹》',
				author:'Douglas Crockford'
			},
			{
				name:'《JavaScript高级程序设计》',
				author:'Nicholas C.Zakas'
			}
			
		]
	}
})
app31.books.push({     //因push（），渲染视图更新  
	name:'《CSS揭秘》',
	author:'[希]Lea Verou'
})

//示例三十二
var app = new Vue({
	el:'#app32',
	data:{
		user:{
			name:'Aresh',
			gender:'男',
			age:26
		}
	}
})

//示例三十三
var app33 = new Vue({
	el:'#app33',
	data:{
		user:{
			name:'Aresn',
			gender:'男',
			age:'26'
		}
	}
})

//示例三十四
var app = new Vue({
	el:'#app34'
})

//示例三十五
var app = new Vue({
	el:'#app35',
	data:{
		books:[
			{
				name:'《Vue.js实战》',
				author:'梁灏'
			},
			{
				name:'《JavaScript语言精粹》',
				author:'Douglas Crockford'
			},
			{
				name:'《JavaScript高级程序设计》',
				author:'Nicholas C.Zakas'
			}
			
		]
	}
})
app.books = app.books.filter(function (item){
	return item.name.match(/JavaScript/);
})

//第一种方法，这里的this指向的就是当前组件实例，即app。在非webpack模式下也可以用$set方法，例如：app.$set(...)
// Vue.set(app.books,3,{
// 	name:'《CSS揭秘》',
// 	author:'[希]Lea Verou'
// })
// this.$set(app.books,3{
// 	name:'《CSS揭秘》',
// 	author:'[希]Lea Verou'
// })
//另一种方法：
// app.books.splice(3,1,{
// 	name:'《CSS揭秘》',
// 	author:'[希]Lea Verou'
// })
//第二个问题也可以直接用splice来解决：
// app.books.splice(1);

//示例三十六
var app = new Vue({
	el:'#app36',
	data:{
		books:[
			{
				name:'《Vue.js实战》',
				author:'梁灏'
			},
			{
				name:'《JavaScript语言精粹》',
				author:'Douglas Crockford'
			},
			{
				name:'《JavaScript高级程序设计》',
				author:'Nicholas C.Zakas'
			}
		]
	},
	computed:{
		filterBooks:function(){
			return this.books.filter(function(book){
				return book.name.match(/JavaScript/);
			})
		},
		sortedBooks:function(){
			return this.books.sort(function(a,b){
				return a.name.length<b.name.length;
			})
		}
	},

})

//示例三十七
new Vue({
	el:'#app37',
	data:{
		counter:0
	}
})

//示例三十八
var app = new Vue({
	el:'#app38',
	data:{
		counter:1000
	},
	methods:{
		handleAdd:function(count){
			count=count || 1;
			//this指向当前Vue示例app
			this.counter -= count;
		}
	}
})

//示例三十九
var app = new Vue({
	el:'#app39',
	methods:{
		handleClick:function(message,event){
			event.preventDefault();
			window.alert(message);
		}
	}
})

//示例四十
var app = new Vue({
	el:'#app40',
	data:{
		message:''
	}
})

//示例四十一
var app = new Vue({
	el:'#app41',
	data:{
		text:''
	}
})

//示例四十二
var app = new Vue({
	el:'#app42',
	data:{
		message:''
	},
	methods:{
		handleInput:function(e){
			this.message = e.target.value;
		}
	}
})

//示例四十三
var app = new Vue({
	el:'#app43',
	data:{
		picked:true
	}
})

//示例四十四
var app = new Vue({
	el:'#app44',
	data:{
		picked:'js'
	}
})

//示例四十五
var app = new Vue({
	el:'#app45',
	data:{
		checked:false
	}
})

//示例四十六
var app = new Vue({
	el:'#app46',
	data:{
		checked:['html','css']
	}
})

//示例四十七
var app = new Vue({
	el:'#app47',
	data:{
		selected:'html'
	}
})

//示例四十八
var app = new Vue({
	el:'#app48',
	data:{
		selected:'html',
		options:[
			{
				text:'HTML',
				value:'html'
			},
			{
				text:'JavaScript',
				value:'js'
			},
			{
				text:'CSS',
				value:'css'
			}
		]
	}
})

//示例四十九
var app = new Vue({
	el:'#app49',
	data:{
		picked:false,
		value:123
	}
})

//示例五十
var app = new Vue({
	el:'#app50',
	data:{
		toggle:false,
		value1:'a',
		value2:'b'
	}
})

//示例五十一
var app = new Vue({
	el:'#app51',
	data:{
		message:''
	}
})

//示例五十二
var app = new Vue({
	el:'#app52',
	data:{
		message:123
	}
})

//示例五十三
var app = new Vue({
	el:'#app53',
	data:{
		message:''
	}
})

//示例五十四
Vue.component('my-component',{
	//选项
	template:'<div>这里是组件的内容</div>'
});
var app = new Vue({
	el:'#app54'
})

//示例五十五
var Child = {
	template:'<div>局部注册组件的内容</div>'
}
var app = new Vue({
	el:'#app55',
	components:{
		'my-component':Child
	}
})

//示例五十六
Vue.component('my-component',{
	template:'<div>这里是组件的内容</div>'
})
var app = new Vue({
	el:'#app56 '
})

//示例五十七
Vue.component('my-component',{
	template:'<div>{{message}}</div>',
	data:function(){
		return {
			message:'组件内容'
		}
	}
})
var app = new Vue({
	el:'#app57'
})

//示例五十八
var data={
	counter:0
};
Vue.component('my-component',{
	template:'<button @click="counter++">{{counter}}</button>',
	data:function(){
		return data;
	}
});
var app = new Vue({
	el:'#app58'
})

//示例五十九
Vue.component('my-component',{
	template:'<button @click="counter++">{{counter}}</button>',
	data:function(){
		return {
			counter:0
		}
	}
});
var app = new Vue({
	el:'#app59'
})

//示例六十
Vue.component('my-component',{
	props:['message'],
	template:'<div>{{message}}</div>'
});
var app = new Vue({
	el:'#app60'
})

//示例六十一
Vue.component('my-component',{
	props:['warningText'],
	template:'<div>{{warningText}}</div>'
});
var app = new Vue({
	el:'#app61'
})

//示例六十二
Vue.component('my-component',{
	props:['message'],
	template:'<div>{{message}}</div>'
});
var app = new Vue({
	el:'#app62',
	data:{
		parentMessage:''
	}
})

//示例六十三
Vue.component('my-component',{
	props:['message'],
	template:'<div>{{message.length}}</div>'
});
var app = new Vue({
	el:'#app63'
})

//示例六十四
Vue.component('my-component',{
	props:['initCount'],
	template:'<div>{{count}}</div>',
	data:function(){
		return {
			count:this.initCount
		}
	}
});
var app = new Vue({
	el:'#app64'
})

//示例六十五
Vue.component('my-component',{
	props:['width'],
	template:'<div :style="style">组件内容</div>',
	computed:{
		style:function(){
			return {
				width:this.width+'px'
			}
		}
	}
});
var app = new Vue({
	el:'#app65'
})

//示例六十六
Vue.component('my-component',{
	props:{
		//必须是数字类型
		propA: Number,
		//必须是字符串或数字类型
		propB:[String,Number],
		//布尔值，如果没有定义，默认值就是true
		propC:{
			type:Boolean,
			default:true
		},
		//数字，而且是必传
		propD:{
			type:Number,
			required:true
		},
		//如果是数组或对象，默认值必须是一个函数返回
		propE:{
			type:Array,
			default:function(){
				return [];
			}
		},
		//自定义一个验证函数
		propF:{
			validator:function(value){
				return value > 10;
			}
		}
	}
});

//示例六十七
Vue.component('my-component',{
	template:'\
	<div>\
		<button @click="handleIncrease">+1</button>\
		<button @click="handleReduce">-1</button>\
	</div>',
	data:function(){
		return {
			counter: 0
		}
	},
	methods:{
		handleIncrease:function(){
			this.counter++;
			this.$emit('increase',this.counter);
		},
		handleReduce:function(){
			this.counter--;
			this.$emit('reduce',this.counter);
		}
	}
});

var app =new Vue({
	el:'#app67',
	data:{
		total:0
	},
	methods:{
		handleGetTotal:function(total){
			this.total = total;
		}
	}
})

//示例六十八
Vue.component('my-component',{
	template:'<button @click="handleClick">+1</button>',
	data:function(){
		return {
			counter:0
		}
	},
	methods:{
		handleClick:function(){
			this.counter++;
			this.$emit('input',this.counter);
		}
	}
});

var app = new Vue({
	el:'#app68',
	data:{
		total:0
	}
})

//示例六十九
Vue.component('my-component',{
	template:'<button @click="handleClick">+1</button>',
	data:function(){
		return {
			counter:0
		}
	},
	methods:{
		handleClick:function(){
			this.counter++;
			this.$emit('input',this.counter);
		}
	}
});

var app = new Vue({
	el:'#app69',
	data:{
		total:0
	},
	methods:{
		handleGetTotal:function(total){
			this.total = total;
		}
	}
})

//示例七十
Vue.component('my-component',{
	props:['value'],
	template:'<input :value="value" @input="updateValue" />',
	methods:{
		updateValue:function(event){
			this.$emit('input',event.target.value);
		}
	}
});

var app = new Vue({
	el:'#app70',
	data:{
		total:0
	},
	methods:{
		handleReduce:function(){
			this.total--;
		}
	}
})

//示例七十一 注意：该示例需使用Vue.js 1.x的版本
// Vue.component('my-component',{
// 	template:'<button @click="handleDispatch">派发事件</button>',
// 	methods:{
// 		handleDispatch:function(){
// 			this.$dispatch('on-message','来自内部组件的数据');
// 		}
// 	}
// });
// var app = new Vue({
// 	el:'#app71',
// 	data:{
// 		message:''
// 	},
// 	events:{
// 		'on-message':function(msg){
// 			this.message = msg;
// 		}
// 	}
// })

//示例七十二
var bus = new Vue();
Vue.component('component-a',{
	template:'<button @click="handleEvent">传递事件</button>',
	methods:{
		handleEvent:function(){
			bus.$emit('on-message','来自组件component-a的内容');
		}
	}
});
var app = new Vue({
	el:'#app72',
	data:{
		message:''
	},
	mounted:function(){
		var _this = this;
		//在实例初始化时，监听来自bus实例的事件
		bus.$on('on-message',function(msg){
			_this.message = msg;
		});
	}
});

//示例七十三
Vue.component('component-a',{
	template:'<button @click="handleEvent">通过父链直接修改数据</button>',
	methods:{
		handleEvent:function(){
			//访问到父链后，可以做任何操作，比如直接修改数据
			this.$parent.message="来自组件component-a的内容";
		}
	}
});

var app = new Vue({
	el:'#app73',
	data:{
		message:''
	}
});

//示例七十四
Vue.component('component-a',{
	template:'<div>子组件</div>',
	data:function(){
		return {
			message:'子组件内容'
		}
	}
});
var app = new Vue({
	el:'#app74',
	methods:{
		handleRef:function(){
			//通过$ref来访问指定的实例
			var msg = this.$refs.comA.message;
			console.log(msg);
		}
	}
});

//示例七十五
Vue.component('child-component',{
	template:'<div>子组件</div>'
});

var app = new Vue({
	el:'#app75',
	data:{
		showChild:true   //这里的状态showChild绑定的时父组件的数据
	}
})

//示例七十五
Vue.component('child-component',{
	template:'<div v-show = "showChild">子组件</div>',
	data:function(){
		return {
			showChild:true
		}
	}
});

var app = new Vue({
	el:'#app75-2'
});

//示例七十六
Vue.component('child-component',{
	template:'\
	<div>\
		<slot>\
			<p>如果父组件没有插入内容，我将作为默认出现</p>\
		</slot>\
	</div>'
});
var app = new Vue({
	el:'#app76'
})

//示例七十七
Vue.component('child-component',{
	template:'\
	<div class="container">\
		<div class="header">\
			<slot name="header"></slot>\
		</div>\
		<div class="main">\
			<slot></slot>\
		</div>\
		<div class="footer">\
			<slot name="footer"></slot>\
		</div>\
	</div>'
});
var app = new Vue({
	el:'#app77'
})

//示例七十八
Vue.component('child-component',{
	template:'\
	<div class="container">\
		<slot msg="来自子组件的内容"></slot>\
	</div>'
});
var app = new Vue({
	el:'#app78'
})

//示例七十九
Vue.component('my-list',{
	props:{
		books:{
			type:Array,
			default:function(){
				return [];
			}
		}
	},
	template:'\
	<ul>\
		<slot name="book"\
			v-for="book in books"\
			:book-name="book.name">\
			<!-- 这里也可以写默认slot内容 -->\
		</slot>\
	</ul>'
});
var app = new Vue({
	el:'#app79',
	data:{
		books:[
			{name:'《Vue.js实战》'},
			{name:'《JavaScript语言精粹》'},
			{name:'《JavaScript高级程序设计》'}
		]
	}
})

//示例八十
Vue.component('child-component',{
	template:'\
	<div class="container">\
		<div class="header">\
			<slot name="header"></slot>\
		</div>\
		<div class="main">\
			<slot></slot>\
		</div>\
		<div class="footer">\
			<slot name="footer"></slot>\
		</div>\
	</div>',
	mounted: function() {
		var header = this.$slots.header;
		var main = this.$slots.default;
		var footer = this.$slots.footer;
		console.log(footer);
		console.log(footer[0].elm.innerHTML);
	}
});

var app = new Vue({
	el:'#app80'
})

//示例八十一
Vue.component('child-component',{
	name:'child-component',
	props:{
		count:{
			type:Number,
			default:1
		}
	},
	template:'\
	<div class="child">\
		<child-component\
			:count="count+1"\
			v-if="count < 3"></child-component>\
	</div>',
});
var app = new Vue({
	el:'#app81'
})

//示例八十二
Vue.component('child-component',{
	data:function(){
		return {
			msg:'在子组件声明的数据'
		}
	}
});
var app = new Vue({
	el:'#app82',
	data:{
		message:'在父组件声明的数据'
	}
})

//示例八十三
var app = new Vue({
	el:'#app83',
	components: {
		comA: {
			template: '<div>组件A</div>'
		},
		comB: {
			template: '<div>组件B</div>'
		},
		comC: {
			template: '<div>组件C</div>'
		}
	},
	data: {
		currentView: 'comA'
	},
	methods: {
		handleChangeView: function(component) {
			this.currentView = 'com'+component;
		}
	}
})

//示例八十四
var Home = {
	template: '<p>Welcome home!</p>'
};
var app = new Vue({
	el:'#app84',
	data:{
		currentView:Home
	}
})

//示例八十五
Vue.component('child-component',function (resolve,reject) {
	window.setTimeout(function() {
		resolve({
			template: '<div>我是异步渲染的</div>'
		})
	},2000)
});
var app = new Vue({
	el:'#app85'
})

//示例八十六
//运行后在控制台抛出错误
// var app = new Vue({
// 	el:'#app86',
// 	data: {
// 		showDiv: false
// 	},
// 	methods: {
// 		getText: function() {
// 			this.showDiv = true;
// 			var text = document.getElementById('div').innerHTML;
// 			console.log(text);
// 		}
// 	}
// })

//示例八十七
var app = new Vue({
	el:'#app87',
	data:{
		showDiv:false
	},
	methods:{
		getText:function(){
			this.showDiv = true;
			this.$nextTick(function(){
				var text = document.getElementById('div').innerHTML;
				console.log(text);
			})
		}
	}
})

//示例八十八
Vue.component('my-component',{
	template: '#my-component'
});
var app = new Vue({
	el: '#app88'
})

//示例八十九
var MyComponent = Vue.extend({
	template: '<div>Hello:{{name}}</div>',
	data:function() {
		return {
			name: 'Aresn'
		}
	}
});
//第一种写法
new MyComponent().$mount('#mount-div');
//第二种写法
// new  MyComponent({
// 	el: '#mount-div'
// })
//第三种写法
// var component = new MyComponent().$mount();
// document.getElementById('mount-div').appendChild(component.$el);


//第八章： 自定义指令的两种注册方法：全局注册和局部注册

//全局注册
// Vue.directive('focus', {
// 	//指令选项
// })
//局部注册
// var app = new Vue({
// 	el:'#app_'
// 	directive: {
// 		focus:{
// 			//指令选项
// 		}
// 	}
// })

//示例九十
Vue.directive('focus', {
	inserted: function (el) {
		//聚焦元素
		el.focus();
	}
})
var app = new Vue({
	el:'#app90'
})

//示例九十一
Vue.directive('test', {
	bind: function (el, binding, vnode) {
		var keys = [];
		for (var i in vnode) {
			keys.push(i);
		}
		el.innerHTML = 
			'name:' +binding.name+ '<br>' +
			'value:' +binding.value+ '<br>' +
			'expression:' +binding.expression+ '<br>' +
			'argument:' +binding.arg+ '<br>' +
			'modifiers:' +JSON.stringify(binding.modifiers)+ '<br>' +
			'vnode keys:' +keys.join(', ')
	}
});
var app = new Vue({
	el:'#app91',
	data: {
		message: 'some text'
	}
})

//示例九十二
Vue.directive('test', {
	bind: function (el, binding, vnode) {
		console.log(binding.value.msg);
		console.log(binding.value.name);
	}
});
var app = new Vue({
	el: '#app92'
})

//示例九十三
var A = document.getElementById('parent');
var B = document.getElementById('children');
console.log(A.contains(B));
console.log(B.contains(A));






