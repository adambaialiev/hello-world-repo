# Hello World Repository

A simple Hello World program demonstrating best practices with comprehensive testing in both Python and JavaScript.

## 🚀 Features

- **Multi-language support**: Python and JavaScript implementations
- **Comprehensive testing**: Unit tests for both languages
- **CI/CD**: Automated testing with GitHub Actions
- **Test coverage**: Code coverage reporting

## 📋 Requirements

### Python
- Python 3.10 or higher
- pytest >= 7.0.0
- pytest-cov >= 4.0.0

### JavaScript
- Node.js 20.x or higher
- npm 10.x or higher
- Jest ^29.0.0

## 🔧 Installation

### Clone the repository
```bash
git clone https://github.com/adambaialiev/hello-world-repo.git
cd hello-world-repo
```

### Install Python dependencies
```bash
pip install -r requirements-dev.txt
```

### Install JavaScript dependencies
```bash
npm install
```

## 🎯 Usage

### Run Python program
```bash
python3 hello.py
# or
chmod +x hello.py
./hello.py
```

### Run JavaScript program
```bash
node hello.js
# or
chmod +x hello.js
./hello.js
```

## 🧪 Testing

### Run Python tests
```bash
# Run all tests
pytest tests/test_hello.py -v

# Run with coverage
pytest tests/test_hello.py -v --cov=hello

# Run with detailed coverage report
pytest tests/test_hello.py -v --cov=hello --cov-report=html
```

### Run JavaScript tests
```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

### Run all tests
```bash
# Python tests
pytest tests/test_hello.py -v --cov=hello

# JavaScript tests
npm test
```

## 📊 Test Coverage

Both implementations include comprehensive test suites that verify:
- ✅ Function returns a string
- ✅ Output contains "Hello"
- ✅ Output is not empty
- ✅ Exact message matches expected output

## 🔄 Continuous Integration

This repository uses GitHub Actions for automated testing. On every push and pull request:
- Python tests run with pytest
- JavaScript tests run with Jest
- Code coverage is measured
- Test results are reported

View the workflow at: `.github/workflows/tests.yml`

## 📁 Project Structure

```
hello-world-repo/
├── .github/
│   └── workflows/
│       └── tests.yml          # GitHub Actions workflow
├── tests/
│   ├── test_hello.py          # Python tests
│   └── hello.test.js          # JavaScript tests
├── hello.py                   # Python implementation
├── hello.js                   # JavaScript implementation
├── requirements-dev.txt       # Python test dependencies
├── package.json               # JavaScript configuration & dependencies
└── README.md                  # This file
```

## 🤝 Contributing

Contributions are welcome! Please ensure:
1. All tests pass before submitting
2. Add tests for new features
3. Follow existing code style
4. Update documentation as needed

## 📝 License

This is a demonstration project for educational purposes.

## 👤 Author

Adam Baialiev
- GitHub: [@adambaialiev](https://github.com/adambaialiev)
- Repository: [hello-world-repo](https://github.com/adambaialiev/hello-world-repo)

## 🎓 Learning Resources

- [pytest documentation](https://docs.pytest.org/)
- [Jest documentation](https://jestjs.io/)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
