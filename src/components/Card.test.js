import { render, screen } from '@testing-library/react';
import { getByText, findByText, fireEvent } from '@testing-library/react';
import Card from './Card';

test("People Card Data", () => {
    render(<Card />);
    expect(screen.getByText("Birth Year:")).toBeInTheDocument();
    expect(screen.getByText("Height:")).toBeInTheDocument();
    expect(screen.getByText("Eye Color:")).toBeInTheDocument();
    expect(screen.getByText("Skin Color:")).toBeInTheDocument();
    expect(screen.getByText("Gender:")).toBeInTheDocument();
  });
