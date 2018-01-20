import React from 'react';
import { shallow } from 'enzyme';
import Hello from './hello';

describe('<Hello />', () => {
  const root = shallow(<Hello />);
  it('it can render correctly', () => {
    expect(root.find('h1').length).toEqual(1);
  });
});
