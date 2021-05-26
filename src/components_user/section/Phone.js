import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import axios from 'axios'

class Phone extends Component{
    static contextType = DataContext

    state={
        products:[]
    }

    componentDidMount(){

        axios.defaults.headers.get['Content-Type'] = 'text/plain';
        axios.get('http://localhost:3000/product?type=phone&page=1&limit=10')
        .then(res=>{
            this.setState({products: res.data.map(pro=>pro)});
        })
        .catch(error=>{})

    }

    render(){
        const {products} = this.state

        return(
            <div className = "productmanage">
            {
                products.map(product =>(
                    <div className="card" key={product.id}>
                        <Link to={`/user/product/${product.id}`}>
                            <img src={product.imgUrl} alt=""/>
                        </Link>
                        <div>
                            <h3>
                            <Link to={`/user/product/${product.id}`}>{product.name}</Link>
                            </h3>
                            <br></br>
                            <span>
                                ${product.price}
                            </span>
                            <p>{product.type}</p>
                            <Link to={`/user/product/${product.id}`}><button>Chi tiết sản phẩm</button></Link>
                        </div>
                    </div>
                ))
            }
         </div>
        )
    }
}
export default Phone;