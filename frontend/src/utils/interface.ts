export interface IFormInputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    placeholder?: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}


export interface IFormTexteraProps {
    id: string;
    label: string;
    value: string;
    rows: number;
    placeholder?: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export interface IFormData{
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface IFormErrors{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}
 