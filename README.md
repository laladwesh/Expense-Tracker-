# Expense Tracker

A modern, responsive expense tracking application built with React that helps users manage their personal finances by tracking income and expenses with visual analytics.

## 🚀 Features

### Core Functionality
- **Add Transactions**: Record income and expense transactions with amount, category, and date
- **Visual Analytics**: Interactive doughnut charts showing spending/income breakdown by category
- **Real-time Balance**: Live balance calculation based on all transactions  
- **Transaction History**: View all transactions with ability to delete entries
- **Categorized Tracking**: Pre-defined categories for both income and expenses

### Income Categories
- Business, Investments, Extra income, Deposits, Lottery, Gifts, Salary, Savings, Rental income

### Expense Categories  
- Bills, Car, Clothes, Travel, Food, Shopping, House, Entertainment, Phone, Pets, Other

### User Interface
- **Modern Design**: Clean, intuitive interface using Material-UI components
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Interactive Charts**: Color-coded visual representations of financial data
- **Easy Navigation**: Simple form-based transaction entry

## 🛠️ Technologies Used

- **Frontend**: React 18.3.1
- **UI Framework**: Material-UI 4.12.4
- **Charts**: Chart.js 4.4.3 with react-chartjs-2 5.2.0
- **State Management**: React Context API
- **Styling**: Material-UI theming system
- **Icons**: Material-UI Icons
- **Unique IDs**: UUID library for transaction identification

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/laladwesh/Expense-Tracker-.git
   cd Expense-Tracker-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🎯 Usage

### Adding a Transaction
1. Select transaction type (Income or Expense)
2. Choose a category from the dropdown
3. Enter the amount
4. Select or confirm the date
5. Click "Create" to add the transaction

### Viewing Analytics
- The right panel shows doughnut charts for both Income and Expenses
- Charts automatically update when transactions are added
- Colors represent different categories
- Total amounts are displayed at the top of each chart

### Managing Transactions
- All transactions appear in the main panel
- Click the delete button (trash icon) to remove a transaction
- Balance updates automatically when transactions are modified

## 📁 Project Structure

```
src/
├── components/
│   ├── Main/
│   │   ├── Main.jsx           # Main dashboard component
│   │   ├── Form/              
│   │   │   └── Form.jsx       # Transaction input form
│   │   └── list/
│   │       └── List.jsx       # Transaction history list
│   └── Details/
│       └── Details.jsx        # Analytics charts component
├── context/
│   ├── context.js             # React Context for state management
│   └── contextReducer.js      # Reducer for transaction operations
├── constants/
│   └── categories.js          # Pre-defined income/expense categories
├── utils/
│   └── formatDate.js          # Date formatting utility
├── useTransaction.js          # Custom hook for transaction analytics
├── App.js                     # Main app component
└── style.js                   # Global styles
```

## 🔧 Available Scripts

- **`npm start`**: Runs the app in development mode on `http://localhost:3000`
- **`npm test`**: Launches the test runner in interactive watch mode
- **`npm run build`**: Builds the app for production to the `build` folder
- **`npm run eject`**: Ejects from Create React App (irreversible)

## 🎨 Key Components

### Main Component
- Displays current balance
- Houses the transaction form and transaction list
- Provides navigation and main layout

### Form Component  
- Handles transaction input with validation
- Dynamic category selection based on transaction type
- Date picker with current date default

### List Component
- Shows all transactions in chronological order
- Delete functionality for each transaction
- Clean, card-based layout with icons

### Details Component
- Renders interactive doughnut charts
- Separates income and expense analytics
- Real-time data updates

## 💡 Future Enhancements

- **Data Persistence**: Local storage or database integration
- **Export Features**: PDF reports and CSV export
- **Budget Goals**: Set and track spending limits
- **Monthly Views**: Calendar-based transaction viewing
- **Search & Filter**: Advanced transaction filtering options
- **Multiple Accounts**: Support for different bank accounts
- **Receipt Upload**: Image attachment for transactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Laladwesh**
- GitHub: [@laladwesh](https://github.com/laladwesh)

**UmamAli**
- GitHub : [@umam-ali](https://github.com/umam-ali)
## 🙏 Acknowledgments

- Built with Create React App.
- Material-UI for the component library
- Chart.js for data visualization
- React community for excellent documentation and support

---

**Note**: This application stores data in memory only. Refreshing the page will reset all transactions. Consider implementing local storage or a backend database for data persistence in production use.
