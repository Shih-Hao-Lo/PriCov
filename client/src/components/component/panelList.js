import React, {Component} from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom"
import {
    withRouter
  } from 'react-router-dom'

import BarChart from './../charts/barChart'
import arrow from './../../Assets/img/logo/Forward_arrow.png'
import amazon from './../../Assets/img/logo/amazon_logo.png'
import bestbuy from './../../Assets/img/logo/bestbuy.png'
import ebay from './../../Assets/img/logo/eBay.png'
class PanelList extends Component {
constructor(props){
    super(props);
    this.state={
        data:this.props.data
    }
}
componentWillMount(){
   
}
  componentDidMount(){
    
  }
  render() {

    let body = null;
    let li = null;
    let section = null;
    let logo = null;
    
  
    section = this.state.data && this.state.data.map(next => {
        let logo_arr=[]

        for(var i in next.stastistic){
        
            if(next.stastistic[i]!==0){
               
                logo_arr.push(i)
            }
        }

      
        li = next.result.slice(0,3).map(item=>{
         
            return (
            <li key={item.title}>
             - {item.title.slice(0,30)+'...'} ({item.website})
            </li>
            )
        }
        
        );
        return (
            
            <section key={next.productName}>
            <h2>{next.productName}</h2>
            <h3>Top 3</h3>
            <ul>
                {li}
            </ul>
            <BarChart data={next.result} max={next.max}/>
            <div className="panelList-console">
           
                    <div className="panelList-logo">
                    <ul>
                         {logo = logo_arr.map(item=>{
                             if(item === 'amazon'){
                                return(                      
                                    <li >
                                    <img src={amazon} alt='amazon'/>
                                    </li>
                                )
                             }else if(item === 'ebay'){
                                return(                      
                                    <li >
                                    <img src={ebay} alt='ebay'/>
                                    </li>
                                )
                             }else if(item === 'bestbuy' ){
                                return(                      
                                    <li >
                                    <img src={bestbuy} alt='bestbuy'/>
                                    </li>
                                )
                             }
                             
                         })}
                    </ul>
                   
                    </div>
                    <div className="panelList-panel">
                        <Link to={'/dashboard/'+ next.productName}>Go to Console<img src={arrow} alt="arrow"/></Link>
                    </div>
                    
           
                
            </div>
            
           </section>
            )
    }     
    
    );
    body = (
        <div className="panelList">
            {section}
        </div> 
    )
    return body
  }
}

export default withRouter(PanelList);