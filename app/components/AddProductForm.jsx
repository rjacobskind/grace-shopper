/* This is the start of our Add Product Form 

import React, { Component } from 'react';

export default function(props) {

	const handleChange = props.handleChange;
  	const handleSubmit = props.handleSubmit;

    return (
    <div> 
        <h3>Add a Product</h3>
        <hr/>
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="title" className="col-sm-2 control-label">Product Name</label>
                <div className="col-sm-10">
                    <input name="name" type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="url" className="col-sm-2 control-label">Product Image URL</label>
                <div className="col-sm-10">
                    <input name="url" type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="notes" className="col-sm-2 control-label">Product Description</label>
                <div className="col-sm-10">
                    <textarea name="description" rows="5" type="text" className="form-control" ></textarea>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="url" className="col-sm-2 control-label">Price</label>
                <div className="col-sm-10">
                    <input name="price" type="number" className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="url" className="col-sm-2 control-label">Inventory Amount</label>
                <div className="col-sm-10">
                    <input name="inventoryAmount" type="number" className="form-control" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                <div className="col-sm-10">
                    <select multiple name="starred">
                        <option>heart</option>
                        <option>earth</option>
                        <option>fire</option>
                        <option>spirit</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">submit</button>
            </div>
        </form>
    </div> 

        )
  }
}

*/ 
