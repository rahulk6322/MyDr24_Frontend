/* eslint-disable*/
import React, { useState } from 'react'

const FloatingLabelInput = ({ label, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false)
    const labelStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        transition: '0.2s ease all',
        fontSize: '16px',
        color: '#000',
        pointerEvents: 'none', // This must be a valid CSS value for pointer-events
    }

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
    }

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
    }

    return (
        <div style={containerStyle}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(value !== '')}
                style={inputStyle}
                className="font-rubik font-medium"
            />
            <label style={labelStyle} className="font-rubik">
                {label}
            </label>
        </div>
    )
}

export default FloatingLabelInput
