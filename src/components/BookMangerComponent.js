/**
 * Created by rbe on 18/05/2018.
 */

import React, { Component } from 'react';
import BookCarForm from "./BookCarForm";

class BookMangerComponent extends Component {

    state = {
       isOpen : false
    }

    handleIsOpen = () => {
        this.setState({ isOpen :true })
    }
    onFormClose = () => {
        this.setState({ isOpen :false })
    }


    render(){

        if (this.state.isOpen){
            return(
            <div> <BookCarForm onFormClose= {this.onFormClose}
             />

            </div>
              );
        }
        else {
            return(<div> <button onClick={this.handleIsOpen}>Book</button></div>)
        }
    }
}

export default BookMangerComponent ;