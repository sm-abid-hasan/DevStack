# 🚀 Dev Stack

A clean and interactive technology stack builder for developers.  
Explore different frontend, backend, database, and tooling technologies, compare their details, and build your own development stack.

## ✨ Features

- 🔍 **Explore Technologies** — Browse technologies with their category, difficulty level, rating, badge, icon, and description.
- 🧩 **Build Your Stack** — Add technologies to your personal stack, prevent duplicate selections, remove individual technologies, or remove everything at once.
- 🔔 **Interactive UI Feedback** — Get toast notifications when technologies are added or removed, with loading feedback while technology data is being fetched.

## 🛠️ Technologies Used

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Icons**
- **React Toastify**
- **JSON**

## 📖 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the UI should look like, which makes components easier to read and build.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only inside the child.

**State** is data managed by a component itself. When state changes, React updates the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates and manages state inside a React component.

I used it in `ExploreTheTechnologies.tsx` to store the technologies selected in the user's stack:

```tsx
const [stack, setStack] = useState<IExploreTheTechnologies[]>([]);
```

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run side effects after a component renders, such as API requests, subscriptions, or updating something outside React.

I **did not use `useEffect` in this project** to load the JSON data. Instead, I created a fetch promise in `main.tsx` and used React's `use()` hook inside `ExploreTheTechnologies.tsx`, together with `Suspense`, to read the promise and show a loading state while the data was being fetched.

```tsx
const usersPromise = usersFetch();
```

and:

```tsx
const data = use(usersPromise);
```

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React understand which items were added, removed, or changed and update the UI efficiently.

In this project, I used the technology's `id`:

```tsx
{data.map((technology) => (
    <div key={technology.id}>
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty-stack message when no technology has been selected:

```tsx
{stack.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    // Show selected technologies
)}
```

If the stack is empty, the message is shown. Otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

For example, in this project, `main.tsx` passes `usersPromise` to `ExploreTheTechnologies`:

```tsx
<ExploreTheTechnologies usersPromise={usersPromise} />
```

A child can send something back to a parent by calling a **callback function** that the parent passes as a prop.

For example:

```tsx
<Child onAdd={handleAdd} />
```

Then the child can call:

```tsx
onAdd(data);
```

This allows the child to communicate an event or data back to the parent.

---

