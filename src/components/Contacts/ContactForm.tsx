import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div className="grid animate-fade-left place-items-center py-3 animate-duration-700 animate-once animate-ease-in-out lg:w-2/5">
      <Card className="bg-muted ring-2 ring-primary">
        <CardHeader className="border-b-2 border-gray-400">
          <CardTitle className="uppercase tracking-wider">
            Got a question for me?
          </CardTitle>
          <CardDescription>
            Fill up the form and I will get back to you{" "}
            <span className="font-semibold text-primary">ASAP!</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 py-3">
          <div>
            <Label htmlFor="fullname">
              Fullname <span className="text-red-400">*</span>
            </Label>
            <Input id="fullname" placeholder="Full name" />
          </div>
          <div>
            <Label htmlFor="email">
              Email <span className="text-red-400">*</span>
            </Label>
            <Input id="email" placeholder="Email address" />
          </div>
          <div>
            <Label htmlFor="message">
              Message <span className="text-red-400">*</span>
            </Label>
            <Textarea
              className="resize-none"
              rows={8}
              id="message"
              placeholder="Message..."
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Send Message</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactForm;
