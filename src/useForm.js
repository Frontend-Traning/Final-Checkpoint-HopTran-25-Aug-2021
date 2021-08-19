// import { useState, useEffect } from "react";

// const useForm = (props) => {
//   const {rules, initData} = props;
//   const [data, setData] = useState(()=>{
//     return initData || {};
//   })
 
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//     const error = hanldleErrors(name, value);

//     if(error){
//       setErrors((preErrors)=>({...preErrors, [name]:error}));
//     }
//     else {
//       setErrors((preErrors)=> ({...preErrors,[name]:null}));
//     }

//   };

//   const hanldleErrors = (name, value)=>{
//     let isValid = true;
//     let mess= "";
//     if(rules[name]?.required?.value &&isEmpty(value)){
//       isValid = false;
//       mess= rules[name]?.required?.message;
//     }
//     else if(rules[name])
    
//   }



//   // useEffect(() => {
//   //   if (Object.keys(errors).length === 0 && isSubmitting) {
//   //      callback();
//   //   }
//   // }, [errors]);

//   return { handleChange, handleSubmit, values, errors };
// };

// export default useForm;
