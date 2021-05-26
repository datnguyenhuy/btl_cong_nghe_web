import React, {Component} from 'react'
import axios from 'axios'

export const DataContext = React.createContext();

export class DataProvider extends Component{
    state = {
        products: [
        ]
    }

    getProducts=()=>{
        axios.defaults.headers.get['Content-Type'] = 'text/plain';
        axios.get('http://localhost:3000/product?type=all&page=1&limit=20')
        .then(res=>{
            console.log(res);
            this.setState({products: res.data.map(pro=>pro)});
        })
        .catch(error=>{})
    }

    deleteProduct = (productId)=>{
        this.setState({products: this.state.products.filter(p=>p.id!=productId)});
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