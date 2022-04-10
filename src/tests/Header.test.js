import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders Header component correctly', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})