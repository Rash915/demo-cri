import { useState } from 'react';
import { CloseIcon, UserIcon, MailIcon, LockIcon, PhoneIcon, EyeIcon, EyeOffIcon, CheckIcon, ShieldIcon } from './icons';

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  accountType: 'individual' | 'dealer' | 'industrial';
  memberSince?: string;
}

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
}

const DEMO_USERS: (UserProfile & { label: string; icon: string; subtitle: string })[] = [
  {
    label: 'Ramesh Kumar',
    icon: '👨‍🌾',
    subtitle: 'Agricultural / Domestic Buyer',
    name: 'Ramesh Kumar',
    email: 'ramesh.farmer@gmail.com',
    phone: '+91 98765 43210',
    accountType: 'individual',
    memberSince: '2024'
  },
  {
    label: 'Sri Lakshmi Agri Store',
    icon: '🏬',
    subtitle: 'Authorized C.R.I. Dealer',
    name: 'Sri Lakshmi Agri Store',
    email: 'dealer.coimbatore@cripumps.com',
    phone: '+91 94432 10987',
    accountType: 'dealer',
    memberSince: '2021'
  },
  {
    label: 'Kaveri Industrial Works',
    icon: '🏭',
    subtitle: 'Industrial / Commercial Client',
    name: 'Kaveri Industrial Works',
    email: 'procurement@kaveriworks.in',
    phone: '+91 98401 23456',
    accountType: 'industrial',
    memberSince: '2022'
  }
];

