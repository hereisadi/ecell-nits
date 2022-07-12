import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Breaking2 = () => {
  return (
    <div>
      {" "}
      <div className="home-text-rec">
        <div className="body-gltich">
          <h1 class="glitch">
            <span aria-hidden="true">
              {" "}
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'Anton',
                }}
                startDelay={2000}
                cursorColor="#161c2f"
                multiText={[
                  "Welcome To Entrepreneur Cell Nit Silchar!",
                  "Virtue Self-Dependency Willingness!",
                  "A Unique Initiative by NIT Silchar!",
                  "For the students, By the students!",
                ]}
                loop={true}
                multiTextDelay={2000}
                typeSpeed={200}
              />
            </span>
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Anton',
              }}
              startDelay={2000}
              cursorColor="#161c2f"
              multiText={[
                "Welcome To Entrepreneur Cell Nit Silchar!",
                "Virtue Self-Dependency Willingness!",
                "A Unique Initiative by NIT Silchar!",
                "For the students, By the students!",
              ]}
              loop={true}
              multiTextDelay={2000}
              typeSpeed={200}
            />
            <span aria-hidden="true">
              {" "}
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'Anton',
                }}
                startDelay={2000}
                cursorColor="#161c2f"
                multiText={[
                  "Welcome To Entrepreneur Cell Nit Silchar!",
                  "Virtue Self-Dependency Willingness!",
                  "A Unique Initiative by NIT Silchar!",
                  "For the students, By the students!",
                ]}
                loop={true}
                multiTextDelay={2000}
                typeSpeed={200}
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Breaking2;
