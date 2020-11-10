var app = new Vue({
    el: '#shoppingCart',
    data: {
        list:[
            {
                id:'1', 
                name:'iPhone', 
                price:'6188', 
                count: 1,
                checked: false
            },
            {
                id:'2', 
                name:'iPad Pro', 
                price:'5888', 
                count: 1,
                checked: false
            },
            {
                id:'3', 
                name:'MacBook Pro', 
                price:'21488', 
                count: 1,
                checked: false
            }
        ]
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for(var i=0; i<this.list.length; i++){
                var item = this.list[i];
                total += item.price*item.count;
            }
            return total;
        }
    },
    methods: {
        handleCut: function(index) {
            if (this.list[index].count === 1) return; 
            this.list[index].count--;
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index) {
            this.list.splice(index,1);
        }
    }
})



