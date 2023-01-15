import React from 'react';

export type SearchFormProps = {
  search(keyword: string): void;
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    props.search(formData.get('keyword') as string);
  }

  return (
    <form data-testid="search-form" onSubmit={handleSubmit}>
      <input data-testid="search-input" type="text" name="keyword"/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
