
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Midas Lifestyle STORE",
    description: "The ulitmate place for your own needs!",
}

export default async function PrivacyPolicyPage() {

    return (
        <div className="w-full relative">
            <div className="custom-container">
                <div className="privacy-policy-banner">
                    <div className="heading">
                        <h1 className="text-2xl-semi mb-4">
                            <h1 className="text-2xl-semi mb-4">
                                <span>Privacy</span>  <br /> <br />
                                <span>Policy</span>
                            </h1>
                        </h1>
                    </div>
                </div>
                <div className="policies-content mt-5 pt-8 px-5">
                    <h1 className="text-2xl-semi mb-4 common-h1 pt-8">
                        Privacy Policy
                    </h1>
                    <div className="para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                            Last updated: 1 August 2023
                        </h3>
                        <p className="comman-p mt-5">At Midas Lifestyle, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us when using our website. By accessing and using our website, you consent to the practices described in this policy.</p>
                    </div>
                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **1. Information Collection**
                        </h3>
                        <p className="comman-p my-5">We may collect personal information from you when you interact with our website, including but not limited to:</p>

                        <p className="comman-p">- Contact information, such as your name, email address, phone number, and shipping address.</p>
                        <p className="comman-p">- Payment information, including credit card details, to process your purchases.</p>
                        <p className="comman-p">- Demographic information, preferences, and interests to enhance your shopping experience.</p>
                        <p className="comman-p">- Information you voluntarily provide through customer surveys or reviews.</p>
                    </div>
                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **2. Information Use**
                        </h3>
                        <p className="comman-p my-5">- To process and fulfill your orders, including delivery and returns.</p>

                        <p className="comman-p">- To provide you with relevant product recommendations, promotions, and special offers.</p>
                        <p className="comman-p">- To personalize your website experience based on your interests and preferences.</p>
                        <p className="comman-p">- To improve our website, products, and services based on customer feedback.</p>
                        <p className="comman-p">- To communicate with you about your orders, inquiries, and promotional updates.</p>
                        <p className="comman-p">- To protect against fraud, unauthorized transactions, and other misuse of our website.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **3. Information Sharing**
                        </h3>
                        <p className="comman-p my-5">We value your trust and will not sell, trade, or share your personal information with third parties for their marketing purposes. However, we may share your information with certain third-party service providers who assist us in operating our website, processing transactions, and delivering products to you. These service providers are obligated to keep your information confidential and are not authorized to use it for any other purpose.</p>
                        <p className="comman-p my-5">Additionally, we may disclose your personal information if required by law, to enforce our website policies, or to protect the rights, property, or safety of Midas Lifestyle, our customers, or others.</p>
                        <p className="comman-p my-5">**4. Cookies and Tracking Technologies**</p>
                        <p className="comman-p my-5">We use cookies and similar tracking technologies to enhance your website experience and gather information about your preferences and activities. Cookies are small data files stored on your device that help us remember your browsing preferences and enable certain website features. You can control cookie preferences through your browser settings; however, disabling cookies may limit your access to some website features.</p>
                    </div>


                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **5. Data Security**
                        </h3>
                        <p className="comman-p my-5">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **6. Links to Third-Party Websites**
                        </h3>
                        <p className="comman-p my-5">Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                    </div>


                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **7. Consent and Changes to this Policy**
                        </h3>
                        <p className="comman-p my-5">By using our website, you consent to the terms of this Privacy Policy. We may update this policy occasionally to reflect changes in our practices or for legal, operational, or regulatory reasons. Any revisions will be posted on this page, and the "Last updated" date at the top will indicate the most recent changes. We recommend checking this page periodically to stay informed about our privacy practices.</p>
                    </div>

                    <div className="para list-para pt-8 prr-5">
                        <h3 className="text-2xl-semi common-h3">
                        **8. Contact Us**
                        </h3>
                        <p className="comman-p my-5">If you have any questions, concerns, or requests regarding our Privacy Policy or the use of your personal information, please contact us at sales@midaslifestyle.net.</p>
                        <p className="comman-p my-5">Thank you for trusting Midas Lifestyle. We are committed to safeguarding your privacy and providing you with an exceptional shopping experience.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
