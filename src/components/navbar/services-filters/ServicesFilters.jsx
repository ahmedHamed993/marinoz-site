'use client';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const ServicesFilters = () => {
    const [value, setValue] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleToggleCalendar = () => {
        setIsCalendarOpen(prevState => !prevState); // Toggle calendar visibility
    };

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={handleToggleCalendar}
                style={{
                    backgroundColor: '#033975',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                }}
            >
                {isCalendarOpen ? 'Close Calendar' : 'Open Calendar'}
            </button>
            <div style={{ opacity: 1, marginTop: '10px' }}>
                <DatePicker
                    onChange={setValue}
                    value={value}
                    isOpen={isCalendarOpen} // Control visibility with state
                />
            </div>
        </div>
    );
};

export default ServicesFilters;
