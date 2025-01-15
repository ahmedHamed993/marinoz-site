"use client";
import Dialog from "@/components/dialog/Dialog";
import InputField from "@/components/input-field/InputField";
import SubmitButton from "../submit-button/SubmitButton";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "@apollo/client";
import { editUserProfile } from "@/actions/user/editUserProfile";
import { GET_PROFILE } from "@/queries/profileQuery";

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
const ChangePhone = ({ open, setOpen, defaultValue }) => {
  const { token, id } = useAuth();
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      reset({
        phone_number: data?.clients_by_pk?.phone_number,
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
      phone_number: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        phone_number: yup.string().required(),
      }),
    ),
  });
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("phone_number", values?.phone_number);
    const onError422 = (errors) => {
      setError("phone_number", {
        message: errors?.phone_number?.length && errors?.phone_number[0],
      });
    };
    editUserProfile(formData, onError422);
  };
  return (
    <Dialog open={open} setOpen={setOpen}>
      <form action="." style={formStyles} onSubmit={handleSubmit(onSubmit)}>
        <h6 style={{ headStyles }}>Phone Number</h6>
        <InputField
          label=" Phone Number"
          type="tel"
          placeholder="enter new phone number"
          register={{ ...register("phone_number") }}
          errorMessage={errors?.phone_number?.message}
        />
        <SubmitButton label="Change" />
      </form>
    </Dialog>
  );
};

export default ChangePhone;
