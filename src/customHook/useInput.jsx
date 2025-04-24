import React, { useState } from 'react'

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = ev => {
        const { type, checked, value } = ev.target;
        setValue(type === "checkbox" ? checked : type === "number" ? Number(value) : value);
    }
  return {value, onChange}
}

export default useInput