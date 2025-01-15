"use client";
import { askOtpToResetPassword } from '@/actions/user/askOtpToResetPassword';
import { setNewPassword } from '@/actions/user/setNewPassword';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputField from '../input-field/InputField';
import SubmitButton from '@/app/profile/components/submit-button/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "./forgetPassword.module.css"
const ForgetPassword = ({closeDialog}) => {
    const [phase, setPhase] = useState('phone');
    const [signature, setSignature] = useState("");
    const [token, setToken] = useState("");
   
  return (
    <div className={styles.forget_password}>
        <h6>Forget Password</h6>
        {phase === "phone" && <PhonePhase setPhase={setPhase} setSignature={setSignature} setToken={setToken} closeDialog={closeDialog} />}
        {phase === "setNewPasswor" && <SetNewPassworPhase setPhase={setPhase} signature={signature} closeDialog={closeDialog} token={token} />}
    </div>
  )
}

export default ForgetPassword;

const PhonePhase = ({setPhase, setSignature, setToken})=>{

    const {register, formState, handleSubmit}=useForm({
        defaultValues:{
            phone_number:"",
        },
        resolver: yupResolver(
            yup.object().shape({
                phone_number: yup.string().min(11,"Enter a valid phone number").required(),
            }),
        ),
    })

    const onSubmit = async (values)=>{
        const otpRes = await askOtpToResetPassword(values);
        if(otpRes.data?.data?.signature){
            setSignature(otpRes.data?.data?.signature);
            setToken(otpRes.data?.data?.token);
            setPhase("setNewPasswor");
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column", gap:'16px'}}>
            <InputField 
                label="Phone Number"
                name="phone_number"
                placeholder="Enter Your Phone Number"
                register={{...register("phone_number")}}
            />
            <SubmitButton label="Send" />
        </form>
    )
}

const SetNewPassworPhase = ({setPhase, signature, closeDialog, token})=>{
    const {register, formState, handleSubmit}=useForm({
        defaultValues:{
            signature:signature,
            otp:"",
            password:"",
            password_confirmation:"",
        }
    })
    const onSubmit = async (values)=>{
        // console.log("values",values)
        const res = await setNewPassword(values,token);
        console.log("new password res", res)
        if(res.data?.success){
            closeDialog();
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column", gap:'16px'}}>
            <InputField 
                label="Otp"
                name="otp"
                placeholder="Enter Your Otp"
                register={{...register("otp")}}
            />
            <InputField 
                label="Password"
                name="password"
                type='password'
                placeholder="Enter Your password"
                register={{...register("password")}}
            />
            <InputField 
                label="Password Confirmation"
                name="password_confirmation"
                type='password'
                placeholder="Enter Your Password Confirmation"
                register={{...register("password_confirmation")}}
            />
            <SubmitButton label="Send" />
    </form>
    )
}