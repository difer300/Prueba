// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { wrap } from 'module';
import sinon from 'sinon';

// Components
import Winner from '../../components/Winner';

// Configuration
configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Winner component', () => {
    it('renders without crashing', () => {
      shallow(<Winner game = {[]} />);
    });

    it('renders with a winner player', () => {
      const wrapper = shallow(<Winner game = {{winner: "Mike"}} />);
      expect(wrapper.contains("Mike")).to.equal(true);
    });

    it('renders when click play again event', () => {
      const onPlayAgainButtonClick = sinon.spy();
      const wrapper = shallow(<Winner game = {{winner: "Mike"}} clearState = {onPlayAgainButtonClick}/>);
      wrapper.find('.buttonWinner').simulate('click');
      expect(onPlayAgainButtonClick.calledOnce).to.equal(true);
    });
});