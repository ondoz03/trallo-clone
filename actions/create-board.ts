"use server"

import {z} from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null;
}

const CreateBoard = z.object({
    title:z.string().min(3, {
        message: "Title must be at least 3 characters long"
    })
});

export async function create(prevState:State,formData:FormData){
    // const title = formData.get("title") as string;
    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title")
    });

    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Mising Fields."
        }
    }

    const {title} = validatedFields.data;

    try{
        await db.board.create({
            data: {
             title,
            }
        })
    }catch (error){
        return {
            message: "Database Error. Please try again later."
        }

    }


    revalidatePath("/organization/org_2cDi59LDvb2hEvHcNJqxv8MTmBJ");
    redirect("/organization/org_2cDi59LDvb2hEvHcNJqxv8MTmBJ");
}