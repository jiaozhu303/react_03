import {expect} from 'chai';
import sparrow from '../lib/sparrow';

describe('test cast', () => {

    let lib;

    before(() => {
        lib = new sparrow();
    });

    describe('test sparrow get name', () => {
        it("", () => {
            expect(lib.getName()).to.equal('hello tset_name');
        });
    });

})