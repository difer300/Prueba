// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';

// Components
import Register from '../../components/Register';

// Configuration
configure({ adapter: new Adapter() });
//chai.use(chaiEnzyme());

describe('Register component', () => {
    it('renders without crashing', () => {
      shallow(<Register />);
    });

    it('renders when change player 1', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper).to.have.state('player1', '');
        wrapper.find('.player1').simulate('change', { target: { value: 'Jill' } });
        //expect(wrapper).to.have.state('player1', 'player one');
    });

    it('renders when change player 2', () => {
        const wrapper = shallow(<Register />);
        //expect(wrapper).to.have.state('player1', 'player one');
        wrapper.find('.player2').simulate('change', { target: { value: 'Mike' } });
    });
});