# CareCircle: Family Health Companion - Implementation Plan

CareCircle is a mobile-first healthcare MVP designed to help families manage health reminders, tracking, and education.

## Scope Summary
- **Auth:** Email/Phone + Password registration/login (Mock/Local persistence).
- **Core Modules:**
    - Medication Reminders (Schedule + Confirmation).
    - Pregnancy Tracking (Week-by-week progress + Antenatal appointments).
    - Child Immunization (Schedules + Tracking).
    - Health Buddy (Contact management + Mock SMS logic).
    - Emergency Health Card (Quick-access vital info).
    - AI Health Assistant (Mocked chat with educational focus and disclaimers).
    - Health Awareness (Content in English & Nigerian Pidgin).
- **UI/UX:** Mobile-first, teal/light blue palette, modern professional aesthetic.
- **Platform:** Responsive web application.

## Non-Goals
- Real SMS gateway integration (will be mocked).
- Real AI LLM backend (will be a simulated educational assistant).
- Server-side persistence (all data stored in `localStorage` for MVP).
- Real-time push notifications (will use browser/local state notifications).

## Assumptions & Open Questions
- **Auth:** Using a simulated auth state in `localStorage`.
- **SMS:** Mocking the "Alert Buddy" trigger when a task is overdue.
- **AI:** Pre-defined responses or a simple keyword-based response system for the MVP.

## Affected Areas
- **Frontend:** React + Tailwind CSS + Lucide Icons + Shadcn UI components.
- **Data Layer:** `localStorage` for user profile, medications, pregnancy data, and health buddy info.
- **Navigation:** Mobile bottom bar or hamburger menu for easy access.

## Implementation Phases

### Phase 1: Foundation & Layout (Frontend Engineer)
- Set up routing (Home/Login, Dashboard, and sub-modules).
- Configure Tailwind with the specified color palette (Teal, Light Blue).
- Create global layouts (Mobile-first Shell, Navigation).
- **Deliverable:** Working navigation and empty shells for all sections.

### Phase 2: Auth & Profile (Frontend Engineer)
- Build Login/Register screens (Email/Phone support).
- Implement Mock Auth context using `localStorage`.
- Emergency Health Card setup (User profile data).
- **Deliverable:** User can "sign in" and save their basic emergency info.

### Phase 3: Medication & Health Buddy (Frontend Engineer)
- Medication Management: CRUD for medications + "Mark as Taken" feature.
- Health Buddy: Form to add buddy details.
- Logic: Check if medication is confirmed; if not, show "Mock SMS Sent to [Buddy Name]" notification.
- **Deliverable:** Functional medication tracker with buddy integration logic.

### Phase 4: Pregnancy & Child Health (Frontend Engineer)
- Pregnancy Care: Week tracker (input due date) and appointment scheduler.
- Child Immunization: List of standard vaccines with "received" toggles.
- **Deliverable:** Tracking views for pregnancy and child health.

### Phase 5: AI Assistant & Awareness (Frontend Engineer)
- Health Awareness: Static content in English and Nigerian Pidgin.
- AI Assistant: Chat UI with mandatory "Not a Doctor" disclaimer.
- Simple response logic for health-related keywords.
- **Deliverable:** Educational content and interactive (mock) assistant.

---

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire responsive frontend and mock data logic.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1-5
- **Scope:** Create a complete mobile-first React application. 
- **Key Requirements:**
    - Use `src/components/ui` for Shadcn components.
    - Implement a `useLocalStorage` hook for data persistence.
    - Colors: Teal (`#008080`), Light Blue (`#ADD8E6`), White, Gray.
    - Language: Awareness section must include Nigerian Pidgin.
    - Mock SMS: Just trigger a `toast` notification when a task is missed.
    - AI: A chat window with a hardcoded disclaimer and basic keyword responses.
- **Files:**
    - `src/App.tsx` (Routing)
    - `src/components/Layout` (Navigation)
    - `src/features/*` (Medication, Pregnancy, Immunization, Buddy, AI)
    - `src/hooks/use-auth.ts`, `src/hooks/use-local-storage.ts`
- **Depends on:** none
- **Acceptance criteria:**
    - Dashboard contains all 7 required sections.
    - User can add a medication and a health buddy.
    - AI Assistant shows the disclaimer prominently.
    - Mobile-first responsiveness is maintained throughout.
