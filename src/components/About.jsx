import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-[85%] sm:w-[180px] md:w-[200px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-3 px-5 sm:px-6 min-h-[180px] sm:min-h-[220px] 
                   flex justify-evenly items-center flex-col hover:shadow-xl transition-all duration-300"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-11 h-11 sm:w-12 sm:h-12 object-contain transform hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-white text-[15px] sm:text-[17px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden">
      <motion.div variants={textVariant()} className="w-full px-4">
        <h1
          className={`${styles.sectionSubText} text-center pt-10 bg-clip-text text-transparent 
                      bg-gradient-to-r from-purple-500 to-cyan-500 mb-2`}
        >
          {/* Introduction */}
        </h1>
        <h2
          className={`${styles.sectionHeadText} text-center mt-10 bg-clip-text text-transparent 
                      bg-gradient-to-r from-purple-300 to-cyan-300`}
        >
          Overview
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 sm:mt-10 text-[16px] sm:text-[20px] max-w-5xl mx-auto 
             text-white-100 font-sans px-4 sm:px-8 py-6 rounded-lg 
             backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black 
             shadow-2xl border border-gray-700 tracking-wide leading-relaxed m-4"
      >
        <p className="mb-4 sm:mb-6">
          Proficient in designing and building robust, enterprise-grade web applications using{" "}
          <span className="text-purple-400 font-bold">
            Java, Spring Boot, Angular and React.js,
          </span>
          with a strong command of both backend and frontend development. Adept at developing{" "}
          <span className="text-yellow-400 font-semibold">
            RESTful and SOAP-based APIs
          </span>
          , applying secure coding practices, and ensuring modular and maintainable codebases.
          Skilled in working with both
          <span className="text-cyan-400 font-semibold">
            {" "}
            relational (PostgreSQL, MySQL, Oracle) and NoSQL (MongoDB, Redis, Cosmos DB)
          </span>
          databases to architect scalable data solutions.
        </p>

        <p className="mb-4 sm:mb-6">
          Hands-on experience in architecting 
          <span className="text-green-400 font-semibold">
            {" "}
            microservices and event-driven
          </span>{" "}
           systems using technologies like
          <span className="text-green-400 font-semibold"> Kafka, Redis, and RabbitMQ.</span>,
          Familiar with building responsive single-page applications (SPAs) using
          <span className="text-cyan-400 font-semibold"> Angular and React.js</span>
          , along with integrating frontend layers through secure APIs. Solid understanding
          of containerization and orchestration tools such as
          <span className="text-blue-400 font-semibold"> Docker and Kubernetes</span>
          , enabling efficient cloud deployments on platforms like
          <span className="text-yellow-400 font-semibold">  AWS and Azure.</span>
        </p>

        <p className="mb-4 sm:mb-6">
          Well-versed in CI/CD practices using
          <span className="text-orange-400 font-semibold"> Jenkins, GitLab CI/CD, and Terraform</span>,
          enabling continuous integration and automated deployments. Strong focus on quality assurance 
          through unit, integration, and end-to-end testing using
          <span className="text-blue-300 font-semibold"> JUnit, Mockito, Cypress, and Jasmine</span>. 
          Experienced in monitoring, logging, and observability using
          <span className="text-yellow-400 font-semibold">
            {" "}
            ELK Stack, AWS CloudWatch, and New Relic, 
          </span>
           supporting production-ready deployments and proactive issue resolution.
        </p>

        <p>
          Deep understanding of 
          <span className="text-pink-400 font-semibold">
            {" "}
            Agile methodologies and SDLC
          </span>
           best practices, sprint planning, and cross-functional collaboration.
          Passionate about building secure, scalable, and maintainable software 
          solutions that align with modern cloud architecture and business goals.
        </p>
      </motion.div>

      <div className="mt-10 sm:mt-16 flex flex-wrap gap-6 sm:gap-8 justify-center items-center px-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
