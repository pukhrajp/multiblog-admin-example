import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    Axios.post("/auth/login", data)
      .then((res) => {
        console.log("res", res);

        if (res?.data?.data?.accessToken) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          navigate("/chats");
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="space-y-8 p-10 border rounded-lg bg-white shadow-md">
        <div>
          <h2 className="text-xl">Welcome back!</h2>
          <p>Please enter your detail for login</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="pb-6">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="pb-6">
                  <FormLabel>Password</FormLabel>
                  <FormControl className="w-75">
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="hover:cursor-pointer" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <Link to="/auth/signup" className="text-blue-500 hover:underline">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export { Login };
