"use client";
import Dialog from "@/components/dialog/Dialog";
import InputField from "@/components/input-field/InputField";
import SubmitButton from "../submit-button/SubmitButton";
import { use, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/queries/profileQuery";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { editUserProfile } from "@/actions/user/editUserProfile";
const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
const headStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#023A78",
};
const ChangeEmail = ({ open, setOpen }) => {
  const { token, id } = useAuth();
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      reset({
        email: data?.clients_by_pk?.email,
      });
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: data?.clients_by_pk?.email,
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
      }),
    ),
  });
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("email", values?.email);
    const onError422 = (errors) => {
      setError("email", { message: errors?.email?.length && errors?.email[0] });
    };
    editUserProfile(formData, onError422);
  };
  console.log("errors of the form", errors);
  return (
    <Dialog open={open} setOpen={setOpen}>
      <form action="." style={formStyles} onSubmit={handleSubmit(onSubmit)}>
        <h6 style={headStyles}>Change Your Email</h6>
        <InputField
          label="Email"
          type="email"
          placeholder="enter your Email"
          register={{ ...register("email") }}
          errorMessage={errors?.email?.message}
        />
        <SubmitButton label="Change" />
      </form>
    </Dialog>
  );
};

export default ChangeEmail;
