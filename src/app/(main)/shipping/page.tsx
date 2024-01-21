
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
                    <h1 className="text-2xl-semi mb-14 pb-8 large-h1">Shipping & Delivery</h1>
                    <hr />
                </div>
                <div className="mt5 pt-8 mt-10 content text-center">
                    <div className="heading">
                        <h1 className="text-2xl-semi mb-4">Shipping Policy</h1>
                    </div>
                    <div className="para mt-12">
                        <p className="comman-p mt-5">The goods in this shop are delivered free of charge
                            Your order will be delivered in five to eight days. We process and distribute your order in the most cost-effective manner so that we can provide free delivery. If you find that your goods have not been shipped, please do not worry. We may take a little longer to ship the goods than you expected, but we will deliver them in time for the expected delivery date.</p>
                        <p className="comman-p">How to calculate the delivery date and delivery date?
                            We calculate the estimated delivery time by adding the shipping time to the estimated delivery date.</p>
                        <p className="comman-p mt-5">The shipping time depends on the delivery speed you choose. Transport time is calculated on working days. Saturdays and Sundays are usually not included in the transport time. The exception is the weekend delivery option at checkout. We also take holidays into account when calculating transport times.</p>
                        <p className="comman-p mt-5">For some delivery dates, we may provide an “Order by” countdown timer. This displays the order time range within which you must place your order to receive the item on the shipping date shown. This date is subject to change before you place your order. Your order confirmation email will include your confirmation delivery date.
                            After the order is delivered, you can track it in my order.</p>
                    </div>
                    <div className="heading">
                        <h1 className="text-2xl-semi my-5">Return & Exchange Policy</h1>
                    </div>
                    <p className="comman-p mt-5">We at Midas Lifestyle understand that sometimes you may change your mind about your purchase, or you may be dissatisfied with our products. In such cases, we offer easy returns and exchanges. You can return or exchange any product within 30 days of receiving it, provided that it is unused and in the same condition as you received it. To know more about our return and exchange policies, please visit our Returns & Exchanges page.</p>
                </div>
            </div>
        </div>
    )
}
