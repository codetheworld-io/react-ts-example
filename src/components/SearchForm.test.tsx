import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let search: jest.Mock;

  beforeEach(() => {
    search = jest.fn();
  });

  it('should call search function when submitting with a keyword', () => {
    const keyword = 'iPhone';

    render(<SearchForm search={search}/>);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: keyword } });
    fireEvent.click(screen.getByText('Search'));

    expect(search).toHaveBeenCalledWith(keyword);
  });
});
