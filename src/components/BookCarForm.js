/**
 * Created by rbe on 11/05/2018.
 */
import React, { Component } from 'react';
import {  Item } from 'semantic-ui-react';

class BookCarForm extends Component {

    render() {




        return (


                                <div>
                                    <div className="ui card">
                                        <div className="content">
                                            <h4 className="ui sub header"> Description </h4>
                                            <div className="ui small feed">
                                                <div className="ui form">
                                                            <a>From</a>
                                                            <input type="date" />
                                                            <a>To</a>
                                                            <input type="date" />
                                                </div>
                                                <div className='ui two bottom attached buttons'>

                                                    <button className='ui basic red button' onClick={this.props.onFormClose}>
                                                        Cancel
                                                    </button>
                                                    <button className='ui basic blue button' onClick={this.props.onFormClose}>
                                                        Confirm
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

        );

    }

}

export default BookCarForm ;
