"use client";
import Dialog from "@/components/dialog/Dialog";
import InputField from "@/components/input-field/InputField";
import SubmitButton from "../submit-button/SubmitButton";
import { useState } from "react";
import { resetPassword } from "@/actions/user/resetPassword";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
const ChangePassword = ({ open, setOpen }) => {
  const { token, id } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      old_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        old_password: yup.string().required(),
        new_password: yup.string().required(),
        new_password_confirmation: yup
          .string()
          .oneOf([yup.ref("new_password"), null])
          .required(),
      }),
    ),
    mode: "onSubmit",
  });
  const onSubmit = (values) => {
    const onError422 = (errors) => {
      if (errors?.old_password?.length) {
        setError("old_password", {
          message: errors?.email?.length && errors?.old_password[0],
        });
      }
      if (errors?.new_password?.length) {
        setError("new_password", {
          message: errors?.email?.length && errors?.new_password[0],
        });
      }
      if (errors?.new_password_confirmation?.length) {
        setError("new_password_confirmation", {
          message:
            errors?.email?.length && errors?.new_password_confirmation[0],
        });
      }
    };
    resetPassword(values, onError422);
  };
  return (
    <Dialog open={open} setOpen={setOpen}>
      <form action="." style={formStyles} onSubmit={handleSubmit(onSubmit)}>
        <h6 style={headStyles}>Change Your Password</h6>
        <InputField
          label="Old Password"
          type="password"
          placeholder="enter old password"
          register={{ ...register("old_password") }}
          errorMessage={errors?.old_password?.message}
        />
        <InputField
          label="New Password"
          type="password"
          placeholder="enter new password"
          register={{ ...register("new_password") }}
          errorMessage={errors?.new_password?.message}
        />
        <InputField
          label="New Password Confirmation"
          type="password"
          placeholder="enter new password"
          register={{ ...register("new_password_confirmation") }}
          errorMessage={errors?.new_password_confirmation?.message}
        />
        <SubmitButton label="Change" />
      </form>
    </Dialog>
  );
};

export default ChangePassword;
