import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "We provide modern and fully equipped gym facilities designed for comfort and efficiency."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Choose from a wide range of classes designed to fit all fitness levels and interests."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Our certified trainers are here to guide you, providing personalized support and expertise."
    },
];

type Props = {
    setSelectedPage: (page: SelectedPage) => void;
};

const Benefits: React.FC<Props> = ({ setSelectedPage }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:my-5 md:w-3/5"
                >
                    <motion.h2>
                        <HText>MORE THAN JUST A GYM.</HText>
                    </motion.h2>
                    <motion.p className="m-5 text-sm">
                        We provide world-class fitness equipment, trainers, and classes to help you achieve your ultimate fitness goals with ease. Our team truly cares about each and every member.
                    </motion.p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 md:flex items-center justify-between gap-8"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {benefits.map((benefit: BenefitType) => (
                        <motion.div
                            key={benefit.title}
                            variants={childVariant}
                            className="border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
                        >
                            <Benefit
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHICS */}
                <motion.img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <motion.h3>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT.</span>
                                    </HText>
                                </motion.h3>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        <motion.p className="my-5">
                            Check with your mobile network provider for available data plans and pricing.
                        </motion.p>
                        <motion.p className="my-5">
                            Use your data to stay connected with our trainers and class schedules easily.
                        </motion.p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Benefits;
