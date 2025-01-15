"use client";
import YachtCardActions from "@/components/yacht-card/YachtCardActions";
import styles from "./bookForm.module.css";
import InputField from "@/components/input-field/InputField";
// icons
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
// utils
import fireAlert from "@/libs/fireAlert";

const BookForm = ({ price, yachtId }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      from: "",
      to: "",
      guests: "",
      children: "",
    },
  });
  const submitForm = (values) => {
    console.log("values", values);
    if (!values.from || !values.to || !values.guests || !values.children) {
      fireAlert("Please fill all the fields", "error");
      return;
    }
    // router.push(`/checkout?guests=${values.guests}&children=${values.children}&from=${values.from}&to=${values.to}&serviceId=${yachtId}&service=rental`);
  };
  return (
    <div className={styles.form_container}>
      <div className={styles.section_header}>
        <h3>
          {price} <span>per day</span>
        </h3>
        <YachtCardActions
          containerStyles={{
            top: 0,
            right: 0,
            position: "relative !important",
            flexDirection: "row",
            color: "#19B7DB",
            gap: "16px",
          }}
        />
      </div>
      <div className={styles.divider}></div>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <h4>Availability</h4>
        <div className={styles.two_cols}>
          <InputField
            label="from"
            icon={<MdOutlineCalendarToday />}
            type="date"
            register={{ ...register("from") }}
          />
          <InputField
            label="to"
            icon={<MdOutlineCalendarToday />}
            type="date"
            register={{ ...register("to") }}
          />
        </div>
        <InputField
          label="Number Of Guests"
          icon={<TbUserSquareRounded size={24} />}
          type="number"
          register={{ ...register("guests") }}
        />
        <InputField
          label="Number Of Children"
          icon={<TbUserSquareRounded size={24} />}
          type="number"
          register={{ ...register("children") }}
        />
        <button type="submit" className={styles.submit_btn}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookForm;
