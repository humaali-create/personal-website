# Week 2 Technical Assessment – AI Conversation Log

## Project Goal

Build a simple unit converter that converts:

- Kilometers → Miles
- Miles → Kilometers

Requirements:

- User enters a number.
- User selects the conversion direction.
- Display the converted result clearly.
- Build using HTML + CSS + JavaScript.

---

## Prompt 1

**Me:**

> I will start User entering the number

**AI:**

It seems like you're starting to describe a process where the user enters a number.

---

## Prompt 2

**Me:**

> the user wants to convert from km to miles.

**AI:**

Use the formula:

```text
Miles = Kilometers × 0.621371
```

Example:

```text
10 km = 6.21 miles
```

Python example:

```python
km = float(input("Enter distance in kilometers: "))
miles = km * 0.621371
print(f"{km} km = {miles:.2f} miles")
```

---

## Prompt 3

**Me:**

> and miles to km

**AI:**

Added both conversion directions.

Formulas:

```text
Miles = Kilometers × 0.621371

Kilometers = Miles × 1.60934
```

---

## Prompt 4

**Me:**

> After that I want to have a button for convert. and the display the result.

**AI:**

Suggested creating a Tkinter GUI with:

- Convert button
- Input field
- Result label

---

## Prompt 5

**Me:**

> I want the switching box for miles to km and km to miles. I want the convert button in red color. and add a clear button to reset.

**AI:**

Updated the GUI by adding:

- Dropdown (KM ↔ Miles)
- Red Convert button
- Blue Clear button
- Reset functionality

---

## Prompt 6

**Me:**

> I want to have the background in black. I want it look like a calculator.

**AI:**

Updated the interface with:

- Black background
- Calculator-style layout
- Green display
- Calculator keypad
- Red Convert button
- Clear button

---

## Prompt 7

**Me:**

> yes add sound when click.

**AI:**

Added sound effects for:

- Number buttons
- Convert
- Clear
- Error

---

## Prompt 8

**Me:**

> convert it js and separate files. my folder structure is:
>
> week2-practice/
>
> index.html
>
> style.css
>
> script.js

**AI:**

Converted the application into a web version using:

- HTML
- CSS
- JavaScript

Project structure:

```text
week2-practice/
│
├── index.html
├── style.css
└── script.js
```

Features included:

- Black calculator-style UI
- Green display screen
- Number keypad
- Backspace button
- Dropdown for conversion direction
- Red Convert button
- Clear button
- Sound effects using the Web Audio API
- Hover and click animations
- Separate HTML, CSS, and JavaScript files

---

## Final Deliverables

Files submitted:

- `index.html`
- `style.css`
- `script.js`

Optional:

- GitHub repository (if available)
- Deployed web app (if available)