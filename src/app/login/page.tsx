'use client';

import { Suspense, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') ?? '/';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, from: decodeURIComponent(from) }),
    });

    if (res.ok) {
      const { redirect } = await res.json() as { redirect: string };
      router.push(redirect);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        ref={inputRef}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        autoFocus
        className="w-full px-4 py-3 rounded-xl bg-[#0F1B2D] border border-[#1E3A5F] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F97316]/60 transition-colors"
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
      <button
        type="submit"
        disabled={loading || !password}
        className="w-full py-3 rounded-xl bg-[#F97316] text-white font-semibold text-sm hover:bg-[#F97316]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Checking…' : 'Enter'}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0F1B2D] flex items-center justify-center px-4">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/6 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F97316]/6 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm">
        <div className="flex justify-center mb-10">
          <Image
            src="/images/logo-white.png"
            alt="Theoremlabs"
            width={200}
            height={54}
            className="object-contain"
            priority
          />
        </div>

        <div className="bg-[#1A2B45] border border-[#1E3A5F] rounded-2xl p-8">
          <h1 className="text-white font-semibold text-xl mb-1">Private Preview</h1>
          <p className="text-slate-400 text-sm mb-7">Enter the access password to continue.</p>
          <Suspense fallback={<div className="h-24" />}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">theoremlabs.io · Private</p>
      </div>
    </div>
  );
}
