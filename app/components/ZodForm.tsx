import { useForm } from "react-hook-form";
import { FormData, ValidFieldNames } from "@/types/reactHookTypes";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/types/React-Zod";
import axios from "axios";

function ZodForm(){
    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
      reset
    } = useForm<FormData>({
      resolver: zodResolver(UserSchema),
    });


    const onSubmit = async (data: FormData) => {
        try {
          const response = await axios.post("/api/form", data); 
          const { errors = {} } = response.data;
    
          
          const fieldErrorMapping: Record<string, ValidFieldNames> = {
            email: "email",
            githubUrl: "githubUrl",
            yearsOfExperience: "yearsOfExperience",
            password: "password",
            confirmPassword: "confirmPassword",
          };
    
         
          const fieldWithError = Object.keys(fieldErrorMapping).find(
            (field) => errors[field]
          );
    
         
          if (fieldWithError) {
            
            setError(fieldErrorMapping[fieldWithError], {
              type: "server",
              message: errors[fieldWithError],
            });
          }
          reset()
        } catch (error) {
          alert("Submitting form failed!");
        }
      };
    

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid col-auto">
          <h1 className="text-3xl font-bold mb-4">
            Zod & React-Hook-Form
          </h1>
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />

          <FormField
            type="text"
            placeholder="GitHub URL"
            name="githubUrl"
            register={register}
            error={errors.githubUrl}
          />

          <FormField
            type="number"
            placeholder="Years of Experience (1 - 10)"
            name="yearsOfExperience"
            register={register}
            error={errors.yearsOfExperience}
            valueAsNumber
          />

          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <FormField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
  );
}

export default ZodForm;