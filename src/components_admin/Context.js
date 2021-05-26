import React, {Component} from 'react'
import axios from 'axios'

export const DataContext = React.createContext();

export class DataProvider extends Component{
    state = {
        products: [
            {
                "id": "1",
                "title": "Nike air force 1",
                "src": "https://cdn.tgdd.vn/Products/Images/42/220833/Image360/samsung-galaxy-s21-org-12.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 100,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "2",
                "title": "Nike jordan 1",
                "src": "https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-1-org.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 19,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "id": "3",
                "title": "Nike air force 1",
                "src": "https://swagger.com.vn/wp-content/uploads/2020/09/nike-Jordan-1-Retro-High-Obsidian-UNC-1.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "4",
                "title": "Nike jordan 1",
                "src": "https://khogiaythethao.vn/wp-content/uploads/2020/12/giay-nike-air-jordan-low-sb-unc.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 19,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "id": "5",
                "title": "Nike air",
                "src": "https://giaygiare.vn/upload/sanpham/large/nike-air-jordan-1-mid-light-smoke-grey.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 10,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "6",
                "title": "Nike sandal",
                "src": "https://sneakerholicvietnam.vn/wp-content/uploads/2020/10/air-force-1-07-shoe-3nGnlt.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 17,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "7",
                "title": "Nike air force 1",
                "src": "https://sneakerholicvietnam.vn/wp-content/uploads/2020/10/air-force-1-07-shoe-3nGnlt.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "8",
                "title": "Nike jordan 1",
                "src": "https://cf.shopee.vn/file/d6fd9f9a70c6925ed7d2ca5af594583e",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 19,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "id": "9",
                "title": "Nike air force 1",
                "src": "https://swagger.com.vn/wp-content/uploads/2020/09/nike-Jordan-1-Retro-High-Obsidian-UNC-1.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "10",
                "title": "Nike jordan 1",
                "src": "https://khogiaythethao.vn/wp-content/uploads/2020/12/giay-nike-air-jordan-low-sb-unc.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 19,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "id": "11",
                "title": "Nike air",
                "src": "https://giaygiare.vn/upload/sanpham/large/nike-air-jordan-1-mid-light-smoke-grey.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 10,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "id": "12",
                "title": "Nike sandal",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "Authentic",
                "content": "Nike processes information about your visit using cookies to improve site performance, facilitate social media sharing and offer advertising tailored to your",
                "price": 17,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            }
        ],
    }

    /*addCart =(id) =>{

        const {products, cart} = this.state
        const check = cart.every(item =>{
            return item._id !==id
        })
        if(check){
            const data = products.filter(item =>{
                return item._id ===id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("the product has been in cart")
        }
        this.getTotal();
    }

    addItem =(id) =>{
        const {cart} = this.state
        cart.forEach(item =>{
            if(item._id === id){
                item.count +=1
            }
        })
        this.setState({
            cart: cart
        })
        this.getTotal();
    }

    getTotal =() =>{
        const{cart, total} = this.state
        const res = cart.reduce((prev, item)=>{
            return prev+ item.price*item.count
        }, 0)
        this.setState({
            total: res
        })
    }

    removeCart =(id) =>{
        const {cart} = this.state
        cart.forEach((item, index) =>{
            if(item._id === id)   cart.splice(index, 1)
        })
        this.setState({
            cart: cart
        })
        this.getTotal();
    }

    removeItem =(id) =>{
        const {cart} = this.state
        cart.forEach(item =>{
            if(item._id === id){
                item.count -=1
                if(item.count === 0) this.removeCart(item._id)
            }
        })
        this.setState({
            cart: cart
        })
        this.getTotal();
    }*/

    getProducts=()=>{
        axios.defaults.headers.get['Content-Type'] = 'text/plain';
        axios.get('http://localhost:3000/product?type=all&page=1&limit=20')
        .then(res=>{
            console.log(res);
            this.setState({products: res.data.map(pro=>pro)});
        })
        .catch(error=>{})
    }

    componentDidMount(){
        axios.defaults.headers.get['Content-Type'] = 'text/plain';
        axios.get('http://localhost:3000/product?type=all&page=1&limit=20')
        .then(res=>{
            console.log(res);
            this.setState({products: res.data.map(pro=>pro)});
        })
        .catch(error=>{})
    }

    render(){
        const {products} = this.state
        //const {addCart, addItem, removeItem} = this
        return(
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}