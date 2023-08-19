import { ChangeEvent, useEffect, useState } from 'react';
import './search.css';

interface Props {
  onSearch: (title: string) => void;
  value: string;
}

export default function Search(props: Props) {
  const { onSearch, value } = props;

  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    const delayAction = setTimeout(() => {
      onSearch(inputValue);
    }, 1000);

    return () => clearTimeout(delayAction);
  }, [inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        className="search-input"
        placeholder="Buscar..."
        onChange={handleInputChange}
      />
    </div>
  );
}
