"use client";
import Dialog from "@/components/dialog/Dialog";
import InputField from "@/components/input-field/InputField";
import SubmitButton from "../submit-button/SubmitButton";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/queries/profileQuery";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { editUserProfile } from "@/actions/user/editUserProfile";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
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
const ChangeName = ({ open, setOpen }) => {
  const { token, id } = useAuth();
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      reset({
        name: data?.clients_by_pk?.name,
      });
    },
  });
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: data?.clients_by_pk?.name,
    },
  });
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values?.name);
    editUserProfile(formData);
  };
  return (
    <Dialog open={open} setOpen={setOpen}>
      {loading ? (
        <LoadingCard />
      ) : error ? (
        <p>{error?.message}</p>
      ) : (
        <form action="." style={formStyles} onSubmit={handleSubmit(onSubmit)}>
          <h6 style={headStyles}>Change Your Name</h6>
          <InputField
            label="name"
            type="text"
            placeholder="enter your name"
            register={{ ...register("name") }}
          />
          <SubmitButton label="Change" />
        </form>
      )}
    </Dialog>
  );
};

export default ChangeName;
