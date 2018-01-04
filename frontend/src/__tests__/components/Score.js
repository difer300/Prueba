// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

// Components
import Score from '../../components/Score';

// Configuration
configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Score component', () => {
    it('renders without crashing', () => {
      shallow(<Score rounds = {[]} />);
    });

    it('renders without rounds', () => {
      const wrapper = shallow(<Score rounds = {[]} />);
      expect(wrapper.find(".winner").length).to.equal(0);
    });

    it('renders with one round', () => {
        const wrapper = shallow(<Score rounds = {[{id: 1, winner: "Ane"}]} />);
        expect(wrapper.find(".winner").length).to.equal(1);
    });

    it('renders with three rounds', () => {
        const wrapper = shallow(<Score rounds = {[{id: 1, winner: "Ane"}, {id: 2, winner: "Ane"}, {id: 3, winner: "Matt"}]} />);
        expect(wrapper.find(".winner").length).to.equal(3);
    });
});