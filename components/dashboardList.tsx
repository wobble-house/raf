'use client'
import DashboardModal from "@/components/dashboardModal"
import { AnimatePresence, motion } from "framer-motion"
import { AboutCard, ContactCard, PersonalProjectsCard, ProfessionalProjectsCard, SkillsCard } from "@/components/dashboardCards"

const boxVariant = {
    hidden: {
        opacity: 0 //move out of the site
    },
    visible: {
        opacity: 1, // bring it back to nrmal
        transition: {
            delay: 0.5,
            when: "beforeChildren", //use this instead of delay
            staggerChildren: 0.2, //apply stagger on the parent tag
        },
    },
};

export function DashboardList(){
    return(
        <AnimatePresence initial={false}>
        <motion.ul 
        variants={boxVariant}
        initial={"hidden"}
        animate={"visible"}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2, type: "spring", stiffness: 200}}
        exit={{opacity: 0}}
        className={`grid grid-cols-2 mx-auto justify-center`}>
        <DashboardModal id="about" column={1} position="top" title="About" details="This is the about card" list={[{item: "item 1", link: "https://google.com"}, {item: "item 2", link: "https://google.com"}]} listTitle="list title" link="https://google.com">
          <AboutCard />
        </DashboardModal>
        <DashboardModal id="contact" column={2} position="top"  title="Contact" details="This is the contact card" list={[{item: "item 1", link: "https://google.com"}, {item: "item 2", link: "https://google.com"}]} listTitle="list title" link="https://google.com">
          <ContactCard />
        </DashboardModal>
        <div className="flex col-span-2 mx-auto -my-32 z-40">
        <DashboardModal id="skills" position="top"  title="Skills" details="This is the skills card" list={[{item: "item 1", link: "https://google.com"}, {item: "item 2", link: "https://google.com"}]} listTitle="list title" link="https://google.com">
          <SkillsCard />
        </DashboardModal>
        </div>
        <DashboardModal id="professionalprojects" column={1} title="Professional Projects" details="This is the professional projects card" list={[{item: "item 1", link: "https://google.com"}, {item: "item 2", link: "https://google.com"}]} listTitle="list title" link="https://google.com">
          <ProfessionalProjectsCard />
        </DashboardModal>
        <DashboardModal id="personalprojects" column={2} title="Personal Projects" details="This is the personal projects card" list={[{item: "item 1", link: "https://google.com"}, {item: "item 2", link: "https://google.com"}]} listTitle="list title" link="https://google.com">
          <PersonalProjectsCard />
        </DashboardModal>
      </motion.ul>
      </AnimatePresence>
    )
}