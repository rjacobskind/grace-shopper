'use strict'

const db = require('APP/db');
const User = require('./db/models/user');
const ShoppingCart = require('./db/models/shopping-cart');
const Review = require('./db/models/review');
const {expect} = require('chai');

// import fsMisc from 'fs-misc';
// import chai from 'chai';
// import chaiProperties from 'chai-properties';
// import chaiThings from 'chai-things';
// chai.use(chaiProperties);
// chai.use(chaiThings);
// const expect = chai.expect;
// import supertest from 'supertest-as-promised';
// import sinon from 'sinon';


describe('▒▒▒ Backend tests ▒▒▒', () => {

    beforeEach('Synchronize and clear database', () => db.sync({force: true})
        .then(function(){
            const review = Review.build({content: "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do."});
        })
    
    
    )
        


    //after('Synchronize and clear database', () => db.sync({force: true}));

    describe('Sequelize models', function () {

        describe('User Model', () => {

            before('wait for the db', () => db.didSync)

                describe('authenticate(plaintext: String) ~> Boolean', () => {
                    it('resolves true if the password matches', () =>
                    User.create({ password: 'ok' })
                    .then(user => user.authenticate('ok'))
                    .then(result => expect(result).to.be.true))

                    it("resolves false if the password doesn't match", () =>
                    User.create({ password: 'ok' })
                    .then(user => user.authenticate('not ok'))
                    .then(result => expect(result).to.be.false))
                })
        });

        
        describe('Review Model', () => {

            describe('definition', () => {

                // This assertion expects that the Review model will
                // have a `content` column with content length between 5 and 500 characters. 
                it('has expected content length', () => {
                    expect(review.attributes.content).to.be.an('object');
                    expect(review.attributes.content).to.have.length.lessThan(500);
                    expect(review.attributes.content).to.have.length.greaterThan(5);
                });

                // This assertion expects that the Message model will
                // put an `body` column in the messages table.
                it('has expected body definition', () => {
                    expect(Message.attributes.body).to.be.an('object');
                });

            });
        

            describe('validations', () => {

                it('defaults subject to "No Subject"', () => {
                    // .build creates an instance of a model
                    // without saving the represented data to the database.
                    const message = Message.build();
                    expect(message.subject).to.be.equal('No Subject');
                });

                it('requires a body', () => {
                    const message = Message.build();
                    return message.validate()
                        .then(err => {
                            expect(err).to.be.an('object');
                            expect(err.errors).to.contain.a.thing.with.properties({
                                path: 'body',
                                type: 'notNull Violation'
                            });
                        });
                });


        })
    })


})

});
