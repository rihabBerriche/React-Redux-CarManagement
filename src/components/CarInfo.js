/**
 * Created by rbe on 11/05/2018.
 */

import React, { Component } from 'react';


class CarInfo extends Component {


    render() {
        return (
                                <div>
                                    <div className="ui card">
                                        <div className="content">
                                            <h4 className="ui sub header"> Description </h4>
                                            <div className="ui small feed">
                                                <div className="event">
                                                    <div className="content">
                                                        <div className="summary">
                                                            <a> Name :  </a> {this.props.color}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="event">
                                                    <div className="content">
                                                        <div className="summary">
                                                            <a> Color :  </a> {this.props.color}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="event">
                                                    <div className="content">
                                                        <div className="summary">
                                                            <a> Engine Power :  </a> {this.props.color}
                                                        </div>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                                </div>
                                </div>


        );
    }

}

export default CarInfo ;