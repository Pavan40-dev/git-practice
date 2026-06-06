# Playwright E-Commerce Automation Framework

## Overview

This project is an end-to-end UI automation framework developed using **Playwright with TypeScript/JavaScript** for an E-Commerce web application. The framework automates critical user journeys from authentication to order placement and order verification, ensuring application quality, reliability, and faster release cycles.

The framework follows the **Page Object Model (POM)** design pattern and is structured based on a **Microservices Architecture**, making it scalable, maintainable, and easy to extend.

---

## Business Flow Covered

The automation suite validates the complete customer journey:

1. User Login / Authentication
2. Dashboard Validation
3. Product Search & Product Selection
4. Add Products to Cart
5. Cart Validation
6. Checkout Process
7. Order Placement
8. Order Confirmation
9. Order History Validation
10. User Sign Out

---

## Framework Features

* Playwright with TypeScript/JavaScript
* Page Object Model (POM) Design Pattern
* Microservice-Based Module Structure
* Cross-Browser Testing
* Smoke, Sanity, Regression & End-to-End Suites
* Tag-Based Test Execution
* GitHub Actions CI/CD Integration
* Playwright HTML Reports
* Allure Reports
* Trace Viewer Support
* Screenshots & Video Recording
* Parallel Test Execution
* API Validation using Postman

---

## Project Structure

```text
project-root/
│
├── tests/
│   ├── auth/
│   ├── dashboard/
│   ├── cart/
│   ├── checkout/
│   ├── orders/
│   └── signout/
│
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── OrdersPage.ts
│
├── utils/
├── test-data/
├── allure-results/
├── allure-report/
├── playwright-report/
├── playwright.config.ts
└── package.json
```

---

## Tech Stack

* Playwright
* TypeScript
* JavaScript
* Postman
* GitHub Actions
* Allure Reports
* HTML Reports
* Jira
* REST APIs

---

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests on a specific browser:

```bash
npx playwright test --project=chromium
```

---

## Tag-Based Execution

Run Smoke Tests:

```bash
npx playwright test --grep "@smoke"
```

Run Sanity Tests:

```bash
npx playwright test --grep "@sanity"
```

Run Regression Tests:

```bash
npx playwright test --grep "@regression"
```

---

## Reports

Generate Playwright HTML Report:

```bash
npx playwright show-report
```

Generate Allure Report:

```bash
allure generate allure-results --clean
allure open
```

---

## Debugging Support

The framework is configured to capture:

* Playwright Traces
* Screenshots
* Videos
* Execution Logs

Open Trace Viewer:

```bash
npx playwright show-trace trace.zip
```

---

## CI/CD Integration

The framework is integrated with **GitHub Actions** for automated test execution.

Pipeline Features:

* Automated execution on Pull Requests
* Smoke/Sanity/Regression execution
* Report generation
* Continuous quality validation

---

## Test Coverage

The automation suite covers:

* Authentication
* Product Catalog
* Cart Management
* Checkout
* Order Management
* User Session Management

---

## Author

**Lokesh Avula**

QA Automation Engineer

Specializations:

* Playwright Automation
* API Testing
* CI/CD Automation
* Azure Playwright Testing
* Test Framework Development
