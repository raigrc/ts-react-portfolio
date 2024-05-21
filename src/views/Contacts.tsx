import React from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
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


const Contacts: React.FC = () => {
  useDocumentTitle("Contacts");
  return (
    <section className="h-full">
      <div className="mx-auto flex h-full max-w-screen-xl flex-row">
        {/* left-contacts */}
        <div className="h-full w-3/5 p-3">1</div>

        {/* right-form */}
        <div className="w-2/5 grid place-items-center">
          <Card className="bg-muted ring-2 ring-primary">
            <CardHeader className="border-b-2 border-gray-400">
              <CardTitle className="tracking-wider uppercase">Got a question for me?</CardTitle>
              <CardDescription>Fill up the form and I will get back to you <span className="text-primary font-semibold">ASAP!</span></CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 py-3">
              <div>
                <Label htmlFor="fullname">Fullname <span className="text-red-400">*</span></Label>
                <Input id="fullname" placeholder="Full name"/>
              </div>
              <div>
                <Label htmlFor="email">Email <span className="text-red-400">*</span></Label>
                <Input id="email" placeholder="Email address"/>
              </div>
              <div>
                <Label htmlFor="message">Message <span className="text-red-400">*</span></Label>
                <Textarea className="resize-none" rows={8} id="message" placeholder="Message..."/>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
