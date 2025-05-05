import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function Search({ query, setQuery }) {
    return (
        <section className="search-page">
            <div className="container">
                <div className="search-page__input-wrapper">
                    <input
                        type="text"
                        placeholder="Поиск..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}  // Qidiruv natijasini yangilash
                    />
                    <IoSearch className="icon" />
                </div>
            </div>
        </section>
    );
}
