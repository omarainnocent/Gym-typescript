import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from  "@/assets/HomePageText.png";
import HomePageGraphic from  "@/assets/HomePageGraphic.png";
import SponsorRedBull from  "@/assets/SponsorRedBull.png";
import SponserForbes from  "@/assets/SponsorForbes.png";
import SponserFortune from  "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedpage: (value: SelectedPage) => void
}

const Home = ({ setSelectedpage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full"
    >
{/*IMG AND MAIN HEADER */}
<div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
    {/*MAIN HEADER*/}
    <div className="z-10 mt-32 md:basis-3/5">
        {/**HEADINGS */}
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,  amount: 0.5}}
        transition={{ duration: 1}}
        variants={{
hidden: { opacity: 0, x:-100},
visible: { opacity: 1, x: 0},
        }}
        className="md:-mt-20">
            <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                    <img alt="home-page=text" src={HomePageText} />
                </div>
                {/** ACTIONS */}
                <div className="mt-8 flex items-center gap-8">
                <ActionButton setSelectedPage={setSelectedpage}>
                    Join Now
                </ActionButton>
                <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedpage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                    <p>
                        Learn more
                    </p>
                </AnchorLink>
            </div>
            <p className="mt-8 text-sm ">
            Find out how you can use gym SMS templates and text message marketing to improve client onboarding and bring more clients to your fitness center!
            </p>
            </div>
        </motion.div>
    </div>

 {/*img */}
 <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 justify-items-end">
 <img alt="home-pageGraphic" src={HomePageGraphic} />
 </div>
 </div>
 {/**SPONSER */}
 {isAboveMediumScreens && (
    <div className="h-[150px] w-ful bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponser" src={SponsorRedBull} />
                <img alt="forbes-sponser" src={SponserForbes} />
                <img alt="fortune-sponser" src={SponserFortune} />
            </div>
        </div>
    </div>
 )}
    </section>
  )
}

export default Home