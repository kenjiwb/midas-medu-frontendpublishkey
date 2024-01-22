import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Midas Lifestyle STORE",
  description: "The ulitmate place for your own needs!",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <div id="homepag">
      <Hero />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />

        <div className="banners mt-10 mx-8">
          <div className="flex small-wrap">
            <div className="left-banner">
              <div className="content flex flex-column items- justify-center ps-8 text-white">
                <h3 className="text-2xl-semi">Holiday Deals</h3>
                <h1 className="text-2xl-semi">Up to 50% <br /> Off</h1>
                <h3 className="text-2xl-semi">Selected Fashion Brands</h3>
                <a href="#" className="banner-btn">Shop Now</a>
              </div>
            </div>
            <div className="right-banner">
              <div className="content flex flex-column items- justify-center ps-8 text-white">
                <h3 className="text-2xl-semi">Just In</h3>
                <h1 className="text-2xl-semi">Elevate Your <br /> Style</h1>
                <h3 className="text-2xl-semi">Top Fashion Brands</h3>
                <a href="#" className="banner-btn">Shop</a>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Cards */}

        <div className="icon-cards flex small-wrap mt-12 mx-8">
          <div className="icon-box flex items-center">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR3m1ppZ-UKird5L2vWEM7QP18yFWa9iid1G1gJ5ukj5leLxLPL" height='120' width='120' alt="" />
            <h4 className="text-2xl-semi ps-3">Fast & Free Shipping</h4>
          </div>
          <div className="icon-box flex items-center">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqhxOPRg04c19UpcWK7fbuEZ1xznMqb1dUwkXz5nNsC9eVp8_t" height='120' width='120' alt="" />
            <h4 className="text-2xl-semi ps-3">Free Returns</h4>
          </div>
          <div className="icon-box flex items-center">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBW2RNI6cM-S0w75lA9dZkQmOpISxqzZ945b36NHXkYhyJbM0H" height='120' width='120' alt="" />
            <h4 className="text-2xl-semi ps-3">Low Prices Guaranteed</h4>
          </div>
          <div className="icon-box flex items-center">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRF4-4kipdYp2GrCr5JNKO_wcgD7ZtcxuVf5wRUrk48mpr-uFtR" height='120' width='120' alt="" />
            <h4 className="text-2xl-semi ps-3">24/7 Customer Support</h4>
          </div>
        </div>

        {/* Icon Cards / */}

        {/* Sale Banner */}

        <div className="salebanner flex small-wrap mx-8 my-10">
          <div className="left-banner">
            <img src="https://static.wixstatic.com/media/9ef40d_14a29d0af5014d869e3c227a9bc9f5d1~mv2.jpg/v1/fill/w_1064,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9ef40d_14a29d0af5014d869e3c227a9bc9f5d1~mv2.jpg" alt="" />
          </div>
          <div className="right-banner flex items-center ps-10">
            <div className="contnents">
              <h3>Save Up to</h3>
              <h1>50%</h1>
              <h3>on Selected Brands</h3>
              <h5 className="my-4">Limited Time Offer</h5>
              <div className="banner-btn">Shop Now</div>
            </div>
          </div>
        </div>

        {/* Sale Banner / */}


        {/* Top Brands */}


        <div className="top-brands my-12 py-5 mx-8">
          <div className="heading text-center">
            <h1 className="text-2xl-semi mb-4">Top Brands</h1>
          </div>
          <div className="brands small-wrap flex px-10">
            <div className="brand">
              <img src="https://static.wixstatic.com/media/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.png/v1/fill/w_244,h_137,q_90/c837a6_9117ead0c4e54c489723093e91f1a0c2~mv2.webp" alt="" />
            </div>
            <div className="brand">
              <img src="https://static.wixstatic.com/media/c837a6_00d04f5724314ec689946e22d4b8b49c~mv2.png/v1/fill/w_244,h_137,q_90/c837a6_00d04f5724314ec689946e22d4b8b49c~mv2.png" alt="" />
            </div>
            <div className="brand">
              <img src="https://static.wixstatic.com/media/c837a6_184d980948c744d6a2ce33533cfaab1e~mv2.png/v1/fill/w_244,h_137,q_90/c837a6_184d980948c744d6a2ce33533cfaab1e~mv2.png" alt="" />
            </div>
            <div className="brand">
              <img src="https://static.wixstatic.com/media/c837a6_59362db94e2d47f299879adb4156d23b~mv2.png/v1/fill/w_244,h_137,q_90/c837a6_59362db94e2d47f299879adb4156d23b~mv2.webp" alt="" />
            </div>
            <div className="brand">
              <img src="https://static.wixstatic.com/media/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.png/v1/fill/w_243,h_137,q_90/c837a6_e4058f072b2c40bf9e8857c180342582~mv2.webp" alt="" />
            </div>
            
          </div>
        </div>

        {/* Top Brands / */}

      </Suspense>
    </div>
  )
}
