"use client";
import {useState} from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "@/actions/auth-actions/login";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Swal from "sweetalert2";
import { fireToastAlert } from "@/helpers/fireToastAlert";
import Dialog from "../dialog/Dialog";
import ForgetPassword from "./ForgetPassword";
function LoginForm() {
  const [openForgetPassword, setOpenForgetPassword] = useState(false)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("phone_number", data?.phone_number);
    formData.append("password", data?.password);
    login(
      formData,
      (data) => {
        router.push(`/`);
      },
      (title) => {
        fireToastAlert("error", title);
      },
    );
  };

  return (
    <div className={styles.loginCard}>
      <div className="text-center">
        <Image
          src={"/Images/Marinoz logo and branding colors-03.png"}
          className={styles.LoginImage}
          width={100}
          height={100}
          alt="Logo"
        />
      </div>
      <div className="mb-3 text-start mt-3 w-100">
        <h1>Login</h1>
        <p>Your journey starts here</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className={`${styles.formGroup} mb-3`}>
          <label>Phone</label>
          <input
            type="tel"
            className={styles.fromControl}
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone is required",
              minLength: {
                value: 11,
                message: "Phone must be at least 11 characters",
              },
            })}
          />
          {errors.phone_number && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.phone_number.message}
            </p>
          )}
        </div>

        <div className={`${styles.formGroup} mb-3`}>
          <label>Password</label>
          <input
            className={styles.fromControl}
            id="Password"
            name="Password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </p>
          )}
        </div>
        <button className={styles.submit} type="submit">
          Login
        </button>
      </form>

        <div className="text-center mb-3">
          <button type='button' onClick={()=>setOpenForgetPassword(true)} className={styles.forget}>
            Forget Password?
          </button>
        </div>
       
        <div className="text-center mb-3 mt-3">
          <p>
            Don’t have an account <Link href="/SignUp">SignUp</Link>
          </p>
        </div>
        {/* <div className={styles.or}>
          <div className={styles.or_div}></div>
          <span>Or</span>
          <div className={styles.or_div}></div>
        </div>
        <div className={styles.social_login}>
          <button><Image src={"/Images/facebooklogo 1.png"} width={100} height={100} alt="logo" /></button>
          <button><Image src={"/Images/image 36.png"} width={100} height={100} alt="logo" /></button>
          <button><Image src={"/Images/apple.png"} width={100} height={100} alt="logo" /></button>
        </div> */}
        <Dialog open={openForgetPassword} setOpen={setOpenForgetPassword}>
          <ForgetPassword closeDialog={()=>setOpenForgetPassword(false)}/>
        </Dialog>
    </div>
  );
}

export default LoginForm;
