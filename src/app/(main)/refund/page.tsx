
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Midas Lifestyle STORE",
    description: "The ulitmate place for your own needs!",
}

export default async function RefundPage() {

    return (
        <div className="w-full relative">
            <div className="custom-container-3">
                <div className="shipping-banner text-center">
                    <h1 className="text-2xl-semi mb-14 pb-8 large-h1">Refund & Exchange</h1>
                    <hr />
                </div>
                <div className="mt5 pt-8 mt-10 content">
                    <div className="heading text-center">
                        <h1 className="text-2xl-semi mb-4">
                            Refund & Exchange
                            Return and Exchange Policy - Midas Lifestyle</h1>
                    </div>
                    <div className="para mt-12 text-center">
                        <p className="comman-p mt-5">At Midas Lifestyle, we strive to provide you with quality products and exceptional service. We understand that there may be instances where you need to return or exchange an item. To ensure a seamless experience, we have outlined our Return and Exchange Policy below:</p>
                    </div>
                </div>
                <div className="para-list mt-8">
                    <h4 className="text-2xl-semi mb-14 pb-8 min-h4">Return Eligibility:</h4>

                    <div className="lists">
                        <div className="list flex items-center pr-5">
                            <h5 className="text-2xl-semi mini-h5 pr-2">1. Within 30 Days:</h5>
                            <p>You may initiate a return or exchange within 30 days of receiving your order.</p>
                        </div>
                    </div>


                    <div className="lists">
                        <div className="list flex items-center pr-5">
                            <h5 className="text-2xl-semi mini-h5 pr-2">2. Original Condition:</h5>
                            <p>The item must be in its original, unused condition, with all tags, labels, and accessories intact.</p>
                        </div>
                    </div>

                    <div className="lists">
                        <div className="list flex items-center pr-5">
                            <h5 className="text-2xl-semi mini-h5 pr-2">3. Packaging: </h5>
                            <p>Please return the product in its original packaging or an equivalent protective packaging.</p>
                        </div>
                    </div>

                    <div className="lists">
                        <div className="list flex items-center pr-5">
                            <h5 className="text-2xl-semi mini-h5 w-70">4. Personalized Items: </h5>
                            <p>Please note that personalized or customized items are non-refundable unless they have a manufacturing defect or were damaged during shipping.</p>
                        </div>
                    </div>

                    <div className="lists mt-10">
                        <div className="list pr-5">
                            <h5 className="text-2xl-semi mini-h5">Initiating a Return or Exchange:</h5>
                            <p className="my-10">To request a return or exchange, please follow these steps:</p>
                            <div className="nums">
                                <p>1. Log in to your Midas Lifestyle account.</p>
                                <p>2. Go to the “My Orders " section.</p>
                                <p>3. Select the order containing the item you want to return or exchange.</p>
                                <p>4. Click on the "Request Return/Exchange" option and follow the provided instructions.</p>
                            </div>
                        </div>
                    </div>


                    <div className="lists mt-10">
                        <div className="list pr-5">
                            <h5 className="text-2xl-semi mini-h5">Return and Exchange Process:</h5>
                            <p className="mt-5">Once your returned item is received and inspected, we will send you an email notification to inform you of the status of your return or exchange. We will notify you if your request is approved or rejected.</p>
                        </div>
                    </div>


                    <div className="lists mt-10">
                        <div className="list pr-5">
                            <h5 className="text-2xl-semi mini-h5">Approved Returns:</h5>
                            <p className="my-5">If your return request is approved, you have the following options:</p>
                            <div className="nums">
                                <p>1. Refund to original payment method: If you choose a refund, the amount will be credited back to the original payment method used during the purchase. Please allow 14 days for the refund to reflect in your account, depending on your financial institution.</p>
                                <p className="mt-5">2. Store Credit: Alternatively, we can issue the refund in the form of store credit, which can be used for future purchases on our website.</p>
                            </div>
                        </div>
                    </div>



                    <div className="lists mt-10">
                        <div className="list pr-5">
                            <h5 className="text-2xl-semi mini-h5">Approved Exchanges:</h5>
                            <p className="my-5">If your exchange request is approved, we will process the exchange and ship the replacement item to you promptly. You may be responsible for any price differences between the items.
                            <br />
                                *Return Shipping Costs:
                            </p>
                            <p>Customers are responsible for covering the return shipping costs, unless the return is due to a product defect or an error on our part. In such cases, we will provide a prepaid return label.</p>
                        </div>
                    </div>



                    <div className="lists mt-10">
                        <div className="list pr-5">
                            <h5 className="text-2xl-semi mini-h5">Damaged or Incorrect Items:</h5>
                            <p className="my-5">If you received a damaged or incorrect item, please contact our customer support team immediately. We will arrange for a replacement or offer a full refund, as per your preference.
                            </p>
                        </div>
                    </div>


                    <div className="lists mt-10">
                        <div className="list pr-5">
                            <h5 className="text-2xl-semi mini-h5">Questions or Assistance:</h5>
                            <p className="my-5">Should you have any questions or require assistance with the return or exchange process, please do not hesitate to contact our customer support team at <span className="txt-red">sales@midaslifestyle.net</span>
                            </p>
                            <p>Midas Lifestyle reserves the right to update or modify this Return and Exchange Policy at any time. We recommend reviewing this policy periodically for any changes. Thank you for choosing Midas Lifestyle for your shopping needs. We appreciate your trust and business.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
