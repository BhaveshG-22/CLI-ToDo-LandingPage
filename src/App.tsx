import React from 'react';
import { Terminal, Github, ArrowRight, Command, Check, Trash2, List, Package, Plus } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold">TaskMaster CLI</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="glass glass-hover px-4 py-2 rounded-full">Documentation</a>
            <a href="#" className="glass glass-hover px-4 py-2 rounded-full">GitHub</a>
          </div>
        </nav>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Command Line Task Management
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            A powerful, filesystem-based TODO manager built with Node.js. 
            Simple, efficient, and beautiful CLI interface.
          </p>
          <div className="flex space-x-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass glass-hover px-8 py-3 rounded-full font-semibold">
              View on GitHub
            </button>
          </div>

          <div className="mt-12 w-full max-w-2xl terminal">
            <p className="command">$ node index.js add "Complete project documentation"</p>
            <p className="output mt-2">✓ Task added successfully!</p>
            <p className="command mt-4">$ node index.js display</p>
            <div className="output mt-2">
              <p>1. [✓] Setup development environment</p>
              <p>2. [ ] Complete project documentation</p>
              <p>3. [ ] Deploy to production</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8 glass-hover">
            <Command className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Simple Commands</h3>
            <p className="text-gray-300">
              Intuitive command-line interface with add, delete, and mark-as-done functionality.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 glass-hover">
            <Package className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">JSON Storage</h3>
            <p className="text-gray-300">
              Persistent storage using JSON files, ensuring your tasks are always saved.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 glass-hover">
            <List className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Beautiful Output</h3>
            <p className="text-gray-300">
              Styled terminal output with Chalk for better readability and user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Start Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Command className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold">Installation</h3>
              </div>
              <div className="terminal text-sm">
                <p>npm install -g taskmaster-cli</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Plus className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold">Add Task</h3>
              </div>
              <div className="terminal text-sm">
                <p>task add "New task"</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Check className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold">Complete Task</h3>
              </div>
              <div className="terminal text-sm">
                <p>task done 1</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Trash2 className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold">Delete Task</h3>
              </div>
              <div className="terminal text-sm">
                <p>task delete 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20">
        <div className="glass rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="font-semibold">TaskMaster CLI</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;