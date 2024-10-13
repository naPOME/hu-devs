/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkedinIcon, SendIcon } from "lucide-react";
import { CommunityTabsComponent } from "./community-tabs";
import { NavBar } from "./layout/Navbar";
import { Label } from "@radix-ui/react-label";
import { Footer } from "./layout/Footer";
import { Contributors } from "./contributors";
import { UpcomingEventsTab } from "./UpcomingEvents";


export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-black text-white font-nunito bg-opacity-90 h-full w-full"
      style={{
        backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      <header
        className=" text-purple-500 py-4"
        style={{
          backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
          backgroundSize: "10px 10px",
        }}
      >
        <div className="w-5/6 mx-auto flex items-center justify-between">
          <NavBar></NavBar>
        </div>
      </header>

      <main className="flex-1 ">
        <section
          id="home"
          className="pt-36 pb-18 md:pb-4 lg:pb-8 xl:pb-8 text-white bg-opacity-90 bg-black w-full"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-y-8 h-full">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Haramaya University <br /> Developers Community
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-xl font-light text-gray-300">
                Learning and building together at Haramaya University and beyond{" "}
                <br /> join our growing community of student developers.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="https://t.me/hudevhub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white hover:bg-black text-lg px-6 py-3 rounded-3xl flex items-center justify-center space-x-2 border border-purple-500  "
              >
                <SendIcon className="h-5 w-5" />
                <span>Telegram Channel</span>
              </a>
            </div>
          </div>
        </section>
        <section
          id="join"
          className=" bg-black text-white font-nunito flex items-center justify-center bg-opacity-90 p-12 w-full"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="w-full max-w-6xl text-center px-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl font-light mb-4 text-gray-300">
              Be a part of something bigger. Connect with fellow developers and
              learn together!
            </p>

            <div className="flex justify-center ">
              <CommunityTabsComponent />
            </div>
            <div className="flex justify-center ">
              <UpcomingEventsTab />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-12 md:py-24 lg:py-12 bg-black text-white"
          style={{
            backgroundImage: "radial-gradient(#5a3fff 0.5px, #141414 0.5px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-5/6 mx-auto">
            <Card className="bg-black text-white border border-purple-500 border-opacity-35">
              <CardHeader>
                <CardTitle className="text-purple-500">
                  We would love to hear from you
                </CardTitle>
                <CardDescription className="text-gray-300">
                  leave us a message and we will get back to you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-purple-500">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-purple-500">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-500">
                    Message
                  </Label>
                  <Input
                    id="message"
                    placeholder="Your message"
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-500 text-black hover:bg-purple-700">
                  Send
                </Button>
              </CardFooter>
            </Card>
            <div className="space-y-4">
              <h2 className="text-purple-500 font-semibold text-2xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                <p className="text-white font-semibold">What is HUDC?</p>
                <p className="text-gray-300">
                  HUDC stands for Haramaya University Developers Community, a
                  group of passionate student developers.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">
                  How do I join the community?
                </p>
                <p className="text-gray-300">
                  You can join our community by signing up for membership or
                  connecting with us on Telegram.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-semibold">
                  Are there any exclusive benefits?
                </p>
                <p className="text-gray-300">
                  Yes, exclusive members can showcase their projects, get free
                  access to paid courses, and more!
                </p>
                <p className="text-white font-semibold">
                Can I contribute to HUDC projects?
                </p>
                <p className="text-gray-300">
                We encourage all members to contribute to our open-source projects. Its a great way to gain experience and collaborate with fellow developers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex items-center justify-center">
        <div className="p-8 bg-transparent shadow-lg">
          <Contributors className="flex items-center justify-center"></Contributors>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
