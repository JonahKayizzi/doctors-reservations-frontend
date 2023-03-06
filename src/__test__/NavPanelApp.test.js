import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import renderWithProviders from './utils/utils-for-tests';

describe('renderNavPanel', () => {
  it('renders the nav panel', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('link', { name: 'Doctors' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Make Appointment' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'My Appointments' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Add Doctor' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Remove Doctor' })).toBeInTheDocument();
  });

  it('sends to the correct page on click', () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'Doctors' }));
    expect(screen.getByText('OUR DOCTORS')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Make Appointment' }));
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'My Appointments' }));
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Add Doctor' }));
    expect(screen.getByRole('button', { name: 'Add New Doctor' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Remove Doctor' }));
    expect(screen.getByText('Delete Doctors:')).toBeInTheDocument();
  });
});
