import React from 'react';
import Dialog from '../dialog/Dialog';
import styles from "./customEvent.module.css";
import { useForm } from 'react-hook-form';
import InputField from '../input-field/InputField';
import { useAuth } from '@/hooks/useAuth';
import {gql, useQuery, useMutation} from "@apollo/client";
import { fireToastAlert } from '@/helpers/fireToastAlert';
import GoLoginDialog from '../go-login-dialog/GoLoginDialog';
const SEND_QUERY = gql`
mutation MyMutation($transportations: json = "", $activities: json = "", $caterings: json = "", $client_id: uuid = "", $fishing_equipments: json = "", $food_beverages: json = "", $marine_attractions: json = "", $note: String = "", $snorkeling_equipments: json = "", $things_to_do: json = "", $trip_types: json = "", $water_sports: json = "") {
  insert_custom_event_requests_one(object: {activities: $activities, caterings: $caterings, client_id: $client_id, fishing_equipments: $fishing_equipments, food_beverages: $food_beverages, marine_attractions: $marine_attractions, note: $note, snorkeling_equipments: $snorkeling_equipments, things_to_do: $things_to_do, transportations: $transportations, trip_types: $trip_types, water_sports: $water_sports})
}
`;
const CustomEventFormDialog = ({open, setOpen}) => {
  
  const {token, id} = useAuth();
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues:{
      activities:"",
      caterings:"",
      food_beverages:"",
      fishing_equipments:"",
      marine_attractions:"",
      note:"",
      snorkeling_equipments:"",
      things_to_do:"",
      transportations:"",
      event_type_id:"1",
      trip_types:"",
      water_sports:"",
      client_id:id,
    }
  });

  const [send, {loading, error, data}] = useMutation(SEND_QUERY);
  const onSubmit = async (values) => {
    try {
      const response = await send({
        variables:{...values, client_id:id},
      })
    } catch(error) {
      fireToastAlert("error",error?.message)
    }
  }

  return !token ?
        <GoLoginDialog open={open} setOpen={setOpen}/> :(
        <Dialog open={open} setOpen={setOpen}>
          <div className={styles.custom_form__wrapper}>
            <h5>Custom Event Form</h5>
            <form className={styles.custom_form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.custom_form__fields_wrapper}>
                <InputField
                  label='Activities'
                  errorMessage={errors?.activities?.message}
                  placeholder='Activities'
                  register={{...register("activities")}}
                  key={'actiivities'}
                />
                <InputField
                  label='Caterings'
                  errorMessage={errors?.caterings?.message}
                  placeholder='Caterings'
                  register={{...register("caterings")}}
                  key={'caterings'}
                />
                <InputField
                  label='Food & Beverages'
                  errorMessage={errors?.food_beverages?.message}
                  placeholder='Food & Beverages'
                  register={{...register("food_beverages")}}
                  key={'food_beverages'}
                />
                <InputField
                  label='Fishing & Equipments'
                  errorMessage={errors?.fishing_equipments?.message}
                  placeholder='Fishing & Equipments'
                  register={{...register("fishing_equipments")}}
                  key={'fishing_equipments'}
                />
                <InputField
                  label='Marine Attractions'
                  errorMessage={errors?.marine_attractions?.message}
                  placeholder='Marine Attractions'
                  register={{...register("marine_attractions")}}
                  key={'marine_attractions'}
                />
                <InputField
                  label='Note'
                  errorMessage={errors?.note?.message}
                  placeholder='Note'
                  register={{...register("note")}}
                  key={'note'}
                />
                <InputField
                  label='Snorkeling & Equipments'
                  errorMessage={errors?.snorkeling_equipments?.message}
                  placeholder='Snorkeling & Equipments'
                  register={{...register("snorkeling_equipments")}}
                  key={'snorkeling_equipments'}
                />
                <InputField
                  label='Things to do'
                  errorMessage={errors?.things_to_do?.message}
                  placeholder='Things to do'
                  register={{...register("things_to_do")}}
                  key={'things_to_do'}
                />
                <InputField
                  label='Transportations'
                  errorMessage={errors?.transportations?.message}
                  placeholder='Transportations'
                  register={{...register("transportations")}}
                  key={'transportations'}
                />
                <InputField
                  label='Trip Types'
                  errorMessage={errors?.trip_types?.message}
                  placeholder='Trip Types'
                  register={{...register("trip_types")}}
                  key={'trip_types'}
                />
                <InputField
                  label='Water Sports'
                  errorMessage={errors?.water_sports?.message}
                  placeholder='Water Sports'
                  register={{...register("water_sports")}}
                  key={'water_sports'}
                />
                </div>
                <button type='submit'>Send </button>
            </form>

          </div>
        </Dialog>
    )
}

export default CustomEventFormDialog
