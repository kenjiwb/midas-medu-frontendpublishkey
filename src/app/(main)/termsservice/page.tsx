
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Midas Lifestyle STORE",
    description: "The ulitmate place for your own needs!",
}

export default async function ShippingPage() {

    return (
        <div className="w-full relative">
            <div className="custom-container-2">
                <div className="shipping-banner text-center">
                    <h1 className="text-2xl-semi mb-14 pb-8 large-h1">Terms Of Service</h1>
                    <hr />
                </div>
                <div className="policies-content mt-5 pt-8 px-5">
                    <p className="comman-p mt-5">Welcome to Midas Lifestyle! Throughout this website, the terms "we," "us," and "our" refer to Midas Lifestyle. By accessing or using any part of this website, you agree to be bound by these Terms of Service. Please read them carefully.</p>
                    <div className="para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">1. Agreement to Terms</h3>
                        <p className="comman-p mt-5">By visiting our website and/or purchasing from us, you are participating in our "Services" and agree to be bound by these Terms of Service, including additional terms and conditions and policies referenced herein.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        2. Online Store Terms
                        </h3>
                        <p className="comman-p my-5">You represent that you are of legal age in your state or province of residence or have given consent for any minor dependents to use this site. Do not use our products or services for unlawful purposes. Any breach will result in immediate termination of your service.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        3. General Conditions
                        </h3>
                        <p className="comman-p my-5">We reserve the right to refuse service to anyone for any reason at any time. Your content may be transmitted unencrypted, excluding credit card information which is always encrypted. You may not reproduce or exploit any part of the Service without our express written permission.</p>
                    </div>

                    <div
                     className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        4. Accuracy of Information
                        </h3>
                        <p className="comman-p my-5">We strive to provide accurate and timely information, but we are not responsible for inaccuracies. Rely on primary sources for making decisions. Historical information on this website may not be the latest and is provided for reference purposes only.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        5. Modifications to Services and Prices
                        </h3>
                        <p className="comman-p my-5">Product prices may change without notice. We may modify or discontinue the Service at any time without notice. We shall not be liable for any changes, suspensions, or interruptions.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">6. Products or Services (if applicable)</h3>

                        <p className="comman-p my-5">Certain products or services are available online through the website. They may be available in limited quantities and subject to our Refunds and Returns Policy. Colors and images displayed are as accurate as possible.</p>
                        <p className="comman-p my-5">By accessing or using our website, you accept and agree to these Terms of Service. We may update, change, or replace any part of these terms, so please check back periodically for updates. If you do not agree with any of the terms, do not access this website or use our services.</p>
                        <p className="comman-p my-5">Thank you for choosing Midas Lifestyle. Enjoy your shopping experience with us!</p>

                        <h3 className="text-2xl-semi common-h3">If you have any questions or concerns, please reach out to us at sales@midaslifestyle.net.</h3>

                    </div>


                </div>
            </div>
        </div>
    )
}
