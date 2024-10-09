/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Code,
    Users,
    Zap,
    ChevronRight,
    BookOpen,
    Globe,
    Rocket,
} from "lucide-react";
import { FaLinkedin, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-black font-nunito">
            <header className="bg-white text-blue-700 py-4">
                <div className="w-5/6 mx-auto flex items-center justify-between">
                    <div>
                        <a className="flex gap-x-2" href="#">
                            <Code className="h-6 w-6" />
                            <p className="text-lg font-bold">HUDC</p>
                        </a>
                    </div>
                    <nav className="space-x-4 sm:space-x-6">
                        <a
                            className="font-bold hover:underline underline-offset-4"
                            href="#features">
                            Why join us
                        </a>
                        <a
                            className="font-bold hover:underline underline-offset-4"
                            href="#about">
                            About
                        </a>
                        <a
                            className="font-bold hover:underline underline-offset-4"
                            href="#contact">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-800 text-white">
                    <div className="flex flex-col items-center gap-y-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Haramaya University Developers <br></br>{" "}
                                Community
                            </h1>
                            <p className="mx-auto max-w-[700px] text-xl md:text-2xl font-light">
                                Learning and building together at Haramaya
                                University. Join our growing community of
                                student developers
                            </p>
                        </div>
                        <div>
                            <a
                                href="https://t.me/hudevhub"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-6 py-3 rounded-lg">
                                    Become a member
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section
                    id="features"
                    className="py-12 md:py-24 lg:py-32 bg-white">
                    <div className="flex flex-col items-center w-5/6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600">
                            Why join us?
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <Users className="h-12 w-12 text-blue-600" />
                                <h3 className="text-xl font-bold text-black">
                                    Networking
                                </h3>
                                <p className="text-sm text-gray-600 text-center">
                                    Connect with developers at haramaya
                                    university and build lasting relationships.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <Zap className="h-12 w-12 text-blue-600" />
                                <h3 className="text-xl font-bold text-black">
                                    Skill Development
                                </h3>
                                <p className="text-sm text-gray-600 text-center">
                                    Enhance your coding skills through
                                    workshops, projects, and mentorship
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                                <Code className="h-12 w-12 text-blue-600" />
                                <h3 className="text-xl font-bold text-black">
                                    Project Collaboration
                                </h3>
                                <p className="text-sm text-gray-600 text-center">
                                    Work on real-world projects with devs in our
                                    community.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="about"
                    className="py-12 md:py-24 lg:py-32 bg-blue-800">
                    <div className="flex flex-col items-center w-5/6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
                            About Us
                        </h2>
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <BookOpen className="h-12 w-12 text-white  mb-4" />
                                <h3 className="text-xl font-bold text-white">
                                    Our Mission
                                </h3>
                                <p className="text-white">
                                    To create a collaborative environment where
                                    student developers can learn, grow, and
                                    innovate together.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <Globe className="h-12 w-12 text-white mb-4" />
                                <h3 className="text-xl font-bold text-white">
                                    Our Community
                                </h3>
                                <p className="text-white">
                                    A diverse group of developers from haramaya
                                    university with a passion for tech and
                                    innovation
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <Rocket className="h-12 w-12 text-white mb-4" />
                                <h3 className="text-xl font-bold text-white">
                                    Our Vision
                                </h3>
                                <p className="text-white">
                                    To become a platform for tech innovation and
                                    talent development in Haramaya University
                                    and beyond.
                                </p>
                            </div>
                        </div>{" "}
                    </div>
                </section>
                <section
                    id="join"
                    className="py-12 md:py-24 lg:py-32 bg-white text-blue-600">
                    <div className="flex flex-col items-center gap-y-8">
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-2xl">
                                Scan this QR code to join our Telegram group or
                                click the button below!
                            </h1>
                        </div>

                        <img
                            src="/qr-code.png"
                            alt="Telegram QR Code"
                            className="w-64 h-64 object-contain"
                        />

                        <a
                            href="https://t.me/hudevhub"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                Join our Telegram Group
                            </Button>
                        </a>
                    </div>
                </section>
                <section id="latest-news" className="py-12 bg-gray-200">
                    <div className="flex flex-col gap-y-8">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-700">
                            Latest News
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center gap-16">
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7248312412922155008"
                                height="500"
                                width="100%"
                                className="max-w-md scroll-auto"
                                frameBorder="0"
                                allowFullScreen=""
                                title="Embedded post 1"></iframe>
                            <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7249078841464225795"
                                height="500"
                                width="100%"
                                className="max-w-md scroll-auto"
                                frameBorder="0"
                                allowFullScreen=""
                                title="Embedded post 2"></iframe>
                        </div>
                    </div>
                </section>
                <section
                    id="contact"
                    className="py-12 md:py-24 lg:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-5/6 mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                We would love to hear from you.
                            </h2>
                            <form>
                                <div className="mb-4">
                                    <label
                                        className="block text-lg font-medium mb-2 text-black"
                                        htmlFor="firstName">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-lg font-medium mb-2"
                                        htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-lg font-medium mb-2"
                                        htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-lg font-medium mb-2"
                                        htmlFor="message">
                                        Leave Us a Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-200">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div>
                            <iframe
                                title="Haramaya University Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.9816181743527!2d42.034773374830586!3d9.423014382697337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631a5a8e441e64d%3A0xdafe11071687f9d!2sHaramaya%20University!5e0!3m2!1sen!2set!4v1728500560513!5m2!1sen!2set"
                                width="100%"
                                height="100%"
                                className="rounded-md border-0"
                                allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="py-6 w-full px-4 md:px-6 bg-blue-800 text-white">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <p className="text-sm text-white mb-4 md:mb-0">
                        © 2024 Haramaya University Developers Community. All
                        rights reserved.
                    </p>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a
                            href="https://www.linkedin.com/company/haramaya-university-developers-community"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaLinkedin
                                size={30}
                                className="text-white hover:text-blue-900"
                            />
                        </a>
                        <a
                            href="https://t.me/hudevhub"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaTelegramPlane
                                size={30}
                                className="text-blue-400 hover:text-white"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaInstagram
                                size={30}
                                className="text-pink-500 hover:text-pink-700"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
