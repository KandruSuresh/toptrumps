import { render, screen } from '@testing-library/react';
import { getByText, findByText, fireEvent } from '@testing-library/react';
import Cards from './Cards';

test("People Cards Data Template", () => {
    render(<Cards />);
    fireEvent.click(screen.getByText("People"));
    fireEvent.click(screen.getByText("Starships"));
});
