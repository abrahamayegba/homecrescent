import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useToast } from "../ui/use-toast";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Signinform from "../Signinform";
import Signupform from "../Signupform";

interface AuthModalProps {
  open: boolean;
  openModal: () => void;
  onClose: () => void;
}
const AuthModal: React.FC<AuthModalProps> = ({ open, openModal, onClose }) => {
  const { toast } = useToast();

  const showSuccessToast = () => {
    toast({
      title: "Successful!",
      description: "Your customer has been successfully archived",
      duration: 3500,
    });
  };
  const showFailureToast = (error: any) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error?.message,
      duration: 3000,
    });
  };
  const handleArchiveCustomerClick = async () => {
    try {
      onClose();
      showSuccessToast();
    } catch (error) {
      console.error(error);
      showFailureToast(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[110]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform gap-y-3 overflow-hidden rounded-lg bg-white p-4 transition-all w-[440px] ">
                <div className=" flex flex-col gap-y-3 py-6 px-2 relative">
                  <button className=" absolute cursor-pointer border border-transparent hover:bg-gray-100 rounded-full p-2 right-0 mt-[-24px]">
                    <X onClick={onClose} className=" w-5 h-5" />
                  </button>
                  <p className=" font-semibold text-2xl text-primary-blue text-opacity-90 tracking-tight mt-3">
                    Welcome to Homecrescent
                  </p>
                  <Tabs
                    defaultValue="signin"
                    className="w-full flex items-start flex-col"
                  >
                    <TabsList className=" border-b w-full flex-row gap-x-4 flex justify-start">
                      <TabsTrigger
                        className="data-[state=active]:border-b-2 text-primary-blue data-[state=active]:border-b-blue-600 "
                        value="signin"
                      >
                        Sign in
                      </TabsTrigger>
                      <TabsTrigger
                        className="data-[state=active]:border-b-2 text-primary-blue data-[state=active]:border-b-blue-600 "
                        value="newaccount"
                      >
                        New account
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent className=" w-full" value="signin">
                      <Signinform />
                    </TabsContent>
                    <TabsContent className=" w-full" value="newaccount">
                      <Signupform />
                    </TabsContent>
                  </Tabs>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AuthModal;
