import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import Class from "@/scenes/ourClasses/Class";
import { motion } from "framer-motion"; // Import motion here

// Renaming "class" to "classesData" to avoid conflicts with the reserved keyword.
const classesData: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam.",
    image: image1,
  },
  {
    name: "Cardio Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam.",
    image: image2,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam.",
    image: image3,
  },
  {
    name: "Dance Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam.",
    image: image4,
  },
  {
    name: "Pilates Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam.",
    image: image5,
  },
  {
    name: "Spin Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-300">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quibusdam quaerat animi at quis sequi omnis dignissimos vitae eligendi. Nulla iste laborum aliquid id reprehenderit consectetur qui reiciendis unde ipsam?
            </p>
          </div>
        </motion.div>

        {/* Class container with horizontal scroll */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classesData.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image} // Pass image here
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
