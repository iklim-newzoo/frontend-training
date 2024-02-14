import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should have h1', () => {
    render(<App />);
    const element = screen.getByText('Pokemon');
    expect(element).toBeInTheDocument();
  });
});
