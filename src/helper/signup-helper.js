import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRegistrationData } from "../data-access/api/auth-api";
import { useNavigate } from "react-router-dom";

const registrationHelper = () => {
  const initialState = {
    fname: "",
    lname: "",
    profession: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const authStore = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.fname === "") {
      alert("First Name is required");
    }
    if (formData.lname === "") {
      alert("Last Name is required");
    }
    if (formData.profession === "") {
      alert("Profession is required");
    }
    if (formData.email === "") {
      alert("Email is required");
    }
    if (formData.password === "") {
      alert("Password is required");
    }
    dispatch(postRegistrationData(formData));
  };

  useEffect(() => {
    if (authStore.status === 200) {
      navigate("/dashboard");
    }
  }, [authStore]);

  return { formData, handleFormChange, handleFormSubmit };
};

export default registrationHelper;
