import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import type { EmailResponse, EmailFormData } from "../types/emails";
import { toast } from "react-hot-toast";
import { SendEmail } from "../services/SendEmail";
import { FormDataSchema } from "../zod/schemas/FormDataSchema";

export function useContactMe(){
    const [formData, setFormData] = useState<EmailFormData>({
        from_name: "",
        from_email: "",
        message: "", 
    });
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof EmailFormData, string[]>>>({});

    const sendEmailMutation = useMutation<EmailResponse, Error, EmailFormData>({
        mutationFn: (formData: EmailFormData) => {
            return SendEmail(formData);
        },
        retry: 2,
        onSuccess: () => {
            toast.success("Email sent successfully!");
            setFormData({
                from_name: "",
                from_email: "",
                message: "", 
            });
        },
        onError: () => {
            toast.error("Error sending email! Please try again later.");
        }  
    })

    function handleFormChange(field: keyof EmailFormData, value: string){
        if(formErrors[field]){
            setFormErrors((prev) => {
                const updatedErrors = { ...prev };
                delete updatedErrors[field];
                return updatedErrors;
            });
        }
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }
    
    function handleFormSubmit(e: React.FormEvent){
        e.preventDefault();

        const results = FormDataSchema.safeParse(formData);
        if (!results.success) {
        const zodError = results.error;
        const errors: Record<string, string> = {};
        
        zodError.issues.forEach((issue) => {
          const path = issue.path.join(".");
          // if there’s already an error recorded, don’t overwrite
          if (!errors[path]) {
            errors[path] = issue.message;
          }
        });

        setFormErrors(errors);

        return;
        } else {
            sendEmailMutation.mutate(formData);
        }
    }

    return {
        formData,
        ...sendEmailMutation,
        formErrors,
        handleFormChange,
        handleFormSubmit,
    }
}