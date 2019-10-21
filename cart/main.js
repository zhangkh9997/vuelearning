const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                data: '2016-2',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                data: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                data: '2008-10',
                price: 99.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                data: '2006-3',
                price: 120.00,
                count: 1
            }
        ]
    },
    methods: {
        increment(index) {
            // count++
            // console.log(id);
            this.books[index].count++
        },
        decrement(index) {
            // count--
            // console.log(id)
            if (this.books[index].count > 1) {
                this.books[index].count--
            }
        },
        removeBtn(index) {
            this.books.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice
        }
    }
});