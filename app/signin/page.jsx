import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "../components/GoogleSignInButton";
import appleIcon from "../../public/apple.svg";

const SignInPage = () => {
  return (
    <div className="min-h-full flex">
      <div className="hidden md:flex justify-center items-center w-[40%] h-100vh bg-black">
        <p className="font-montserrat tracking-wide text-5xl font-bold text-white inline-block">Board.</p>
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-[#F5F5F5]">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Sign in</h2>
            <p className="mt-2 font-medium text-gray-800">Sign in to your account</p>
          </div>

          <div className="mt-8">
            <div className="mt-1 grid grid-cols-2 gap-3">
              <GoogleSignInButton />
              <button className="w-full gap-2 items-center flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <Image src={appleIcon} alt="Sign in with Apple" />
                <span className="text-xs md:text-sm">Sign in with Apple</span>
              </button>
            </div>

            <div className="mt-6 px-5 py-8 bg-white rounded-xl">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Sign in
                </button>
              </form>
            </div>
            <div className="mt-2 relative flex justify-center text-sm">
              <span className="px-2 text-gray-500">
                Don't have an account?{" "}
                <Link href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                  Register here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <section className="flex min-h-full overflow-hidden pt-16 sm:py-28">
    //   <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
    //     <div className="relative mt-12 sm:mt-16">
    //       <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">Sign in to your account</h1>
    //     </div>
    //     <div className="sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24">
    //       <form>
    //         <div className="space-y-2">
    //           <TextField
    //             id="email"
    //             name="email"
    //             type="email"
    //             label="Sign in with your email"
    //             placeholder="hello@me.com"
    //             autoComplete="email"
    //             required
    //           />
    //         </div>
    //         <Button type="submit" variant="outline" color="gray" className="mt-3 w-full">
    //           Continue with email
    //         </Button>
    //       </form>
    //       <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
    //         or
    //       </div>
    //       <GoogleSignInButton />
    //     </div>
    //   </div>
    // </section>
  );
};

export default SignInPage;
