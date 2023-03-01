import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import renderWithProviders from './utils/utils-for-tests';

describe('renderNavPanel', () => {
  it('renders the nav panel', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Doctors')).toBeInTheDocument();
    expect(screen.getByText('Make Appointment')).toBeInTheDocument();
    expect(screen.getByText('My Appointments')).toBeInTheDocument();
    expect(screen.getByText('Add Doctor')).toBeInTheDocument();
    expect(screen.getByText('Remove Doctor')).toBeInTheDocument();
  });

  it('sends to the correct page on click', () => {
    renderWithProviders(<App />);
    fireEvent.click(screen.getByText('Doctors'));
    expect(screen.getByText('Doctors')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Make Appointment'));
    expect(screen.getByRole('button', { name: /Make Appointment/i })).toBeInTheDocument();
    fireEvent.click(screen.getByText('My Appointments'));
    expect(screen.getByText('List of Appointments')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Add Doctor'));
    expect(screen.getByRole('button', { name: /Add New Doctor/i })).toBeInTheDocument();
    fireEvent.click(screen.getByText('Remove Doctor'));
    expect(screen.getByText('Delete Doctors:')).toBeInTheDocument();
  });
});
