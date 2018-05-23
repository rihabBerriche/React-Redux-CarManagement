
import React, { Component } from 'react';
import CarItem from "./CarItem";


class CarList extends  Component {


            render() {
            const cars = this.props.cars.map((car) => (
            <CarItem
            key={car.id}
            id={car.id}
            color={car.color}
            />
            ));
            return (
            <div id='cars'>
            {cars}
            </div> );


    }
}

export  default  CarList ;