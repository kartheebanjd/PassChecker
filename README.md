# 🔐 PassChecker

A modern, privacy-first password strength checker built with Flask. Real-time validation with a clean, intuitive interface.

## ✨ Features

- **Real-time Password Analysis** - Instant feedback on password strength with detailed scoring (0-100)
- **Security Metrics** - Entropy calculation and estimated time-to-crack analysis
- **Smart Tips** - Actionable recommendations to improve password security
- **Common Password Detection** - Warns against 10,000+ commonly used passwords
- **Privacy-Focused** - Passwords are processed client-side and never stored or logged
- **Security Headers** - Comprehensive CSP, HSTS, and CORS protections
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛡️ Security Highlights

- **Zero Data Retention** - No passwords are stored, logged, or transmitted to external services
- **Client-Side Processing** - All analysis happens locally in your browser
- **Industry Best Practices** - Implements OWASP security standards
- **Production-Ready** - Deployed on Vercel with enterprise-grade security headers
- **Rate Limiting** - Built-in protection against brute force attacks

## 🚀 Quick Start

### Installation
```bash
git clone https://github.com/yourusername/PassChecker.git
cd PassChecker
pip install -r requirements.txt
```

### Running Locally
```bash
python app.py
```
Visit `http://localhost:5000` in your browser.

## 📋 Requirements

- Python 3.8+
- Flask
- See `requirements.txt` for all dependencies

## 🏗️ Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Hosting**: Vercel
- **Security**: CSP, HSTS, X-Frame-Options, Strict-Transport-Security

## 📊 Algorithm Details

The password strength algorithm evaluates:
- **Character Set Diversity** - Lowercase, uppercase, numbers, special characters
- **Length Analysis** - Exponential scoring based on password length
- **Pattern Detection** - Identifies sequential, repeated, and keyboard patterns
- **Entropy Calculation** - Information-theoretic approach to randomness
- **Dictionary Checks** - Cross-references against common password lists

## 🔍 Strength Levels

- **Very Weak** (0-20) - Easily cracked
- **Weak** (21-40) - Basic security
- **Moderate** (41-60) - Good for most purposes
- **Strong** (61-80) - High security
- **Very Strong** (81-100) - Enterprise-grade

## 📝 Example Usage

1. Enter any password
2. Get instant strength score and recommendations
3. Common passwords trigger a security warning
4. Time-to-crack estimate helps contextualize security

## 🌐 Deployment

Deployed on Vercel for optimal performance and security:
- Auto-scaling infrastructure
- Edge network distribution
- Free HTTPS/SSL
- Continuous deployment from GitHub

## 📄 License

Open source - available for personal and commercial use.

## 🤝 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

---

**Built with security and user privacy in mind.** 🔒