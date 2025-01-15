"use client";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import fireAlert from "@/libs/fireAlert";
import {gql, useMutation } from "@apollo/client";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const buttonStyles = {
  position: "absolute",
  top: "12px",
  border: "none",
  borderRadius: "50%",
  padding: "0",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: "#fff",
};

const INSERT_FAVOURITE_RENTAL = gql`
mutation MyMutation($client_id: uuid = "", $id: bigint = "") {
  insert_favorite_rentals_one(object: {client_id: $client_id, rental_id: $id}){
    id
  }
}
`

const INSERT_FAVOURITE_TOUR = gql`
mutation MyMutation($client_id: uuid = "", $id: bigint = "") {
  insert_favorite_tours_one(object: {client_id: $client_id, tour_id: $id}){
    id
  }
}
`

const INSERT_FAVOURITE_SUITE = gql`
mutation MyMutation($client_id: uuid = "", $id: bigint = "") {
  insert_favorite_suites_one(object: {client_id: $client_id, suite_id: $id}){
    id
  }
}
`

const DELETE_FAVOURITE_RENTAL = gql`
mutation MyMutation($id: bigint = "") {
  delete_favorite_rentals_by_pk(id: $id) {
    client_id
  }
}
`

const DELETE_FAVOURITE_TOUR = gql`
mutation MyMutation($id: bigint = "") {
  delete_favorite_tours_by_pk(id: $id) {
    client_id
  }
}
`

const DELETE_FAVOURITE_SUITE = gql`
mutation MyMutation($id: bigint = "") {
  delete_favorite_suites_by_pk(id: $id) {
    client_id
  }
}
`

const DELETE_QUERY = {
  rental:DELETE_FAVOURITE_RENTAL,
  tour:DELETE_FAVOURITE_TOUR,
  suite:DELETE_FAVOURITE_SUITE,
};

const INSERT_QUERY = {
  rental:INSERT_FAVOURITE_RENTAL,
  tour:INSERT_FAVOURITE_TOUR,
  suite:INSERT_FAVOURITE_SUITE,
};

const FavouriteButton = ({ defaultValue = false ,type = 'rental', typeId, defaultFavId = null, btnStyles = { left: "12px" } }) => {
  const {id,token} = useAuth();
  const [favId, setFavId] = useState(defaultFavId || null)
  const [loved, setLoved] = useState(defaultValue);

  const [addFav ] = useMutation(INSERT_QUERY[type]);
  const [deleteFav] = useMutation(DELETE_QUERY[type]);
  const toggleFav = async ()=>{
    // if(favId ){
    //   try {
    //     const res = await deleteFav({
    //       variables:{
    //         id:favId || 0
    //       }
    //     })
    //     setFavId(null);
    //   } catch (error) {
    //     fireAlert(error?.message,'error')
    //   }
    // } else {
    //   try{
    //     const res  = await addFav({
    //       variables:{
    //         client_id:id,
    //         id:typeId,
    //       }
    //     });
    //     setFavId(res?.data?.insert_favorite_rentals_one?.id)
    //   } catch(error){
    //     fireAlert(error?.message,"error")
    //   }
    // }
    // setLoved(prev => !prev)
  }

  return (
    <button
      style={{ ...buttonStyles, ...btnStyles }}
      onClick={() =>{
        setLoved((prev) => !prev);
        // toggleFav();
      }}
    >
      {loved ? (
        <IoMdHeart color="tomato" size={30} />
      ) : (
        <IoMdHeartEmpty size={30} />
      )}
    </button>
  );
};

export default FavouriteButton;
