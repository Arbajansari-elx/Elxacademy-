'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, GraduationCap, AlertCircle, CheckCircle, Loader } from 'lucide-react';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    college: '',
    batch: '',
  });
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const colleges = [
    'Mahamaya Polytechnic, Gorakhpur',
    'Delhi Polytechnic',
    'Noida Institute of Technology',
    'Mumbai Institute of Technology',
    'Bengaluru Engineering College',
    'Other',
  ];

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupError('');
    setSignupSuccess('');
    setIsLoading(true);

    if (!signupForm.name || !signupForm.email || !signupForm.password || !signupForm.college) {
      setSignupError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(signupForm.email)) {
      setSignupError('Please enter a valid email');
      setIsLoading(false);
      return;
    }

    if (signupForm.password.length < 8) {
      setSignupError('Password must be at least 8 characters');
      setIsLoading(false);
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setSignupError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (passwordStrength < 2) {
      setSignupError('Password is too weak');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      console.log('Signup attempt:', signupForm);
      setSignupSuccess('✅ Account created! Logging you in...');
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    }, 1500);
  };

  const PasswordStrengthIndicator = () => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    if (signupForm.password.length === 0) return null;
    return (
      <div className="space-y-2">
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all ${
                i < passwordStrength ? colors[passwordStrength - 1] : 'bg-gray-700'
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl font-black bg-gradient-to-r from-purple-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent mb-2">
            ElxAcademy
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Auth card */}
        <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Join ElxAcademy</h2>
              <p className="text-gray-400">Start learning from verified toppers today</p>
            </div>

            {signupError && (
              <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{signupError}</p>
              </div>
            )}

            {signupSuccess && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm">{signupSuccess}</p>
              </div>
            )}

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              {/* Full name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    placeholder="Alexa Ansari"
                    className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition"
                  />
                </div>
              </div>

              {/* College */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">College/Institute</label>
                <div className="relative">
                  <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
                  <select
                    value={signupForm.college}
                    onChange={(e) => setSignupForm({ ...signupForm, college: e.target.value })}
                    className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-yellow-400/50 transition"
                  >
                    <option value="">Select your college</option>
                    {colleges.map((col) => (
                      <option key={col} value={col}>
                        {col}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Batch */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Batch/Year</label>
                <select
                  value={signupForm.batch}
                  onChange={(e) => setSignupForm({ ...signupForm, batch: e.target.value })}
                  className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50 transition"
                >
                  <option value="">Select batch</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={signupForm.password}
                    onChange={(e) => {
                      setSignupForm({ ...signupForm, password: e.target.value });
                      checkPasswordStrength(e.target.value);
                    }}
                    placeholder="••••••••"
                    className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <PasswordStrengthIndicator />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {signupForm.password && signupForm.confirmPassword && (
                  <p className={`text-xs mt-2 ${signupForm.password === signupForm.confirmPassword ? 'text-green-400' : 'text-red-400'}`}>
                    {signupForm.password === signupForm.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                  </p>
                )}
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-gray-400">
                <input type="checkbox" className="mt-1" required />
                <span>I agree to ElxAcademy's Terms of Service</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Login link */}
            <p className="text-center text-gray-400">
              Already have an account?{' '}
              <a href="/auth/login" className="text-yellow-400 hover:text-yellow-300 font-semibold">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
      `}</style>
    </div>
