# BotResponz - WhatsApp Business AI Assistant

BotResponz is a modern web application that integrates with the WhatsApp Business API to provide intelligent messaging automation and analytics tools. Built with React, Firebase, and Tailwind CSS, it offers a powerful solution for businesses to streamline their WhatsApp communication.

![BotResponz Screenshot](public/screenshot.png)

## 🚀 Features

- **AI-Powered Responses**: Automated, context-aware message handling
- **Multi-Account Support**: Manage multiple WhatsApp Business accounts
- **Analytics Dashboard**: Track performance metrics and engagement
- **Custom Templates**: Create and manage response templates
- **Real-time Monitoring**: Live chat monitoring and analytics
- **User Management**: Role-based access control with admin capabilities

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting
- **State Management**: React Hooks
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/botresponz.git
cd botresponz
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Run the development server:
```bash
npm run dev
```

## 🚀 Deployment

The project is automatically deployed to Firebase Hosting through GitHub Actions on push to the main branch.

Manual deployment:
```bash
npm run build
firebase deploy
```

## 🔑 Authentication

- Email/Password authentication
- Google Sign-in
- Role-based access control (Admin/User)

## 💻 Development

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes:
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch:
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Firebase Hosting

## 🔒 Security

- Firebase Authentication
- Firestore Security Rules
- Protected API endpoints
- Role-based access control

## 🎨 Features in Detail

### User Dashboard
- Message analytics
- Account management
- Response template configuration
- Real-time chat monitoring

### Admin Panel
- User management
- System analytics
- Configuration settings
- Access control

### WhatsApp Integration
- Business API connection
- Automated responses
- Message scheduling
- Multi-account management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@botresponz.com or join our Slack channel.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 🔄 Updates

Stay tuned for updates by watching this repository and following our [blog](https://botresponz.com/blog).

---

Built with ❤️ by [Your Name/Company]
