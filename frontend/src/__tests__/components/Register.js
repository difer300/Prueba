// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import sinon from 'sinon';

// Components
import Register from '../../components/Register';

// Configuration
configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Register component', () => {
    it('renders without crashing', () => {
      shallow(<Register />);
    });

    it('renders when change player 1', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper).to.have.state('player1', '');
        wrapper.find('.player1').simulate('change', { target: { value: 'Jill' } });
        expect(wrapper).to.have.state('player1', 'Jill');
    });

    it('renders when change player 2', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper).to.have.state('player2', '');
        wrapper.find('.player2').simulate('change', { target: { value: 'Mike' } });
        expect(wrapper).to.have.state('player2', 'Mike');
    });

    it('renders when start game with only one player', () => {
        const wrapper = shallow(<Register />);
        const errorMessage = 'Please enter the name of each player';
        expect(wrapper).to.have.state('player1', '');
        wrapper.find('.player1').simulate('change', { target: { value: 'Jill' } });
        wrapper.find('.buttonRegister').simulate('click');
        expect(wrapper).to.have.state('error', errorMessage);
    });

    it('renders when start game with the two player names equals', () => {
        const wrapper = shallow(<Register />);
        const errorMessage = `Player 1 and Player 2 can't be the same`;
        wrapper.find('.player1').simulate('change', { target: { value: 'Jill' } });
        wrapper.find('.player2').simulate('change', { target: { value: 'Jill' } });
        wrapper.find('.buttonRegister').simulate('click');
        expect(wrapper).to.have.state('error', errorMessage);
    });

    it('renders when start game with the two players', () => {
        const createGameClick = sinon.spy();
        const wrapper = shallow(<Register createGame = {createGameClick} />);
        wrapper.find('.player1').simulate('change', { target: { value: 'Jill' } });
        wrapper.find('.player2').simulate('change', { target: { value: 'Mike' } });
        wrapper.find('.buttonRegister').simulate('click');
        expect(createGameClick.calledOnce).to.equal(true);
    });
});