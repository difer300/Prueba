// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

// Components
import Ranking from '../../components/Ranking';

// Configuration
configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Ranking component', () => {
    it('renders without crashing', () => {
      shallow(<Ranking getAllGame = {[]} />);
    });

    it('renders without winners', () => {
      const wrapper = shallow(<Ranking getAllGame = {[]} />);
      expect(wrapper.find(".winner").length).to.equal(0);
    });

    it('renders with winners', () => {
        const wrapper = shallow(<Ranking getAllGame = {[{ winner: "Ane" }, { winner: "Mike" }]} />);
        expect(wrapper.find(".winner").length).to.equal(2);
    });
});