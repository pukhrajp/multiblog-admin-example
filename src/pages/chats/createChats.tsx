import { z } from "zod";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { pusher } from "../../pusherClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import Axios from "../../api/axios";
import { useAppSelector } from "../../redex/hook";

const ChatSchema = z.object({
  chatName: z.string().nonempty({ message: "This field is required" }),
});

export default function CreateChats() {
  const form = useForm<z.infer<typeof ChatSchema>>({
    resolver: zodResolver(ChatSchema),
  });
  const authUser = useAppSelector((state) => state.authUser);
  const onSubmit = (data: any) => {
    const channel = pusher.subscribe(data.chatName);
    Axios.post("/chats", { name: data.chatName, email: authUser.email })
      .then(() => {
        console.log("chat created successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("subscribed to channel", channel.name);

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      console.log("Unsubscribed from channel");
    };
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Create Chats</h1>
      <p className="mt-4">This is the create chats page.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="chatName"
            render={({ field }) => (
              <FormItem className="pb-6">
                <FormLabel>Chat Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="hover:cursor-pointer" type="submit">
            Creare Chat
          </Button>
        </form>
      </Form>
    </div>
  );
}
