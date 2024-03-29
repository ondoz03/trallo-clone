"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {

    const initalState = { messages: null, errors: {} };
    const [state, dispatch] = useFormState(create, initalState);
    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <FormInput errors={state?.errors}/>
            </div>

            <FormButton/>
        </form>
    )
}