//used in contact.js and login.js 

import {Component} from 'react';

class Field extends Component {
    render () {
        return (
            <div>
                {this.props.elementName === 'input' ? 
                <div className="form-group">
                    <input 
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type}
                        placeholder={this.props.placeholder} 
                        required="required" 
                        data-validation-required-message="Please enter your name."
                        //commenting out due to formik
                        //value={this.props.value}
                        //onChange={e => this.props.onChange(e)}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        />
                </div>
                    :
                    <div className="form-group form-group-textarea mb-md-0"> 
                        <textarea 
                        className="form-control" 
                        id={this.props.name} 
                        placeholder={this.props.placeholder} 
                        required="required" 
                        data-validation-required-message="Please enter a message."
                        //comment due to formik
                        //value={this.props.value}                            
                        //onChange={e =>  this.props.onChange(e)}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        />
                    </div>
                    }
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) && 
                    <span>{this.props.errors}</span>
                    }
                </p>
            </div>
            )
    }
}

export default Field;