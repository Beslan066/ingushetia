import React, { useState } from 'react';
import FilterIcon from '@/Components/FilterIcon.jsx';
import CloseIcon from '@/Components/CloseIcon.jsx';

export default function Filter({ categories, onFilterChange }) {
    const [filter, setFilter] = useState(false);
    const [category, setCategory] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    const handleFilterIconClick = () => {
        setFilter(!filter);
    };

    const handleFilterApply = () => {
        onFilterChange({ category, dateFrom, dateTo });
    };

    const handleFilterClear = () => {
        setCategory('');
        setDateFrom('');
        setDateTo('');
        onFilterChange({ category: '', dateFrom: '', dateTo: '' });
    };

    return (
        <div>
            <div className="filter-items d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <button
                        className={category === '' ? 'active' : ''}
                        onClick={() => {
                            setCategory('');
                            onFilterChange({ category: '', dateFrom, dateTo });
                        }}
                    >
                        Все новости
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.title}
                            className={category === cat.title ? 'active' : ''}
                            onClick={() => {
                                setCategory(cat.title);
                                onFilterChange({ category: cat.title, dateFrom, dateTo });
                            }}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
                <div className="filter-icon-button">
                    <button onClick={handleFilterIconClick}>
                        {filter ? <CloseIcon /> : <FilterIcon />}
                    </button>
                </div>
            </div>

            <div className={`filter-body align-items-center mb-24 ${filter ? 'active' : ''}`}>
                <div className="d-flex align-items-center">
                    <input
                        type="date"
                        placeholder="Период, с"
                        className="mr-12"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                    />
                    <div className="tire">
                        <img src="../../img/icons/tire.svg" alt="" />
                    </div>
                    <input
                        type="date"
                        placeholder="Период, до"
                        className="mr-12"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                    />
                </div>
                <div className="d-flex align-items-center">
                    <button className="mr-12" onClick={handleFilterApply}>Применить</button>
                    <button onClick={handleFilterClear}>Очистить</button>
                </div>
            </div>
        </div>
    );
}
