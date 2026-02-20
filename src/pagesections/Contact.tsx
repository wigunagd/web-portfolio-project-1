'use client'

import Image from "next/image";
import { heroCoverImgGradient, heroManImg, iconMessageNotOk, iconMessageOk, iconOnline, imgSocialLogo1Dribble, imgSocialLogo2Ig, imgSocialLogo3Linkedin, imgTetris1, imgTetris4 } from "../../public/imgassets/assets-img";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const formMessage = {
    "true": {
        title: "Message Sent Successfully!",
        message: "Thank you for reaching out. I’ll get back to you as soon as possible",
        btnText: "BACK TO HOME",
        imageIcon: iconMessageOk
    },
    "false": {
        title: "Message not sent!",
        message: "Something went wrong on our end. Please try again in a moment",
        btnText: "TRY AGAIN",
        imageIcon: iconMessageNotOk
    }
};

const Contact = () => {
    const [name, setName] = useState("");
    const [nameValid, setNameValid] = useState(true);
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [message, setMessage] = useState("");
    const [messageValid, setMessageValid] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    const [success, setSuccess] = useState(false);
    const [mounted, setMounted] = useState(false);

    const handleName = (text: string) => {
        setName(text);
    }

    const handleEmail = (text: string) => {
        setEmail(text);
    }

    const handleMessage = (text: string) => {
        setMessage(text);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isNameOk = name.trim().length > 0;
        const isEmailOk = email.trim().length > 0;
        const isMsgOk = message.trim().length > 0;

        setNameValid(isNameOk);
        setEmailValid(isEmailOk);
        setMessageValid(isMsgOk);

        if (isNameOk && isEmailOk && isMsgOk) {
            const randomResult = Math.random() > 0.5;
            setSuccess(randomResult);
            setOpenDialog(true);
        }

    }

    const handleClose = () => {
        if (success) {
            setName("");
            setEmail("");
            setMessage("");
        }
        setOpenDialog(false);
    }

    if (!mounted) return null;

    const currentMessage = formMessage[String(success) as keyof typeof formMessage];

    return (
        <section id="why-choose-me-section" className="relative flex flex-col w-full gap-30.5">

            <div id="why-choose-me-content" className="relative flex md:flex-row flex-col w-full items-center px-4 md:px-0 md:max-w-296 mx-auto pt-10 pb-18 md:pt-20 md:pb-30 gap-10">

                <div className="relative w-full md:w-1/2 flex flex-row items-center justify-center">
                    <div className="relative flex w-full max-w-[349.2px] md:max-w-[420.89px]">
                        <Image src={heroManImg} alt="hero Man Img contact" className="grayscale w-full h-auto object-cover" />
                        <Image src={heroCoverImgGradient} alt="hero Man Img gradient" className="absolute inset-0 z-5 w-full h-full object-cover pointer-events-none" />
                    </div>

                    <div className="absolute w-full flex flex-col z-5 items-center gap-xl bottom-0">
                        <div className="flex flex-row gap-xl">
                            <Image src={imgSocialLogo1Dribble} alt="Img-Social-Logo-Dribble" className="w-12 h-12 md:w-16 md:h-16" />
                            <Image src={imgSocialLogo2Ig} alt="Img-Social-Logo-Ig" className="w-12 h-12 md:w-16 md:h-16" />
                            <Image src={imgSocialLogo3Linkedin} alt="Img-Social-Logo-Linkedin" className="w-12 h-12 md:w-16 md:h-16" />
                        </div>
                        <div>Edwin Anderson</div>
                        <div className="flex gap-lg">
                            <Image src={iconOnline} alt="icon-online" width={12} height={12} />
                            Available for Work
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-3xl">
                    <p className="text-md md:text-lg text-primary-200">CONTACT</p>
                    <p className="font-extrabold text-display-md md:text-display-2xl">LET’S GET IN TOUCH</p>

                    <form method="POST" onSubmit={onSubmit}>
                        <FieldGroup>
                            <Field data-invalid={!nameValid}>
                                <FieldLabel className="font-semibold text-sm md:text-md">Name</FieldLabel>
                                <Input
                                    onChange={(e) => handleName(e.target.value)}
                                    value={name}
                                    aria-invalid={!nameValid}
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="w-full h-12 md:h-14 rounded-xl bg-background" />
                                {!nameValid && (<FieldLabel className="text-xs text-red-500">Please fill your name</FieldLabel>)}
                            </Field>
                            <Field data-invalid={!emailValid}>
                                <FieldLabel className="font-semibold text-sm md:text-md">Email</FieldLabel>
                                <Input
                                    onChange={(e) => handleEmail(e.target.value)}
                                    value={email}
                                    aria-invalid={!emailValid}
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full h-12 md:h-14 rounded-xl bg-background" />
                                {!emailValid && (<FieldLabel className="text-xs text-red-500">Please fill your email</FieldLabel>)}
                            </Field>
                            <Field data-invalid={!messageValid}>
                                <FieldLabel className="font-semibold text-sm md:text-md">Message</FieldLabel>
                                <Textarea
                                    onChange={(e) => handleMessage(e.target.value)}
                                    value={message}
                                    aria-invalid={!messageValid}
                                    id="message"
                                    name="message"
                                    className="w-full h-12 md:h-14 rounded-xl bg-background min-h-30 md:min-h-45" />
                                {!messageValid && (<FieldLabel className="text-xs text-red-500">Please fill your message</FieldLabel>)}
                            </Field>
                            <Button
                                variant={'default'}
                                type="submit"
                                className="rounded-full w-full md:h-14 h-12 shadow-green-glow text-sm md:text-md font-bold"
                            >Send Message</Button>
                        </FieldGroup>
                    </form>
                </div>

            </div>

            <Image src={imgTetris4}
                alt="tetris-contact"
                width={138}
                height={92}
                className="absolute md:w-34.5 md:h-23 w-[103.5px] h-17.25 top-0 left-0 z-5" />

            <Image src={imgTetris1}
                alt="tetris-contact"
                width={138}
                height={92}
                className="absolute md:w-34.5 md:h-23 w-[103.5px] h-17.25 bottom-0 right-0 z-4" />

            <div
                id="bg-form-cover"
                className={`${openDialog ? 'fixed' : 'hidden'} inset-0 z-7 flex items-center justify-center bg-background/70`}
            >
                <div
                    id="form-confirm"
                    className="relative w-90.25 md:w-119.75 p-10 md:p-14 rounded-2xl border bg-background
                    pt-20 pr-6 pb-6 pl-6
                    md:pt-20 md:pr-8 md:pb-8 md:pl-8
                    "
                >
                    <div className="flex flex-col gap-4">
                        <Image src={currentMessage.imageIcon} alt="icon Message"
                            className="absolute w-[119.39px] h-27.5 md:w-[147.61px] md:h-34 top-0 left-1/2 -translate-1/2" />
                        <p className="text-center text-lg md:text-xl font-bold">{currentMessage.title}</p>
                        <p className="text-center text-sm md:text-md text-neutral-400">
                            {currentMessage.message}
                        </p>
                        <Button
                            onClick={handleClose}
                            variant={'default'}
                            type="button"
                            className="rounded-full w-full md:h-14 h-12 shadow-green-glow text-sm md:text-md font-bold"
                        >{currentMessage.btnText}</Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact;