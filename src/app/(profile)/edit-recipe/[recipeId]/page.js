"use client";

import AddRecipe from "@/app/(profile)/add-recipe/page";
import {useEffect, useState} from "react";
import {getRecipe} from "@/api/recipe";
import toast from "react-hot-toast";

export default function EditRecipe ({ params }) {
    const { recipeId } = params;
    const [defaultValues, setDefaultValues] = useState();

    useEffect(() => {
        const fetchRecipe = async (recipeId) => {
            try {
                const res = await getRecipe(recipeId);
                const { data } = res;
                setDefaultValues(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error(error.message);
            }
        };

        fetchRecipe(recipeId);
    }, [recipeId]);

    if (defaultValues) {
        return (
          <AddRecipe defaultValues={defaultValues} />
        );
    }

    return null;
}