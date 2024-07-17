import LoginForm from '@/components/users/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="DEV Community" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Join the DEV Community
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
            DEV Community is a community of 1,735,380 amazing developers 
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm ">
                <span className="px-2 bg-white text-center text-gray-500 border-b pb-3 border-gray-300">
                    By signing in, you are agreeing to our <a href="#" className='text-indigo-600'>privacy policy, terms of use</a> and <a href="#" className='text-indigo-600'>code of conduct. </a>
                </span>
              </div>
              <div className="relative flex justify-center text-md ">
                <span className="px-2 bg-white text-center text-gray-700 mt-3">
                    New to DEV Community? <a href="#" className='text-indigo-600'>Create account.</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}