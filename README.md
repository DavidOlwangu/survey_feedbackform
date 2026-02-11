# 🛍️ Luxury Brand Product Survey Web App

A lightweight, interactive feedback collection tool designed for luxury brand customers.  
This application allows users to input their professional details and product feedback, and displays a summary immediately after submission—without refreshing the page.

---

## 🚀 Features

- **Dynamic Data Handling** – Captures user input using JavaScript and updates the DOM in real time.  
- **Immediate Feedback** – Displays a summary of the submitted information directly below the form once the user clicks **Submit**.  
- **User Confirmation** – Shows a personalized browser alert to confirm a successful submission.  
- **Form Auto-Clear** – Automatically clears all input fields after submission, preparing the form for a new entry.  
- **Keyboard Accessibility** – Supports submission using the **Enter** key for a faster and more accessible experience.

---

## 🛠️ Technologies Used

- **HTML5** – Provides the structure of the survey and semantic elements such as `fieldset` and `label`.
- **JavaScript (ES6)** – Handles data capture, DOM manipulation, and event handling.

---

## 📂 File Structure

```

.
├── index.html
└── survey.js

```

---

## 📖 How It Works

- **Data Collection**  
  When the `submitFeedback()` function is triggered, it collects values from all input fields (name, email, age, job, designation, product type, and feedback).

- **Summary Display**  
  The script updates specific `<span>` elements inside the hidden `userInfo` container with the collected values.

- **Visual Reveal**  
  The `userInfo` section is made visible by changing its CSS `display` property from `none` to `block`.

- **Cleaning Up**  
  All form fields are reset to empty values so the interface is ready for the next user.

---

## ⚙️ How to Run

1. Clone or download the project files.
2. Ensure `index.html` and `survey.js` are located in the same folder.
3. Open `index.html` in any modern web browser.
4. Fill in the form and click **Submit Feedback** or press **Enter**.

---

## 📝 Future Improvements

- Add CSS styling for a luxury look and feel (gold and black theme).
- Add email validation to ensure a valid email format.
- Add a **Print Summary** button so users can save or print their submitted feedback.

---

## 📄 License

This project is open for learning and educational purposes.  
You are free to use, modify, and distribute it for non-commercial or personal projects.

---

## 👨‍💻 Author

**David Olwangu**  
Software Development Student
```
