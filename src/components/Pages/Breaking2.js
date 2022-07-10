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
                startDelay={1000}
                cursorColor="#3F3D56"
                multiText={[
                  "Welcome To Entrepreneurship Cell Nit Silchar!",
                  "Virtue Self-Dependency Willingness!",
                  "A Unique Initiative by NIT Silchar!",
                  "For the students, By the students!",
                ]}
                loop={true}
                nextTextDelay={1000}
                typeSpeed={150}
              />
            </span>
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Anton',
              }}
              startDelay={1000}
              cursorColor="#3F3D56"
              multiText={[
                "Welcome To Entrepreneurship Cell Nit Silchar!",
                "Virtue Self-Dependency Willingness!",
                "A Unique Initiative by NIT Silchar!",
                "For the students, By the students!",
              ]}
              loop={true}
              nextTextDelay={1000}
              typeSpeed={150}
            />
            <span aria-hidden="true">
              {" "}
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'Anton',
                }}
                startDelay={1000}
                cursorColor="#3F3D56"
                multiText={[
                  "Welcome To Entrepreneurship Cell Nit Silchar!",
                  "Virtue Self-Dependency Willingness!",
                  "A Unique Initiative by NIT Silchar!",
                  "For the students, By the students!",
                ]}
                loop={true}
                nextTextDelay={1000}
                typeSpeed={150}
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Breaking2;
