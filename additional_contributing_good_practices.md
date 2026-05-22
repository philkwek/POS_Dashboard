# Additional Contributing Good Practices

---

## 1. The Imperative Mood (The Golden Rule)

Always write your commit subject line in the **imperative mood** (e.g., spoken or written as a command).

* **Bad:** `Fixed the broken button` or `Fixes the broken button`
* **Good:** `Fix the broken button`

> [!TIP]
> A foolproof trick to test your subject line is to complete this sentence:
> *"If applied, this commit will **[your commit message here]**."*
> * *If applied, this commit will **fixed the checkout bug**.* (Grammatically incorrect)
> * *If applied, this commit will **fix the checkout bug**.* (Perfect)

---

## 2. Conventional Commits Specification

For modern full-stack development, the **Conventional Commits** standard is the gold standard. It provides a lightweight structure for creating an explicit commit history.

The format follows this pattern:

```text
type(scope): description

[optional body]

[optional footer(s)]
```

### Common Git Types:

* `feat`: A new feature for the user (e.g., `feat(cart): add variant selector to checkout`)
* `fix`: A bug fix (e.g., `fix(auth): resolve session timeout loop`)
* `docs`: Documentation changes only (`docs: update readme deployment steps`)
* `style`: Formatting, missing semi-colons, etc.; no production code change (`style: run prettier on storage rules`)
* `refactor`: A code change that neither fixes a bug nor adds a feature (`refactor: optimize array filtering in useCart`)
* `test`: Adding missing tests or correcting existing tests (`test: add edge-case units for transaction logic`)
* `chore`: Updating build tasks, package manager dependencies, etc. (`chore: bump lodash version`)

---

## 3. The "50/72" Formatting Rule

To keep your terminal logs readable, adhere to strict spacing constraints:

* **The Subject Line (50 characters):** Keep the first line under 50 characters. It should be punchy and specific. Capitalize the first letter, and **do not** end it with a period.
* **The Blank Line:** Always leave a completely blank line between the subject and the body. Without this, Git strings them together into a single dense wall of text.
* **The Body (72 characters):** Wrap lines in the body at 72 characters. Use the body to explain the context if the change is complex.

---

## 4. Focus on the *Why*, Not the *How*

The source code itself tells a developer *how* a change was implemented. Your commit message should explain **what** changed and **why** you did it.

```text
feat(pos): add local storage synchronization to useCartStore

Zustand cart state was completely volatile and would reset upon a browser
refresh. This introduces the persist middleware to ensure data resiliency
for users during high-traffic fundraising sales.
```

---

## Summary Checklist for Your Workflow

* [ ] **Punchy?** Is the subject line under 50 characters?
* [ ] **Imperative?** Does it use a command verb (e.g., `add`, `fix`, `remove`, `update`)?
* [ ] **Structured?** Does it match a conventional type like `feat:` or `fix:`?
* [ ] **Clean?** Did you leave a blank line before dropping into the detailed description?
