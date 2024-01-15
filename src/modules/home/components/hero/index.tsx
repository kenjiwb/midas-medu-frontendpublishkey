import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Head from "next/head"
// import Midas Lifestyle from "../../../../image/Midas Lifestyle.jpeg"
// const backgroundImageUrl = Midas Lifestyle
const styles = {
  container: {
    backgroundImage: `url(https://i.ibb.co/C6r1rMt/Midas Lifestyle.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}

const Hero = () => {
  if (typeof window !== "undefined") {
    const viewportWidth = window.innerWidth
    const isMobileSize = viewportWidth <= 768 // Adjust the threshold as needed
    console.log(`Viewport Width: ${viewportWidth}`)
    console.log(isMobileSize ? "Mobile Size" : "Not Mobile Size")
  }
  return (
    <div
      style={styles.container}
      className="w-screen h-screen flex justify-center md:bg-cover md:bg-center sm:h-[45vh] md:h-[45vh]"
    >
      <div>
        {/* <span>
          
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Ecommerce Starter Template
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Powered by Medusa and Next.js
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            View on GitHub
            <Github />
          </Button>
        </a> */}
        {/* <img src="https://i.ibb.co/C6r1rMt/Midas Lifestyle.jpg" alt="Midas Lifestyle" /> */}
        {/* <div style={styles.container}></div> */}
      </div>
    </div>
  )
}

export default Hero
