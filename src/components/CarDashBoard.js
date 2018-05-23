/**
 * Created by rbe on 11/05/2018.
 */


import React, { Component } from 'react';
import CarList from "./CarList";
import { Link } from 'react-router-dom';
import axios from 'axios';
class CarDashBoard extends Component {

   state = {
        cars : [],
    };


    componentDidMount() {

        axios.get('http://localhost:9898/Car')
            .then(response=> {
                this.setState({ cars : response.data });
                console.log(this.state.cars);
            });
    };
    render() {

        return(

            <div className='ui three column centered grid'>
                <div className='column'>
            <div> <CarList cars = {this.state.cars}/> </div>
                </div>
            </div>
        );
    }
}





export default CarDashBoard ;