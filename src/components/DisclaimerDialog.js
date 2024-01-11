import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'

export default function DisclaimerDialog(props) {

  return (

    <Transition appear show={props.showPopUp} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => props.setShowPopUp(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white  p-6 text-left align-middle shadow-xl transition-all">
                <div className='p-4 border-2 border-slate-900 flex justify-center items.center mb-4 w-20 h-20 mx-auto rounded-md'>
                  <Image src={props.imageURL} width={64} height={64} alt="warning" className='' />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-sm text-center font-semibold leading-6 text-black"
                >
                  {props.warningText}
                </Dialog.Title>
                <div className=" mx-auto">
                  <p className="text-sm text-center text-black">
                    {props.infoText}
                  </p>
                </div>

                <div className="mt-8 flex ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md mx-auto border-2 border-slate-900 px-12 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => props.setShowPopUp(false)}
                  >
                    Kapat
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>

  )
}
