'use strict'

const db = require('APP/db')
const Product = db.model('product')
const {expect} = require('chai')

describe('Product Model', () => {
	before('wait for the db', () => db.didSync)

    describe('schema', () => {

	    // This assertion expects that the Product model will have
	    // a 'name' column.
	    it('has the a name property that is a string', () => {
	        expect(Product.attributes.name).to.be.an('object');
	    });

	 })

    describe('validations', () => {

	    it('defaults the image to be our default image', () =>{
	    	const product = Product.build()
	    	expect(product.image).to.be.equal('/default_potion.png')

	    })

	})

})
