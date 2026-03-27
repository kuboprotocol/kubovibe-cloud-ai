# Advanced Prompt System Documentation

## Credit System
The advanced prompt system operates on a credit system which is as follows:
- **1 Credit** for Simple tasks
- **2 Credits** for Medium tasks
- **3 Credits** for Heavy/Super Heavy tasks

## Code Complexity Classification
Tasks are classified based on their complexity:
- **Green**: Simple tasks that can be completed quickly.
- **Yellow**: Medium tasks that require more effort and time.
- **Red**: Heavy tasks that are more complex and time-consuming.
- **Super Heavy**: The most complex tasks that require significant resources.

## API Routing Logic
The routing logic for tasks based on their complexity is defined as:
- **Kimi**: Used for light tasks (Green and Yellow complexity).
- **Lovable**: Designed for heavy tasks (Red and Super Heavy complexity).

## Credit Control Before Execution
Before executing any task, the system checks the user's credit balance to ensure they have sufficient credits for the requested task.

## Available Pricing Plans
1. **Basic Plan**: Offers a limited number of credits per month.
2. **Pro Plan**: Includes additional credits and enhanced support.
3. **Enterprise Plan**: Provides unlimited credits and customized support options.

## Optimization Rules
Optimization rules include ensuring that tasks are routed to the appropriate API based on complexity and minimizing resource usage wherever possible.

## Standard Response When Out of Credits
When a user attempts to execute a task without sufficient credits, the standard response is:
"You have run out of credits. Please purchase more credits to continue using the service."

## Complete Decision Flow for API Routing
1. Determine the complexity of the task based on the user's request.
2. Check the user's credit balance.
3. If sufficient credits are available:
   - If complexity is Green or Yellow, route to **Kimi**.
   - If complexity is Red or Super Heavy, route to **Lovable**.
4. If not sufficient credits remain, respond with the out-of-credits message.

---
This document aims to provide a comprehensive overview of the advanced prompt system regarding its credit mechanism, routing logic, and operational protocols.