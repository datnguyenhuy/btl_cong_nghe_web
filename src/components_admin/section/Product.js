import Cookies from 'js-cookie'
import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import axios from 'axios'
import querystring from 'querystring';

class Product extends Component{
    static contextType = DataContext

    deleteProduct =  (productId)=>{
        let headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Access-Control-Allow-Origin': '*',
                'token': Cookies.get('token')
		};
        axios.delete(`http://localhost:3000/product/${productId}`,{
            data: querystring.stringify({a:'asssj'}),
            headers: headers
        })
        .then(res=>{
            // console.log("delete ",productId," success");
            // console.log(this.context.products.length);
            // let index = this.context.products.findIndex(p=>p.id === productId);
            // console.log(index);
            // if (index>=0)this.context.products.splice(index,1);
            
            // console.log(this.context.products.length);
            // this.render();
        })
        .catch((error)=>{console.log(error.message)});
    }

    render(){
        console.log("on render");
        console.log(this.context);
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
                            <Link to="/admin"><button onClick={this.deleteProduct.bind(this,product.id)}>Delete Product</button></Link>
                        </div>
                    </div>
                ))
            }
         </div>
        )
    }
}
export default Product;