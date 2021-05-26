import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'

class Product extends Component{
    static contextType = DataContext
    render(){
        const {products} = this.context
        return(
            <div className = "productmanage">
            {
                products.map(product =>(
                    <div className="card" key={product.id}>
                        <Link to={`/admin/${product.id}`}>
                            <img src={product.imgUrl} alt=""/>
                        </Link>
                        <div>
                            <h3>
                            <Link to={`/admin/${product.id}`}>{product.name}</Link>
                            </h3>
                            <br></br>
                            <span>
                                ${product.price}
                            </span>
                            <Link to="/admin"><button>Delete Product</button></Link>
                        </div>
                    </div>
                ))
            }
         </div>
        )
    }
}
export default Product;