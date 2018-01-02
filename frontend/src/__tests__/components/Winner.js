// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import sinon from 'sinon';

// Components
import Winner from '../../components/Winner';

configure({ adapter: new Adapter() });

describe('Winner component', () => {
    it('renders without crashing', () => {
      shallow(<Winner game = {[]} />);
    });

    it('renders with a winner player', () => {
      const wrapper = shallow(<Winner game = {{winner: "Mike"}} />);
      expect(wrapper.contains("Mike")).toEqual(true);
    });

    it('simulate click play again event', () => {
      const onPlayAgainButtonClick = sinon.spy();
      const wrapper = shallow(<Winner game = {{winner: "Mike"}} clearState = {onPlayAgainButtonClick}/>);
      wrapper.find('.buttonWinner').simulate('click');
      expect(onPlayAgainButtonClick.calledOnce).toEqual(true);
    });
});