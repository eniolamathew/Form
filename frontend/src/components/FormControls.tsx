import React, {useState, useEffect, FocusEvent, ChangeEvent} from 'react'
import { IFormInputProps, IFormTexteraProps } from '../utils/interface';

const FormInput: React.FC<IFormInputProps> = ({type, id, label, value, onChange, onBlur, placeholder, error}) => {
    const [newValue, setNewValue] = useState(value);

    useEffect(() => { setNewValue(value)}, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.target.value);
        onchange && onChange(e);
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setNewValue(value.trim());
        onBlur && onBlur(e);
    }

  return (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input 
            type={type ?? "text"}
            name={id}
            id={id}
            className="w-full px-4 py-3 focus:ring-blue-500 block border-gray-300 focus:border-blue-500 focus-ring-0 focus:outline-none rounded-lg h-[56px] leading-[30px]" 
            placeholder={placeholder}
            value={newValue}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-describedby={`${id}-hint`}
        />
        {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  )
}

const FormTextera: React.FC<IFormTexteraProps> = ({rows, id, label, value, onChange, onBlur, placeholder, error}) => {
    const [newvalue, setNewValue] = useState(value);

    useEffect(() => { setNewValue(value)}, [value]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewValue(e.target.value);
        onchange && onChange(e);
    }

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
        setNewValue(value.trim());
        onBlur && onBlur(e);
    }

  return (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
        <textarea 
            name={id}
            id={id}
            rows={rows}
            className="w-full px-4 py-3 focus:ring-blue-500 block border-gray-300 focus:border-blue-500 focus-ring-0 focus:outline-none rounded-lg leading-[30px]" 
            placeholder={placeholder}
            value={newvalue}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-describedby={`${id}-hint`}
        />
        {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  )
}


export { FormInput, FormTextera };