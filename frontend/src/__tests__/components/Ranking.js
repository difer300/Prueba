// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

// Components
import Ranking from '../../components/Ranking';

configure({ adapter: new Adapter() });

describe('Ranking component', () => {
    it('renders without crashing', () => {
      shallow(<Ranking getAllGame = {[]} />);
    });

    it('renders without winners', () => {
      const wrapper = shallow(<Ranking getAllGame = {[]} />);
      expect(wrapper.find(".winner").length).toBe(0);
    });

    it('renders with winners', () => {
        const wrapper = shallow(<Ranking getAllGame = {[{ winner: "Ane" }, { winner: "Mike" }]} />);
        expect(wrapper.find(".winner").length).toBe(2);
    });
});