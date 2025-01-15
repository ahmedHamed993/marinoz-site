import Dialog from '@/components/dialog/Dialog'
import React from 'react'
import styles from "./applyForm.module.css";
import { useForm } from 'react-hook-form';
import InputField from '@/components/input-field/InputField';
import { fireToastAlert } from '@/helpers/fireToastAlert';
const ApplyForm = ({career, open, setOpen}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues:{
            title:career?.title,
            location:career?.location,
            name:"",
            email:"",
            phone_number:"",
            note:"",
            cv:null,
        }
    });
    const send = (data) => {
        console.log(data);
        fireToastAlert("success","Your application has been sent successfully");
        setOpen(false);
    }
    console.log('wathc', watch("cv")?.[0]?.name)
  return (
    <Dialog open={open} setOpen={setOpen}>
        <div className={styles.apply_form__wrapper}>
            <h3>Apply For the job</h3>
            <h6>{career?.title}</h6>
            <p><span>Job Description:</span> {career?.description}</p>
            <form className={styles?.apply_form__form} onSubmit={handleSubmit(send)}>
                <div className={styles?.apply_form_fields}>

                <InputField id="name" label="Name" type="text" register={{...register('title')}}  readOnly={true}/>
                <InputField id="location" label="Location" type="text" register={{...register('location')}}  readOnly={true}/>
                <InputField id="name" label="name" type="text" register={{...register('name')}}  />
                <InputField id="phone_number" label="Phone Number" type="tel" register={{...register('phone_number')}}  />
                <InputField id="email" label="Email" type="email" register={{...register('email')}}  />
                <InputField id="note" label="Note" type="text" register={{...register('note')}}  />
                {/* <InputField id="cv" label="cv" type="file" register={{...register('cv')}}  readOnly={true}/> */}
                <label htmlFor='cv-uploader'>
                    Upload Your Cv {watch("cv")?.length ? watch("cv")?.[0]?.name : ""}
                    <input id='cv-uploader' type='file' {...register("cv")} hidden />
                </label>
                </div>
                <div className={styles.apply_form__actions}>

                <button type='button'onClick={()=>setOpen(false)}>Back</button>
                <button type='submit'>APPLY</button>
                </div>
            </form>
        </div>
    </Dialog>      
  )
}

export default ApplyForm
