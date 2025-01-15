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

const ChangeAddress = ({ open, setOpen }) => {
  const { token, id } = useAuth();
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      reset({
        address: data?.clients_by_pk?.address,
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
      address: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        address: yup.string().required(),
      }),
    ),
  });
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("address", values?.address);
    const onError422 = (errors) => {
      setError("address", {
        message: errors?.address?.length && errors?.address[0],
      });
    };
    editUserProfile(formData, onError422);
  };
  return (
    <Dialog open={open} setOpen={setOpen}>
      <form action="." style={formStyles} onSubmit={handleSubmit(onSubmit)}>
        <h6 style={headStyles}>Address</h6>
        <InputField
          label="Enter your Address"
          type="tel"
          placeholder="Enter Your Address"
          register={{ ...register("address") }}
          errorMessage={errors?.address?.message}
        />
        <SubmitButton label="Change" />
      </form>
    </Dialog>
  );
};

export default ChangeAddress;
