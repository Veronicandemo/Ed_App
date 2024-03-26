import Button from "@/components/base/Button";
import { MiscRequests } from "@/utils/http_request/misc.requests";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { Modal } from "react-overlays";
import Select from "react-select";
import styles from "./Carousel.module.css";
import { API_URL } from "@/constants";
import axios from "axios";
const baseUrl = API_URL;
const RequestTalentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [countries, setCountries] = useState([]);
  const [fetchingCountries, setFetchingCountries] = useState(false);
  const captchaRef = useRef(null);
  const handleClose = () => setShowModal(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCustomReq = async (data) => {
    console.log(data);
    const res = await axios.post(`${baseUrl}/requests`, {
      first_name: data.first_name,
      last_name: data.last_name,
      skill_set: data.skill_set?.split(" "),
      level: data.level,
      gender: data.gender,
      additional_information: data.additional_information,
    });
    console.log(res);
    const resData = await res.json();
    console.log(resData);
  };

  const onSubmit = (data) => {
    console.log(data);
    onCustomReq(data);
    setShowModal(false);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const countriesReq = await MiscRequests.getCountries(
        setFetchingCountries
      );
      if (countriesReq.success) setCountries(countriesReq.data);
      else alert("Error occurred");
    };

    fetchInfo();
  }, []);

  const renderBackdrop = (props) => {
    <div className="backdrop" {...props} />;
  };

  return (
    <div className={`${styles.modal_example}`}>
      <div>
        <Button
          variant="custome_req"
          className={`${styles.button}`}
          onClick={() => setShowModal(true)}
        >
          Talent Request
        </Button>
      </div>
      <Modal
        className={`${styles.modal} md:w-[100%]`}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div>
            <span className={`${styles.close_button}`} onClick={handleClose}>
              <IoClose color="white" fontSize="2em" />
            </span>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <label htmlFor="name">Client First Name:</label>
              <input
                id="username"
                className={styles.input}
                {...register("first_name", { required: true })}
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="name">Client Last Name:</label>
              <input
                id="username"
                className={styles.input}
                {...register("last_name", { required: true })}
              />
            </div>
            <Controller
              control={control}
              name="branch_id"
              render={({ field }) => (
                <div className={styles.row}>
                  <label htmlFor="select">Country:</label>
                  <Select
                    options={countries}
                    placeholder="Select Country"
                    onChange={(val) => {
                      field.onChange(val.value);
                    }}
                    // {...register("country.data")}
                    className={styles.select}
                  />
                </div>
              )}
            />
            <div className={`${styles.row}`}>
              <label htmlFor="myTextArea" className="ml-8">
                Skill Set:
              </label>
              <textarea
                id="myTextArea"
                name="myTextArea"
                rows="4"
                cols="50"
                className={`${styles.textarea}`}
                {...register("skillset", { required: true })}
              ></textarea>
            </div>
            <div className={`${styles.selection}`}>
              <div className={`${styles.row} ${styles.level}`}>
                <label htmlFor="level" className="ml-24">
                  Level:{" "}
                </label>
                <label className={`${styles.radionbtn}`}>
                  <input
                    type="radio"
                    name="level"
                    value="beginner"
                    {...register("level", { required: true })}
                  />
                  Beginner
                </label>
                <label className={`${styles.radionbtn}`}>
                  <input
                    type="radio"
                    name="level"
                    value="intermediate"
                    {...register("level", { required: true })}
                  />
                  Intermediate
                </label>
                <label className={`${styles.radionbtn}`}>
                  <input
                    type="radio"
                    name="level"
                    value="professional"
                    {...register("level", { required: true })}
                  />
                  Professional
                </label>
              </div>
              <div className={`${styles.row} ${styles.genderForm}`}>
                <label htmlFor="gender" className="-ml-24">
                  Gender:{" "}
                </label>
                <label className={`${styles.radionbtn}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    {...register("gender", { required: true })}
                  />
                  Male
                </label>
                <label className={`${styles.radionbtn}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    {...register("gender", { required: true })}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className={`${styles.row}`}>
              <label htmlFor="myTextArea" className={`${styles.anyotherInfo}`}>
                Any other Information:
              </label>
              <textarea
                id="myTextArea"
                name="myTextArea"
                rows="4"
                cols="50"
                {...register("additional_information", { required: true })}
                className={`${styles.textarea}`}
              ></textarea>
            </div>
            <div>
              <Button
                variant="scroll"
                className={`${styles.btn}`}
                type="submit"
                disabled={isLoading}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RequestTalentForm;
