import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import Benefit from "./Benefit";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
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

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (page: SelectedPage) => void;
};

const Benefits: React.FC<Props> = ({ setSelectedPage }) => {
    return (
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER */}
                <motion.div
                
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true,  amount: 0.5}}
                 transition={{ duration: 1}}
                 variants={{
         hidden: { opacity: 0, x:-100},
         visible: { opacity: 1, x: 0},
                 }}
                className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="m-5 text-sm">
                        We provide world-class fitness equipment, trainers, and classes to help you achieve your ultimate fitness goals with ease. Our team truly cares about each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <div className="mt-5 md:flex items-center justify-between gap-8">
                    {benefits.map((benefit: BenefitType) => (
                        <motion.div
                            key={benefit.title}
                            variants={childVariant}
                            className="border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <Benefit
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/** GRAPHICS AND DESCRIPTION*/}
            <div>
                {/**GRAPHICS */}
                <img />


                {/**DESCRIPTION */}
                <div>
                    {/**TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING 
                                    <span className="text-primary-500">
                                    FIT.
                                    </span>
                                </HText>
                            </div>
                        </div>
                    </div>


                    {/**DESCRIPTION */}


                    {/** BUTTON*/}
                </div>
            </div>
        </motion.div>
    );
};

export default Benefits;
