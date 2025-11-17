import styles from './SearchBar.module.css'
import toast from 'react-hot-toast';
import { useState } from 'react';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {

    const [value, setValue] = useState<string>('');
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const query = value.trim()
        
        if(!query) {
            toast.error('Please enter your search query.');
        }
        onSubmit(query);
        setValue('');
    }
    
    
    return(
        <header className={styles.header}>
  <div className={styles.container}>
    <a
      className={styles.link}
      href="https://www.themoviedb.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by TMDB
    </a>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  </div>
</header>
    )
}