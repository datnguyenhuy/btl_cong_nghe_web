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
        ],
    }

    componentDidMount(){
        axios.defaults.headers.get['Content-Type'] = 'text/plain';
        axios.get('http://localhost:3000/product?type=all&page=1&limit=70')
        .then(res=>{
            this.setState({products: res.data.map(pro=>pro)});
        })
        .catch(error=>{})
    }

    render(){
        const {products} = this.state
        return(
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}