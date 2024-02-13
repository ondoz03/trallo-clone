"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";

export const FormButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md px-4"
        size="sm"
        disabled={pending}
        >Submit</Button>
    )
}