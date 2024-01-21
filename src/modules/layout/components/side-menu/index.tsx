import Link from "next/link"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { XMark, ArrowRightMini } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import CountrySelect from "../country-select"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "",
  Account: "/account",
  Cart: "/cart",
  PrivacyPolicy : "/privacyPolicy",
  Shipping : '/shipping'
}

const SideMenu = ({ searchModalOpen }: { searchModalOpen: () => void }) => {
  const handleSearchClick = (close: () => void) => {
    searchModalOpen()
    close()
  }

  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-1/3 2xl:w-1/4 h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6">
                    <div className="flex justify-end" id="xmark">
                      <button onClick={close}>
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        if (
                          name === "Search" &&
                          process.env.FEATURE_SEARCH_ENABLED
                        ) {
                          return (
                            <li key={name}>
                              <button
                                className="text-3xl leading-10 hover:text-ui-fg-disabled"
                                onClick={() => handleSearchClick(close)}
                              >
                                {name}
                              </button>
                            </li>
                          )
                        }
                        if(name === 'PrivacyPolicy') {
                          return (
                            <li key={name}>
                              <Link
                                href={href}
                                className="text-3xl leading-10 hover:text-ui-fg-disabled"
                                onClick={close}
                              >
                                Privacy Policy
                              </Link>
                            </li>
                          )
                        }
                        if(name === 'shipping') {
                          return (
                            <li key={name}>
                              <Link
                                href={href}
                                className="text-3xl leading-10 hover:text-ui-fg-disabled"
                                onClick={close}
                              >
                                Shipping
                              </Link>
                            </li>
                          )
                        }
                        return (
                          <li key={name}>
                            <Link
                              href={href}
                              className="text-3xl leading-10 hover:text-ui-fg-disabled"
                              onClick={close}
                            >
                              {name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        <CountrySelect toggleState={toggleState} />
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} Midas Lifestyle Store. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