export default function AuthModal({ isOpen, initialMode = 'login', onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  
  // Login Form States
  const [loginInput, setLoginInput] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Signup Form States
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupAccountType, setSignupAccountType] = useState<'individual' | 'dealer' | 'industrial'>('individual');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  // UI state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [forgotSent, setForgotSent] = useState(false);

  if (!isOpen) return null;

  const handleDemoLogin = (demo: typeof DEMO_USERS[0]) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        name: demo.name,
        email: demo.email,
        phone: demo.phone,
        accountType: demo.accountType,
        memberSince: demo.memberSince
      });
      onClose();
    }, 600);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!loginInput.trim()) {
      setErrorMsg('Please enter your Email or Mobile Number');
      return;
    }

    if (loginMethod === 'password' && !loginPassword) {
      setErrorMsg('Please enter your password');
      return;
    }

    if (loginMethod === 'otp' && !otpSent) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOtpSent(true);
      }, 700);
      return;
    }

    if (loginMethod === 'otp' && otpSent && otpCode.length < 4) {
      setErrorMsg('Please enter the 4-digit OTP sent to your phone');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Construct profile from input or fallback name
      const formattedName = loginInput.includes('@') 
        ? loginInput.split('@')[0].replace('.', ' ')
        : 'C.R.I. Valued Customer';

      onSuccess({
        name: formattedName.charAt(0).toUpperCase() + formattedName.slice(1),
        email: loginInput.includes('@') ? loginInput : `${loginInput}@user.com`,
        phone: loginInput.match(/^\d+$/) ? `+91 ${loginInput}` : '+91 98765 43210',
        accountType: 'individual',
        memberSince: '2026'
      });
      onClose();
    }, 800);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!signupName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!signupEmail.trim() || !signupEmail.includes('@')) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    if (!signupPhone.trim()) {
      setErrorMsg('Please enter your mobile number');
      return;
    }
    if (!signupPassword || signupPassword.length < 6) {
      setErrorMsg('Password must be at least 6 characters long');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setErrorMsg('Please accept the Terms & Conditions');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        name: signupName,
        email: signupEmail,
        phone: signupPhone.startsWith('+91') ? signupPhone : `+91 ${signupPhone}`,
        accountType: signupAccountType,
        memberSince: '2026'
      });
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Gradient Banner & Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white p-6 relative">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <CloseIcon size={18} />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/15 p-2.5 rounded-xl backdrop-blur-md">
              <ShieldIcon size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Welcome to C.R.I. Pumps</h2>
              <p className="text-xs text-blue-200">Official Direct Customer & Dealer Portal</p>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex bg-blue-950/50 p-1 rounded-xl mt-5 border border-white/10">
            <button
              onClick={() => { setMode('login'); setErrorMsg(null); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'login' 
                  ? 'bg-amber-400 text-gray-900 shadow-md' 
                  : 'text-blue-100 hover:text-white hover:bg-white/5'
              }`}
            >
              Sign In to Account
            </button>
            <button
              onClick={() => { setMode('signup'); setErrorMsg(null); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                mode === 'signup' 
                  ? 'bg-amber-400 text-gray-900 shadow-md' 
                  : 'text-blue-100 hover:text-white hover:bg-white/5'
              }`}
            >
              Create New Account
            </button>
          </div>
        </div>

        <div className="p-6">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-medium flex items-center gap-2">
              <span className="text-red-500 text-base">⚠️</span>
              {errorMsg}
            </div>
          )}

          {forgotSent && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium flex items-center justify-between">
              <span>Password reset link sent to your registered contact!</span>
              <button onClick={() => setForgotSent(false)} className="text-emerald-900 font-bold underline">Dismiss</button>
            </div>
          )}

          {/* Quick Demo Login Bar */}
          <div className="mb-5 bg-gradient-to-r from-blue-50 via-sky-50 to-amber-50/40 p-3 rounded-xl border border-blue-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1">
                <span>⚡</span> Quick Demo Login (Instant Access)
              </span>
              <span className="text-[10px] text-gray-500 font-medium">Select persona</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {DEMO_USERS.map((demo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDemoLogin(demo)}
                  disabled={loading}
                  className="flex flex-col items-center justify-center p-2 bg-white hover:bg-blue-600 hover:text-white border border-gray-200 rounded-lg text-left transition-all group shadow-2xs hover:shadow-md"
                >
                  <span className="text-lg mb-0.5 group-hover:scale-110 transition-transform">{demo.icon}</span>
                  <span className="text-[10px] font-bold text-gray-800 group-hover:text-white text-center line-clamp-1">
                    {demo.label}
                  </span>
                  <span className="text-[9px] text-gray-500 group-hover:text-blue-100 text-center line-clamp-1">
                    {demo.accountType === 'dealer' ? 'Dealer' : demo.accountType === 'industrial' ? 'Industrial' : 'Buyer'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex py-1 items-center mb-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-3 text-gray-400 text-[11px] uppercase font-semibold">
              Or enter details manually
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* LOGIN MODE FORM */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Login Method Toggle */}
              <div className="flex justify-end gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => { setLoginMethod('password'); setOtpSent(false); }}
                  className={`font-medium ${loginMethod === 'password' ? 'text-blue-700 underline font-bold' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  Use Password
                </button>
                <span className="text-gray-300">|</span>
                <button
                  type="button"
                  onClick={() => { setLoginMethod('otp'); setOtpSent(false); }}
                  className={`font-medium ${loginMethod === 'otp' ? 'text-blue-700 underline font-bold' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  Use Mobile OTP
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address or 10-Digit Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <UserIcon size={16} />
                  </div>
                  <input
                    type="text"
                    value={loginInput}
                    onChange={e => setLoginInput(e.target.value)}
                    placeholder="e.g. 9876543210 or ramesh@gmail.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>
              </div>

              {loginMethod === 'password' ? (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-semibold text-gray-700">Password</label>
                    <button
                      type="button"
                      onClick={() => setForgotSent(true)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <LockIcon size={16} />
                    </div>
                    <input
                      type={showLoginPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-9 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showLoginPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                    </button>
                  </div>
                </div>
              ) : (
                otpSent && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Enter 4-Digit OTP Code
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={4}
                        value={otpCode}
                        onChange={e => setOtpCode(e.target.value)}
                        placeholder="1 2 3 4"
                        className="w-full tracking-widest text-center py-2.5 bg-blue-50/50 border border-blue-300 rounded-xl text-sm font-bold text-blue-900 focus:bg-white focus:border-blue-600 outline-none"
                      />
                    </div>
                    <p className="text-[10px] text-emerald-600 mt-1 flex items-center gap-1">
                      <CheckIcon size={12} /> OTP code sent to your registered mobile number
                    </p>
                  </div>
                )
              )}

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <span>Remember my login session</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-700 to-sky-700 hover:from-blue-800 hover:to-sky-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  loginMethod === 'otp' && !otpSent ? 'Send OTP Code' : 'Sign In Now'
                )}
              </button>
            </form>
          )}

          {/* SIGNUP MODE FORM */}
          {mode === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <UserIcon size={16} />
                  </div>
                  <input
                    type="text"
                    value={signupName}
                    onChange={e => setSignupName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <MailIcon size={16} />
                    </div>
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={e => setSignupEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number (+91)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <PhoneIcon size={16} />
                    </div>
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={e => setSignupPhone(e.target.value)}
                      placeholder="9876543210"
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>



              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Create Password</label>
                  <div className="relative">
                    <input
                      type={showSignupPassword ? 'text' : 'password'}
                      value={signupPassword}
                      onChange={e => setSignupPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPassword(!showSignupPassword)}
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400"
                    >
                      {showSignupPassword ? <EyeOffIcon size={14} /> : <EyeIcon size={14} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type={showSignupPassword ? 'text' : 'password'}
                    value={signupConfirmPassword}
                    onChange={e => setSignupConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer text-gray-600 text-[11px]">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                  />
                  <span>
                    I agree to C.R.I. Pumps <a href="#terms" className="text-blue-600 underline">Terms of Service</a> & <a href="#privacy" className="text-blue-600 underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Create C.R.I. Account'
                )}
              </button>
            </form>
          )}

          <p className="text-[10px] text-gray-400 text-center mt-5">
            🛡️ 256-Bit SSL Encrypted & Genuine C.R.I. Pumps Direct Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
