"use client";
import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import styles from "./editUserInfo.module.css";
import { GET_PROFILE } from "@/queries/profileQuery";
import { useQuery } from "@apollo/client";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/hooks/useAuth";
import callApi from "@/helpers/callApi";
import { editUserProfile } from "@/actions/user/editUserProfile";
const UserImage = () => {
  const { token, id } = useAuth();
  const { loading, data, error } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
  });

  const [fileData, setFileData] = useState(null);
  const [fileType, setFileType] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      setFileType(file.type);

      fileReader.onload = (e) => {
        setFileData(e.target.result);
      };

      if (file.type.startsWith("image/")) {
        fileReader.readAsDataURL(file);
      } else {
        setFileData("Unsupported file type.");
      }
    } else {
      setFileData(null);
    }
    const formData = new FormData();
    formData.append("image", file);
    editUserProfile(formData);
  };

  return (
    <div className={styles.user_info}>
      {loading ? (
        <LoadingCard />
      ) : (
        <>
          <div className={styles.user_image}>
            <img
              src={
                data?.clients_by_pk?.image ||
                fileData ||
                "/images/default_user.png"
              }
              height="128px"
              width="128px"
            />
            <label htmlFor="upload-new-image">
              <GoPencil />
            </label>
            <input
              type="file"
              id="upload-new-image"
              onChange={handleFileChange}
              hidden
            />
          </div>
          <h6>{data?.clients_by_pk?.name}</h6>
          <p>{data?.clients_by_pk?.email}</p>
        </>
      )}
    </div>
  );
};

export default UserImage;
