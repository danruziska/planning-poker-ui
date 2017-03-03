import React from 'react';
import {shallow} from 'enzyme';
import App from './app.jsx';

describe('<App />', () => {
    it('should render the page text \'App Start!\'',() => {
        //Arrange
        const wrapper = shallow(<App />);
        const expected = 'App Start!';
        //Act
        const actual = wrapper.find('p').text();
        //Assert
        expect(actual).toEqual(expected);        
    });
});


