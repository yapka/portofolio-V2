import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Submit form logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;