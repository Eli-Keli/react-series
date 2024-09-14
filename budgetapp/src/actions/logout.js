// react-router-dom
import { redirect } from "react-router-dom";

// Library
import {toast} from "react-toastify"

// helper functions
import { deleteItem } from "../helpers";

export async function logoutAction() {
    // delete the user and all budgets + expenses
    deleteItem("userName")
    deleteItem("budgets")
    deleteItem("expenses")
    toast.success("You've deleted your account")
    // redirect to home
    return redirect("/")
}