import React, {Component} from 'react'
import axios from 'axios'

export const DataContext = React.createContext();

export class DataProvider extends Component{
    state = {
        products: [
        ],
    }

    componentDidMount(){
        axios.defaults.headers.get['Content-Type'] = 'text/plain';
        axios.get('http://localhost:3000/product?type=all&page=0&limit=100')
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