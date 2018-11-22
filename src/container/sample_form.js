import React, { Component } from 'react';

const isValidElement = element => {
    return element.name && element.value;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (isValidElement(element)) {
        data[element.name] = element.value;
    }
    return data;
}, {});

class SampleForm extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {};
    }
    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        // const valiedElements = formToJSON(e.target);
        // Object.keys(valiedElements).forEach(element => {
        //     formData.append(element, valiedElements[element]);
        // });
        
        fetch('/api/stocks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formData
        })
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                ...myJson
            });
            
        })
        .catch(err => {
            return err;
        });
    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Stock Name</label>
                            <input type="text" name='stock_name' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">CEO Name</label>
                            <input type="text" name='ceo' className="form-control" id="exampleFormControlSelect1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">URL</label>
                            <textarea name="url" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-info">Submit</button>
                    </form>
                </div>
                <div className='result'>
                    {
                        Object.keys(this.state) !== 0 ? (
                            <div>
                                {this.state.stock_name}
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default SampleForm;