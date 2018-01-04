// Dependencies
import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import sinon from 'sinon';

// Components
import Round from '../../components/Round';

// Configuration
configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('Round component', () => {
    it('renders without crashing', () => {
      shallow(<Round game = {[]} rule = {[]}/>);
    });

    it('renders with load rules', () => {
        const wrapper = shallow(<Round game = {{}} rule = {[{ move: "rock", kills: "scissors"}, { move: "papper", kills: "rock"}, { move: "scissors", kills: "papper"}]} />);
        expect(wrapper.find(".buttonRule").length).to.equal(3);
    });

    it('renders when player 1 play', () => {
        const wrapper = shallow(<Round game = {{}} rule = {[{ move: "rock", kills: "scissors"}, { move: "papper", kills: "rock"}, { move: "scissors", kills: "papper"}]} />);
        expect(wrapper).to.have.state('currentPlayer', 1);
        wrapper.find('.buttonRule').at(0).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 2);
        expect(wrapper.state().rounds.length).to.equal(1);
        expect(wrapper.state().rounds[0].movePlayer1).to.equal("rock");
    });

    it('renders when player 2 play', () => {
        const wrapper = shallow(<Round game = {{player1: "Jill", player2: "Mike" }} rule = {[{ move: "rock", kills: "scissors"}, { move: "papper", kills: "rock"}, { move: "scissors", kills: "papper"}]} />);
        expect(wrapper).to.have.state('currentPlayer', 1);
        wrapper.find('.buttonRule').at(0).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 2);
        wrapper.find('.buttonRule').at(1).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 1);
        expect(wrapper.state().rounds.length).to.equal(2);
        expect(wrapper.state().rounds[0].movePlayer1).to.equal("rock");
        expect(wrapper.state().rounds[0].movePlayer2).to.equal("papper");
    });

    it('renders when player 1 and player 2 play and its a tie', () => {
        const wrapper = shallow(<Round game = {{ player1: "Jill", player2: "Mike"}} rule = {[{ move: "rock", kills: "scissors"}, { move: "papper", kills: "rock"}, { move: "scissors", kills: "papper"}]} />);
        expect(wrapper).to.have.state('currentPlayer', 1);
        wrapper.find('.buttonRule').at(0).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 2);
        wrapper.find('.buttonRule').at(0).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 1);
        expect(wrapper.state().rounds.length).to.equal(2);
        expect(wrapper.state().rounds[0].movePlayer1).to.equal("rock");
        expect(wrapper.state().rounds[0].movePlayer2).to.equal("rock");
        expect(wrapper.state().rounds[0].winner).to.equal("Tie");
    });

    it('renders when player 1 and player 2 play and player 1 win the round', () => {
        const wrapper = shallow(<Round game = {{player1: "Jill", player2: "Mike" }} rule = {[{ move: "rock", kills: "scissors"}, { move: "papper", kills: "rock"}, { move: "scissors", kills: "papper"}]} />);
        expect(wrapper).to.have.state('currentPlayer', 1);
        wrapper.find('.buttonRule').at(1).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 2);
        wrapper.find('.buttonRule').at(0).simulate('click');
        expect(wrapper).to.have.state('currentPlayer', 1);
        expect(wrapper.state().rounds.length).to.equal(2);
        expect(wrapper.state().rounds[0].movePlayer1).to.equal("papper");
        expect(wrapper.state().rounds[0].movePlayer2).to.equal("rock");
        expect(wrapper.state().rounds[0].winner).to.equal("Jill");
    });
    
});