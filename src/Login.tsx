import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const { register, handleSubmit } = useForm();

    const [searchParams, setSearchParams] = useSearchParams();
    URLSearchParams;

    const addUserMutation = useMutation({
        mutationKey: ["addUser"],
        mutationFn: (data: any) => {
            return axios.post("http://localhost:5000/api/upload", data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            // return axios.get("http://localhost:5000/api/v1/user/me", {
            //     withCredentials: true,
            // });
        },
    });

    const onSubmit = (data: any) => {
        addUserMutation.mutate(data, {
            onSuccess: (data) => {
                console.log(data);
            },
        });

        // const token =
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzEzMTFlOTUzNGNhNzM1MDEzYTBjMWQiLCJpYXQiOjE3MjkzMDMyNDAsImV4cCI6MTczMDU5OTI0MH0.CYtkHz8ds-IcuJyUXp2jAWzlGdeGH2Dl0Rw5tAZA72c";
        // document.cookie = `token=${token}; path=/;`;
    };

    return (
        <div className="max-w-7xl mx-auto mt-11">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-red name">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter name"
                            className="ml-4 outline-none border-2 rounded-sm border-red-400"
                            {...register("name")}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter Email"
                            className="ml-4 outline-none border-2 rounded-sm border-red-400"
                            {...register("email")}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            placeholder="Enter Password"
                            className="ml-4 outline-none border-2 rounded-sm border-red-400"
                            {...register("password")}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="confirm_password">
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            id="confirm_password"
                            placeholder="Enter confirm_password"
                            className="ml-4 outline-none border-2 rounded-sm border-red-400"
                            // {...register("verify_password")}
                        />
                    </div>

                    <div>
                        <input
                            id="file"
                            type="file"
                            {...register("file")}
                            hidden
                        />

                        <label htmlFor="file">Thêm Ảnh</label>
                    </div>

                    <button className="bg-red-400 border rounded-lg p-4">
                        Dang Ky
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
