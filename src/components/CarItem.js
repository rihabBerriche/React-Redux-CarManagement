/**
 * Created by rbe on 11/05/2018.
 */

import React, { Component } from 'react';
import CarInfo from "./CarInfo";
import BookMangerComponent from "./BookMangerComponent";
import { Item } from 'semantic-ui-react';

class CarItem extends  Component {


    render()  {



                    return ( <div>
                        <Item.Group relaxed>
                            <Item>
                                <Item.Image size='small' src='assets/images/car5.jpeg'/>

                                <Item.Content verticalAlign='middle'>
                        <CarInfo   color =  {this.props.color}
                                   EnginePower =  {this.props.color}
                                   name =  {this.props.color}
                        />

                        <BookMangerComponent />

                                </Item.Content>
                            </Item>
                        </Item.Group>
                        </div>

          );
                }

}

export default CarItem;