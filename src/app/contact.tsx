"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Contact() {
  return (
    <div className="grid w-full px-24">
      <div className="isolate px-6 pt-24 pb-8 sm:pt-32 sm:pb-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-5xl font-semibold tracking-tight">
            Contact Me
          </h2>
          <p className="mt-2 text-lg/8 text-gray-400">
            Fill out the form below to get in touch with me
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-12 max-w-xl sm:mt-16"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="John"
                  className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Doe"
                  className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-2-0 outline outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-gray-800 outline outline-1 -outline-offset-1 outline-gray-700 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                  <div className="grid grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="w-full col-start-1 row-start-1 appearance-none rounded-l-md py-2 pl-3.5 mr-[-0.5rem] text-base bg-gray-800 text-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 hover:cursor-pointer"
                    >
                      <option value="US">United States (+1)</option>
                      <option value="CA">Canada (+1)</option>
                      <option value="CN">China (+86)</option>
                      <option value="IN">India (+91)</option>
                      <option value="ID">Indonesia (+62)</option>
                      <option value="PK">Pakistan (+92)</option>
                      <option value="BR">Brazil (+55)</option>
                      <option value="NG">Nigeria (+234)</option>
                      <option value="BD">Bangladesh (+880)</option>
                      <option value="RU">Russia (+7)</option>
                      <option value="MX">Mexico (+52)</option>
                      <option value="JP">Japan (+81)</option>
                      <option value="ET">Ethiopia (+251)</option>
                      <option value="PH">Philippines (+63)</option>
                      <option value="EG">Egypt (+20)</option>
                      <option value="VN">Vietnam (+84)</option>
                      <option value="CD">DR Congo (+243)</option>
                      <option value="TR">Turkey (+90)</option>
                      <option value="IR">Iran (+98)</option>
                      <option value="DE">Germany (+49)</option>
                      <option value="TH">Thailand (+66)</option>
                      <option value="GB">United Kingdom (+44)</option>
                      <option value="FR">France (+33)</option>
                      <option value="IT">Italy (+39)</option>
                      <option value="ZA">South Africa (+27)</option>
                      <option value="MM">Myanmar (+95)</option>
                      <option value="KR">South Korea (+82)</option>
                      <option value="CO">Colombia (+57)</option>
                      <option value="ES">Spain (+34)</option>
                      <option value="UA">Ukraine (+380)</option>
                      <option value="TZ">Tanzania (+255)</option>
                      <option value="AR">Argentina (+54)</option>
                      <option value="KE">Kenya (+254)</option>
                      <option value="PL">Poland (+48)</option>
                      <option value="DZ">Algeria (+213)</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-[0.45rem] size-5 self-center justify-self-end text-gray-300 sm:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="(123) 456-7890"
                    className="block min-w-0 grow py-1.5 pl-[0.35rem] pr-3 text-base bg-gray-800 text-gray-200 placeholder:text-gray-400 focus:outline focus:outline-0 rounded-r-md"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter message here..."
                  className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-gray-200 shadow-sm hover:bg-indigo-700 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-self-center justify-center w-full border-t border-t-gray-200">
        <p className="mt-5 mb-12 sm:mb-16">romahapatra@gmail.com</p>
      </div>
    </div>
  );
}
