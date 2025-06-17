# TaskMaster CLI

A powerful, filesystem-based TODO manager built with Node.js. Simple, efficient, and beautiful CLI interface for managing your tasks.

![TaskMaster CLI](https://img.shields.io/badge/TaskMaster-CLI-cyan)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **Simple Commands**: Intuitive command-line interface with add, delete, and mark-as-done functionality
- **JSON Storage**: Persistent storage using JSON files, ensuring your tasks are always saved
- **Beautiful Output**: Styled terminal output with Chalk for better readability and user experience
- **Fast & Lightweight**: Built with pure Node.js for optimal performance
- **Cross-Platform**: Works on Windows, macOS, and Linux

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/BhaveshG-22/CLI-Todo
cd CLI-Todo
npm install
```

### Basic Usage

```bash
# Add a new task
node index.js add "Complete assignment"

# Display all tasks
node index.js display

# Mark a task as done
node index.js done 1

# Delete a task
node index.js delete 1
```

## 📖 Command Reference

| Command | Description | Example |
|---------|-------------|---------|
| `add "<task>"` | Add a new task | `node index.js add "Buy groceries"` |
| `display` | Show all tasks | `node index.js display` |
| `done <id>` | Mark task as completed | `node index.js done 1` |
| `delete <id>` | Remove a task | `node index.js delete 2` |

## 📁 Project Structure

```
📦 taskmaster-cli
┣ 📂 helpers/
┃ ┣ 📜 display.js       # Task display formatting
┃ ┣ 📜 taskManager.js   # Core task operations
┃ ┗ 📜 getSize.js       # Helper utilities
┣ 📂 src/               # Web interface source
┃ ┣ 📂 components/
┃ ┃ ┗ 📜 Documentation.tsx
┃ ┣ 📜 App.tsx
┃ ┣ 📜 main.tsx
┃ ┗ 📜 index.css
┣ 📜 index.js           # Main CLI entry point
┣ 📜 package.json
┣ 📜 todos.json         # Task storage file
┗ 📜 README.md
```

## 🖥️ Web Interface

TaskMaster CLI also includes a beautiful web interface built with React and Tailwind CSS. 

### Running the Web Interface

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The web interface provides:
- Interactive documentation
- Command examples with live previews
- Beautiful glass-morphism design
- Responsive layout for all devices

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/BhaveshG-22/CLI-Todo

# Install dependencies
cd CLI-Todo
npm install

# Start CLI development
node index.js

# Start web interface development
npm run dev
```

### Scripts

```bash
npm run dev        # Start Vite development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 📝 Example Usage

```bash
$ node index.js add "Setup development environment"
✓ Task added successfully!

$ node index.js add "Complete project documentation"
✓ Task added successfully!

$ node index.js display
1. [ ] Setup development environment
2. [ ] Complete project documentation

$ node index.js done 1
✓ Task marked as done!

$ node index.js display
1. [✓] Setup development environment
2. [ ] Complete project documentation

$ node index.js delete 2
✓ Task deleted successfully!
```

## 🎨 Technologies Used

- **Backend**: Node.js, File System API
- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tools**: Vite, ESLint
- **Storage**: JSON files

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/BhaveshG-22/CLI-Todo)
- [Live Demo](https://cli-todo-landing-page.vercel.app/)

## 👨‍💻 Author

**Bhavesh Gavali**

- GitHub: [@BhaveshG-22](https://github.com/BhaveshG-22)

---

⭐ Don't forget to star this repository if you found it helpful!