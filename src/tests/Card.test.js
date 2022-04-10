import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe("Card component", () => {
  it("renders card component correctly", () => {
    const { container } = render(<Card />)
    expect(container).toMatchSnapshot()
  })
})