import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginData } from "../data-access/api/auth-api";
import { useNavigate } from "react-router-dom";

const loginHelper = () => {
    const initialState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const authStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(authStore)
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.email === "") {
            alert("Email is required");
        }
        if (formData.password === "") {
            alert("Password is required");
        }
        dispatch(postLoginData(formData));
    };

    useEffect(() => {
        if(authStore.status === 201){
            navigate("/dashboard");
        }
    },[authStore])
    
    return { formData, handleFormChange, handleFormSubmit };

};

export default loginHelper;