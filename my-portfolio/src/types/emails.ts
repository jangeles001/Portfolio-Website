export type EmailResponse = {
    status: number;
    text: string;
}

export type EmailFormData = {
    from_name: string | null;
    from_email: string | null;
    message: string | null;
};