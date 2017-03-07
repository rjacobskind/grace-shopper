'use strict'

import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {spy} from 'sinon'

import CartQuantForm from './cartQuantFormContainer'


describe('Cart Quantity Form', () => {

    let quantForm, onChangeSpy;
    beforeEach('Create component and onChange spy', () => {
        onChangeSpy = spy()
        quantForm = shallow(<CartQuantForm onChange={onChangeSpy} />)
    })

    it('sets local state when inputs change', () => {
        const quantityInput = quantForm.find('select')
        quantityInput.simulate('change', {target: {value: 3}})
        expect(quantForm.state().quantity).to.be.equal(3)
    })

})
