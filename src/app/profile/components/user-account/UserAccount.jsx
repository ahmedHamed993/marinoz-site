"use client";
import React, { useState } from "react";
import ChangeButton from "../change-button/ChangeButton";
import styles from "./userAccount.module.css";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/queries/profileQuery";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import ChangeName from "../form-dialogs/ChangeName";
import ChangeEmail from "../form-dialogs/ChangeEmail";
import ChangePassword from "../form-dialogs/ChangePassword";
import ChangePhone from "../form-dialogs/ChangePhone";
import ChangeAddress from "../form-dialogs/ChangeAddress";
import { useAuth } from "@/hooks/useAuth";

const UserAccount = () => {
  const { id } = useAuth();
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openChangeEmail, setOpenChangeEmail] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openChangeAddress, setOpenChangeAddress] = useState(false);
  const [openChangePhone, setOpenChangePhone] = useState(false);
  const { loading, data, error } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
  });
  console.log("data", data);
  return loading ? (
    <LoadingCard />
  ) : (
    <div className={styles.user_account}>
      <h5>Account</h5>
      <div className={styles.fields}>
        <div className={styles.field_row}>
          <div>
            <h6>Name</h6>
            <p>{data?.clients_by_pk?.name}</p>
          </div>
          <ChangeButton onClick={() => setOpenChangeName(true)} />
        </div>
        <div className={styles.field_row}>
          <div>
            <h6>Email</h6>
            <p>{data?.clients_by_pk?.email}</p>
          </div>
          <ChangeButton onClick={() => setOpenChangeEmail(true)} />
        </div>
        <div className={styles.field_row}>
          <div>
            <h6>password</h6>
            <p>********</p>
          </div>
          <ChangeButton onClick={() => setOpenChangePassword(true)} />
        </div>
        <div className={styles.field_row}>
          <div>
            <h6>Phone Number</h6>
            <p>{data?.clients_by_pk?.phone_number}</p>
          </div>
          <ChangeButton onClick={() => setOpenChangePhone(true)} />
        </div>
        <div className={styles.field_row}>
          <div>
            <h6>Address</h6>
            <p>{data?.clients_by_pk?.address}</p>
          </div>
          <ChangeButton onClick={() => setOpenChangeAddress(true)} />
        </div>
      </div>
      <ChangeName
        open={openChangeName}
        setOpen={setOpenChangeName}
        defaultValue={data?.clients_by_pk?.name}
      />
      <ChangeEmail
        open={openChangeEmail}
        setOpen={setOpenChangeEmail}
        defaultValue={data?.clients_by_pk?.email}
      />
      <ChangePassword
        open={openChangePassword}
        setOpen={setOpenChangePassword}
      />
      <ChangePhone
        open={openChangePhone}
        setOpen={setOpenChangePhone}
        defaultValue={data?.clients_by_pk?.phone}
      />
      <ChangeAddress
        open={openChangeAddress}
        setOpen={setOpenChangeAddress}
        defaultValue={data?.clients_by_pk?.address}
      />
    </div>
  );
};

export default UserAccount;
