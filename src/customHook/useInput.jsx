import React, { useState } from 'react'

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = ev => {
        const { type, checked, value } = ev.target;
        const replacedValue = value.replace(/^0+/,'');
        if(type === "number") {
          if(/^\d*$/.test(replacedValue))
            setValue(replacedValu.replace(/[^0-9]/g, ''));
        } else {
          setValue(type === "checkbox" ? checked :  value);
        }
    }
  return {value, onChange}
}

export default useInput