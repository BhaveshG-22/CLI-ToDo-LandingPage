import React from 'react';
import { Terminal, Command, Check, Trash2, List, Package, ArrowLeft } from 'lucide-react';

function Documentation({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 glass glass-hover px-4 py-2 rounded-full mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              TaskMaster CLI Documentation
            </h1>
            <p className="text-gray-300 mb-6">
              A simple and efficient filesystem-based TODO manager built using Node.js.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-semibold">Features</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-cyan-400" />
                <span>Add a TODO</span>
              </li>
              <li className="flex items-center space-x-2">
                <Trash2 className="w-5 h-5 text-cyan-400" />
                <span>Delete a TODO</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-cyan-400" />
                <span>Mark a TODO as done</span>
              </li>
              <li className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-cyan-400" />
                <span>Persistent JSON storage</span>
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Installation</h2>
            <div className="terminal mb-6">
              <p>git clone https://github.com/yourusername/taskmaster-cli.git</p>
              <p>cd taskmaster-cli</p>
              <p>npm install</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Add a Task</h3>
              <div className="terminal">
                <p className="command">$ node index.js add "Finish assignment"</p>
                <p className="output">✓ Task added successfully!</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Mark as Done</h3>
              <div className="terminal">
                <p className="command">$ node index.js done 1</p>
                <p className="output">✓ Task marked as done!</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Delete a Task</h3>
              <div className="terminal">
                <p className="command">$ node index.js delete 1</p>
                <p className="output">✓ Task deleted successfully!</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Display Tasks</h3>
              <div className="terminal">
                <p className="command">$ node index.js display</p>
                <div className="output">
                  <p>1. [✓] Setup development environment</p>
                  <p>2. [ ] Complete project documentation</p>
                  <p>3. [ ] Deploy to production</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Project Structure</h2>
            <div className="terminal font-mono text-sm">
              <p>📦 taskmaster-cli</p>
              <p className="ml-4">┣ 📂 helpers/</p>
              <p className="ml-8">┣ 📜 display.js</p>
              <p className="ml-8">┣ 📜 taskManager.js</p>
              <p className="ml-8">┗ 📜 getSize.js</p>
              <p className="ml-4">┣ 📜 index.js</p>
              <p className="ml-4">┣ 📜 package.json</p>
              <p className="ml-4">┣ 📜 todos.json</p>
              <p className="ml-4">┗ 📜 README.md</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;