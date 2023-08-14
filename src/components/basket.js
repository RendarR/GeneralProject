export default () => {
    let app = new Vue({
        el:"#app",
        data:{
            items:[],
            totalPrice:null,
            totalAmount:null,
            showProduct: false, //ShowBasket
            url:'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
            // url:'../../url/basket.json',

        },
        computed:{
            priceSum(){
                let sum = 0;
                for(let item of this.items){
                    sum += (+item.productPrice * +item.amount) ;
                }
                // console.log(sum);
                return sum;
            }
        },
        methods:{
            get(url){ //Основной метод для вытаскивания из сылки json
                // fetch(url ссылка на json) then - метод получаешь результат из промиса
                return fetch(url).then(d=>d.json())
            },
            deleteBasket(item,ix){
                if(this.items[ix].amount){
                    item.amount -=1
                    console.log(item.amount)
                }
                else{
                    this.items.splice(ix,1);
                }

            },
            addBasket(item){
                console.log(item.amount)
                item.amount +=1
            }
        },
        mounted(){
            this.get(this.url) //Основной метод для вытаскивания из json данные и помещение их в data: items[]
                .then(item => { //Берем отдельный итем из ссылки и передаем его в массив итемс с контентом
                    this.items = item.content;
                    this.totalPrice = item.totalPrice;
                    this.totalAmount = item.amount;
                    console.log(item)
                    // console.log(item.content);
                    // console.log(item.totalPrice);
                    // console.log(item.totalAmount);
                })
        },
        update(){
        }
    })
}