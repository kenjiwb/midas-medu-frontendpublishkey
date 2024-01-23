import { useMobileMenu } from "@lib/context/mobile-menu-context"
import { useStore } from "@lib/context/store-context"
import useCountryOptions from "@lib/hooks/use-country-options"
import ChevronDown from "@modules/common/icons/chevron-down"
import { MagnifyingGlassMini, XMark as X } from "@medusajs/icons"
import { useCollections, useMeCustomer } from "medusa-react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { Heading } from "@medusajs/ui"

const MainMenu = () => {
  const { collections } = useCollections()
  const { customer } = useMeCustomer()
  const { countryCode } = useStore()

  const countries = useCountryOptions()

  const {
    close,
    screen: [_, setScreen],
  } = useMobileMenu()

  const setScreenCountry = () => setScreen("country")
  const setScreenSearch = () => setScreen("search")

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center justify-between w-full border-b border-gray-200 p-6">
        <div className="flex-1 basis-0">
          <button
            className="flex items-center gap-x-2"
            onClick={setScreenCountry}
          >
            <ReactCountryFlag countryCode={countryCode || "us"} svg />
            <ChevronDown />
          </button>
        </div>

        <Heading className="txt-compact-xlarge-plus text-ui-fg-subtle uppercase">
        <img src="https://static.wixstatic.com/media/9ef40d_58a1a80b9a9641d69c61436c550136cb~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png" height="60" width="60" alt="" />
        </Heading>

        <div className="flex-1 basis-0 flex justify-end">
          <button onClick={close}>
            <X />
          </button>
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-between p-6">
        {process.env.FEATURE_SEARCH_ENABLED && (
          <button
            className="bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-ui-fg-muted rounded-rounded"
            onClick={setScreenSearch}
          >
            <MagnifyingGlassMini />
            <span placeholder="Search products" className="text-base-regular">
              Search products
            </span>
          </button>
        )}

        <div className="flex flex-col flex-1 text-large-regular text-gray-900">
          <ul className="flex flex-col gap-y-2">
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/store">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Go to Store</span>
                  <span>Store</span>
                  <ChevronDown className="-rotate-90" />
                </button>
              </Link>
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/privacyPolicy">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Privacy Policy</span>
                  <span>Privacy Policy</span>
                </button>
              </Link>
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/shipping">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Shipping</span>
                  <span>Shipping</span>
                </button>
              </Link>
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/termsservice">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Terms Of Service</span>
                  <span>Terms Of Service</span>
                </button>
              </Link>
            </li>
            <li className="bg-gray-50 p-4 rounded-rounded">
              <Link href="/refund">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={close}
                >
                  <span className="sr-only">Refund & Exchange</span>
                  <span>Refund & Exchange</span>
                </button>
              </Link>
            </li>
            {collections ? (
              <>
                {collections.map((collection) => (
                  <li
                    key={collection.id}
                    className="bg-gray-50 p-4 rounded-rounded"
                  >
                    <Link href={`/collections/${collection.handle}`}>
                      <button
                        className="flex items-center justify-between w-full"
                        onClick={close}
                      >
                        <span className="sr-only">
                          Go to {collection.title} collection
                        </span>
                        <span>{collection.title}</span>
                        <ChevronDown className="-rotate-90" />
                      </button>
                    </Link>
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-8 text-small-regular">
            {!customer ? (
              <div className="flex flex-col gap-y-4 ">
                <span className="text-gray-700 uppercase">Account</span>
                <Link href={`/account/login`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to sign in page</span>
                    <span className="normal-case">Sign in</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4">
                <span className="text-gray-700 uppercase">Signed in as</span>
                <Link href={`/account`} passHref>
                  <button
                    className="flex items-center justify-between border-b border-gray-200 py-2 w-full"
                    onClick={close}
                  >
                    <span className="sr-only">Go to account page</span>
                    <span className="normal-case">{customer.email}</span>
                    <ChevronDown className="-rotate-90" />
                  </button>
                </Link>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <span className="text-gray-700 uppercase">Delivery</span>
              <button
                className="flex items-center justify-between border-b border-gray-200 py-2"
                onClick={setScreenCountry}
              >
                <span className="sr-only">
                  Click to select shipping country
                </span>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag countryCode={countryCode || "us"} svg />
                  <span className="normal-case">
                    Shipping to{" "}
                    {countries?.find((c) => c.country === countryCode)?.label}
                  </span>
                </div>
                <ChevronDown className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
