import { useState, } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';


export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

const onSubmit = async (data) => {
  setIsRegistering(true);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/auth`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const result = await response.json();
    
    localStorage.setItem('user', JSON.stringify({
      email: result.email,
    }))

    if (result.token) {
      localStorage.setItem('token', result.token);
    } 

    toast.success('Login successful!');

    router.push('/newpost')
  } catch (error) {
    console.error('Login error:', error);
    toast.error(error.message || 'An error occurred during registration');
  } finally {
    setIsRegistering(false);
  }
};

  const handleProviderSignUp = (provider) => {
    toast.info(`Sign up with ${provider} clicked`);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="space-y-6">
        <button
          onClick={() => handleProviderSignUp('Google')}
          className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaGoogle className="mr-2" /> Continue with Google
        </button>
        <button
          onClick={() => handleProviderSignUp('GitHub')}
          className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaGithub className="mr-2" /> Continue with GitHub
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              OR
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                  required: "Email is required",
                  pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address"
                }
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { 
                    required: "Password is required",
                    minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  }
                })}
                className="block w-full pr-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={isRegistering}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegistering ? 'Log in' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}