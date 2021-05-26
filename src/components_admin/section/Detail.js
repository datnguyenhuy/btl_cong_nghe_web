import React, {Component} from 'react'
import {DataContext} from '../Context.js'
import {Link} from 'react-router-dom'
import '../css/Details.css'

class Detail extends Component{
    static contextType = DataContext;
    state ={
        product:[]
    }

    componentDidMount(){
        const res = this.context
        const data = res.products.filter(item =>
            {
            return item.id.toString() === this.props.match.params.id.toString();
        }
        );

        this.setState(
            {
                product:data
            }
        )

    }

    deleteProduct=()=>{
        console.log("1111111111111111111111");
        console.log(this.props);
        alert('Bạn đã xóa thành công sản phẩm ' + this.props.match.params.name);
    }

    render(){
        const {product} = this.state
        return(
            <div >
                {
                    product.map(item =>(
                        <div className="detail">
                            <img src={item.imgUrl}></img>
                            <span>Price: ${item.price}</span>
                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <p>Description: {item.description}</p>
                            <button onClick={this.deleteProduct}><Link to="/admin">Delete Product</Link></button>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Detail;