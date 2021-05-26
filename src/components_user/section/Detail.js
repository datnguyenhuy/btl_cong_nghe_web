import React, {Component} from 'react'
import {DataContext} from '../Context.js'
import {Link} from 'react-router-dom'
import '../../components_admin/css/Details.css'

class Detail extends Component{
    static contextType = DataContext;
    state ={
        product:[]
    }

    componentDidMount(){
        const res = this.context
        const data = res.products.filter(item =>
            {
                console.log(item.id);
                console.log(this.props.match.params.id.toString())
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
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default Detail;