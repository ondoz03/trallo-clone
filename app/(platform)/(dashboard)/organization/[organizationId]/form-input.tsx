"use client"

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

interface FormInputProps {
    errors?:{
        title?: string[];
    }
}

export const FormInput = ({errors}: FormInputProps) => {
    const { pending } = useFormStatus();
    return (
        <div>
            <Input
                id="title"
                name="title"
                required
                placeholder="Enter a board title"
                disabled={pending}
            />

            {errors?.title ? (
                <div>
                    {errors?.title.map((error) => (
                        <div key={error} className="text-red-500 text-sm">
                            {error}
                        </div>
                    ))}
                </div>
                ) : null}
        </div>
    )
}