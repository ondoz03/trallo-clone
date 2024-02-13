"use client"

import { create } from "@/actions/create-board"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom";

export const Form = () => {

    const initalState = { messages: null, errors: {} };
    const [state, dispatch] = useFormState(create, initalState);
    return (
        <form action={dispatch}>
            <div className="flex flex-col space-y-2">
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board title"
                    className="border-black border p-1"
                />
                {state?.errors?.title ? (
                <div>
                    {state?.errors?.title.map((error) => (
                        <div key={error} className="text-red-500 text-sm">
                            {error}
                        </div>
                    ))}
                </div>
                ) : null}
            </div>

        <Button
            type="submit"
            className=" sm bg-blue-500 text-white p-2 rounded-md px-4"
            size="sm"
        >Submit</Button>
    </form>
    )
}