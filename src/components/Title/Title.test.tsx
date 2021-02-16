import React from 'react';
import { shallow } from 'enzyme';
import { Title } from './';

test('Renders the component', () => {
    const component = shallow(<Title label="Test" />)
    expect(component).toMatchSnapshot();
    expect(component.text()).toBe("Test");
});