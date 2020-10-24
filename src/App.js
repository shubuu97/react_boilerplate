import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

function App() {
    const [value, setValue] = useState('');

    return (
        <>
            <NumberFormat
                value={value}
                displayType={'number'}
                thousandSeparator={true}
                onValueChange={(e) => {
                    const { value } = e || {};
                    setValue(value);
                }}
            />
        </>
    );
}

export default App;
