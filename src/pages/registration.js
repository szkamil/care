'use client'

import { useState } from 'react';

export default function Registration() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, email, bio, file: preview };
    const response = await fetch('https://6647fe58.care-1dq.pages.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('Profile saved');
    } else {
      console.error('Failed to save profile');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-blue-50">
      <header className="w-full bg-pastel-red text-white py-4 flex justify-between items-center px-4 rounded-t-lg">
        <div className="text-2xl font-bold">eterna.care</div>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Upload Your Info</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-red focus:border-pastel-red"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-red focus:border-pastel-red"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-700">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pastel-red focus:border-pastel-red"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700">Profile Photo</label>
            <input type="file" id="file" onChange={handleFileChange} className="w-full" required />
          </div>
          <button
            type="submit"
            className="w-full bg-pastel-red text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pastel-red"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="w-full bg-pastel-red text-white py-4 flex justify-center items-center px-4 rounded-b-lg">
        <div className="text-sm">© 2023 eterna.care, Inc.</div>
      </footer>
    </main>
  );
}