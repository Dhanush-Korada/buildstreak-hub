# Build Track Pro

# ABTalks — Premium SaaS Dashboard Redesign

# COMPLETE BUILD + FUNCTIONALITY + RESPONSIVE UI

Build a complete, polished, fully functional frontend for ABTalks, a 60-day coding challenge platform for Indian college students.

IMPORTANT:

I am providing a screenshot as the visual reference for the overall UI style.

Use the uploaded/reference screenshot ONLY as inspiration for:

- Overall layout

- Sidebar structure

- Top navigation

- Card-based dashboard

- Soft lavender background

- Purple accent color

- Rounded cards

- Border treatment

- Typography hierarchy

- Spacing

- SaaS dashboard feeling

- Information density

- Professional visual language

DO NOT copy the Breeth branding, logo, text, names, icons, or product-specific content.

The final product must be ABTalks and must feel like an original coding challenge platform.

==================================================

CORE PRODUCT

==================================================

ABTalks runs a 60-day coding challenge for college students.

Students:

- Select a coding track

- Complete one practical coding task every day

- Build real projects

- Make a GitHub commit

- Publish a LinkedIn post

- Add a live deployment URL

- Maintain a public learning streak

- Build a visible portfolio

- Earn achievements

- Track their progress

The platform should feel like:

Developer Platform

+

Learning Tracker

+

Coding Challenge Platform

+

Productivity Dashboard

It should NOT look like a generic education website.

==================================================

PRIMARY GOAL

==================================================

Create a professional dashboard experience inspired by modern SaaS products.

The visual direction should be:

- Clean

- Minimal

- Premium

- Soft

- Professional

- Developer-focused

- Modern

- Calm

- Motivating

The reference screenshot uses a very clean SaaS dashboard layout.

Use the same type of design language:

- Light lavender/off-white page background

- White content cards

- Purple/lavender accent

- Thin subtle borders

- Large rounded corners

- Soft shadows

- Large whitespace

- Clean typography

- Compact navigation

- Consistent spacing

- Minimal visual noise

Do not make it overly colorful.

Do not use excessive gradients.

Do not use cartoon illustrations.

Do not use giant hero graphics.

The interface should feel like a serious startup product.

==================================================

TECH STACK

==================================================

Use:

- React

- TypeScript

- Vite

- Tailwind CSS or the existing styling system

- React Router

- Lucide React icons

- Local JSON/TypeScript mocked data

- localStorage for persistence

No backend is required.

No authentication is required.

No production database is required.

Everything should work using local mocked data.

==================================================

REQUIRED ROUTES

==================================================

Implement these routes:

/

 

/dashboard

/day/12

Also structure the challenge route so future days can work:

/day/:day

The required screenshot route is:

/day/12

==================================================

GLOBAL APPLICATION LAYOUT

==================================================

Create a reusable application shell.

Desktop:

------------------------------------------------

| Sidebar | Top Header                         |

|         |------------------------------------|

|         |                                    |

|         | Main Content                       |

|         |                                    |

|         |                                    |

------------------------------------------------

Mobile:

--------------------------------

| Top Header                   |

--------------------------------

| Main Content                 |

|                              |

|                              |

--------------------------------

| Bottom Navigation             |

--------------------------------

==================================================

SIDEBAR DESIGN

==================================================

Follow the visual concept from the reference screenshot.

Sidebar should be approximately 220–240px wide on desktop.

Use a very light lavender/off-white background.

Create:

ABTalks logo/wordmark at the top.

Example:

◈ ABTalks

Do NOT copy the reference logo.

Create a simple original ABTalks mark using CSS/iconography.

Below logo:

MAIN

Dashboard

Challenges

Progress

Achievements

LEARNING

My Track

Challenge Calendar

My Projects

ACCOUNT

Profile

Settings

At the bottom:

Student mini profile card.

Example:

┌────────────────────────┐

│ DK  Dhanush             │

│ Web Development         │

└────────────────────────┘

Use initials if no profile image exists.

The sidebar should have:

- Active navigation state

- Hover state

- Icons

- Labels

- Proper spacing

- Section headings

Active item:

Soft purple background

Purple text

Purple icon

Do NOT make active navigation extremely saturated.

==================================================

TOP HEADER

==================================================

Create a compact top header similar to the reference screenshot.

Left side:

A sidebar collapse button on desktop.

On mobile:

Menu button.

Center/left:

Current section title if appropriate.

Right:

Challenge status pill

Example:

60 DAY CHALLENGE

Then:

Notification icon

Profile/avatar

Dropdown arrow

Desktop header should have plenty of whitespace.

Use a very subtle bottom border.

==================================================

BACKGROUND

==================================================

Use a very light lavender background.

Suggested conceptual palette:

Page:

#F8F6FC

Cards:

#FFFFFF

Primary purple:

#7C5CFF

Soft purple:

#EEE8FF

Text:

Dark navy / charcoal

Secondary text:

Muted blue-gray

Borders:

Very light lavender-gray

Do not use these values rigidly if the existing design system provides better matching values.

The overall appearance should resemble a polished modern SaaS dashboard.

==================================================

LANDING PAGE /

==================================================

The landing page should introduce ABTalks.

Do NOT make it look like the dashboard.

It should still use the same visual language.

Header:

ABTalks

How it works

Challenges

Progress

About

CTA:

Start Challenge

==================================================

LANDING HERO

==================================================

Main headline:

60 days.

60 builds.

One stronger you.

Supporting text:

Build something every day, prove your progress publicly, and turn your learning streak into a portfolio recruiters can see.

Buttons:

Start the 60-Day Challenge

See how it works

Create a small product-preview dashboard visual rather than using stock photography.

The preview should show:

Day 12 / 60

11 day streak

Today's challenge

GitHub ✓

LinkedIn ✓

Deployment ✓

This creates visual continuity with the dashboard.

==================================================

LANDING TRUST / VALUE

==================================================

Show:

60 Days

Daily Builds

Public Proof

Real Projects

Use clean metric cards.

Then:

HOW IT WORKS

01

Choose your track

02

Build every day

03

Submit your proof

04

Build your public portfolio

==================================================

DASHBOARD

==================================================

Route:

/dashboard

This is the main application screen.

Use the reference screenshot's SaaS dashboard structure.

Do NOT create a huge modern marketing dashboard.

Instead use:

Header

+

Main content grid

+

Cards

+

Activity chart

+

Quick actions

==================================================

DASHBOARD HEADER

==================================================

Main heading:

Dashboard

Small pill:

DAY 12 / 60

Supporting text:

Welcome back, Dhanush. Here's your progress for today.

On the right:

View challenge →

==================================================

TOP METRIC CARDS

==================================================

Create four cards inspired by the reference screenshot.

Card 1:

CURRENT STREAK

11 days

🔥

Best:

18 days

Card 2:

CHALLENGE PROGRESS

20%

12 / 60 days

Card 3:

PROJECTS BUILT

11

+3 this week

Card 4:

PROOF SUBMITTED

31

GitHub + LinkedIn

Each card should have:

- Small uppercase label

- Large number

- Supporting information

- Small icon

- Circular progress or subtle visual indicator where useful

The cards should look clean and premium.

==================================================

MAIN DASHBOARD GRID

==================================================

Below metrics:

LEFT / LARGE COLUMN

Challenge Progress card.

RIGHT / SMALL COLUMN

Quick Actions.

==================================================

CHALLENGE PROGRESS CARD

==================================================

Title:

60-Day Challenge

Subtitle:

Your journey so far

Large progress visualization:

20%

12 / 60 days completed

Progress bar.

Show:

11 day streak

48 days remaining

Best streak: 18 days

Include a small 60-day timeline visualization.

Completed days:

Purple

Current day:

Highlighted

Future days:

Light gray

Missed days:

Soft warning color

==================================================

API-ACTIVITY-STYLE REPLACEMENT

==================================================

The screenshot contains an API activity graph.

For ABTalks, replace this with:

"Learning Activity"

Subtitle:

Your builds and submissions over time

Create a clean line/bar chart.

Show:

Mon

Tue

Wed

Thu

Fri

Sat

Sun

Metrics:

Builds

Proof submissions

Use subtle purple chart styling.

Do NOT use a generic analytics dashboard.

The chart should communicate student consistency.

==================================================

QUICK ACTIONS

==================================================

Create a right-side card:

QUICK ACTIONS

Action cards:

Open Today's Challenge

→ /day/12

Submit Proof

→ /day/12#submission

View Progress

→ Progress section

My Projects

→ Projects section

Each action must actually work.

==================================================

TODAY'S CHALLENGE

==================================================

Create a prominent card:

TODAY'S CHALLENGE

DAY 12

Build a Developer Portfolio

Create a responsive portfolio that showcases your skills, projects, experience and contact information.

Difficulty:

Intermediate

Estimated time:

60–90 min

Button:

Open Challenge →

Navigate to:

/day/12

==================================================

PROOF OF WORK CARD

==================================================

Create a card:

TODAY'S PROOF

GitHub Repository

✓ Submitted

GitHub Commit

✓ Submitted

LinkedIn Post

✓ Submitted

Live Deployment

○ Missing

Progress:

3 / 4 complete

Button:

Complete Submission

Navigate to:

/day/12#submission

This is one of the most important UX features.

==================================================

ACHIEVEMENTS

==================================================

Create:

ACHIEVEMENTS

Show horizontal cards on mobile.

Examples:

First Commit

✓

7 Day Streak

✓

10 Builds

✓

First Deployment

✓

14 Day Streak

Locked

30 Day Streak

Locked

Unlocked cards should have stronger visual treatment.

Locked cards should be muted.

==================================================

YOUR STANDING

==================================================

Create a compact card:

YOUR STANDING

#128

among 2,430 builders

+17 this week

Do not make competition feel aggressive.

Add a small note:

Consistency matters more than rank.

==================================================

RECENT ACTIVITY

==================================================

Create:

RECENT ACTIVITY

Day 11

Developer Portfolio

Completed

Day 10

Expense Tracker

Completed

Day 09

Weather Dashboard

Completed

Day 08

AI Landing Page

Completed

Use a clean timeline/list.

==================================================

DAY PAGE

==================================================

Route:

/day/12

Keep the same application shell.

Sidebar on desktop.

Top header.

Mobile bottom navigation.

==================================================

DAY HEADER

==================================================

Show:

← Back to Dashboard

DAY 12 / 60

Build a Developer Portfolio

Status:

IN PROGRESS

Difficulty:

Intermediate

Estimated:

60–90 min

==================================================

CHALLENGE DESCRIPTION

==================================================

Card:

TODAY'S GOAL

Build a responsive developer portfolio that communicates:

- Who you are

- What you build

- Your technical skills

- Your projects

- How people can contact you

==================================================

WHAT TO BUILD

==================================================

Create checklist:

○ Hero section

○ About section

○ Skills section

○ Projects section

○ Contact section

○ Responsive mobile layout

○ Working navigation

Make checkboxes interactive.

The checked state must persist in localStorage.

==================================================

ACCEPTANCE CRITERIA

==================================================

Card:

BEFORE YOU SUBMIT

○ Works on mobile

○ No broken links

○ GitHub repository created

○ README included

○ Live URL works

○ LinkedIn post published

Display:

0 / 6 complete

Update dynamically.

==================================================

HINT

==================================================

Create a collapsible:

Need a hint?

When clicked:

Hero

→ About

→ Skills

→ Projects

→ Contact

The section should expand/collapse smoothly.

==================================================

SUBMISSION

==================================================

Create a large card:

SUBMIT YOUR PROOF

Supporting text:

Show what you built today. Add the links that prove your work.

Inputs:

GitHub Repository

Placeholder:

https://github.com/username/project

GitHub Commit

Placeholder:

https://github.com/username/project/commit/...

LinkedIn Post

Placeholder:

https://linkedin.com/posts/...

Live Deployment

Placeholder:

https://your-project.vercel.app

==================================================

SUBMISSION CHECKLIST

==================================================

Show dynamically:

✓ GitHub Repository

✓ GitHub Commit

○ LinkedIn Post

○ Live Deployment

2 / 4 complete

Update instantly as the user enters valid URLs.

==================================================

VALIDATION

==================================================

GitHub repository:

Must contain:

github.com

GitHub commit:

Must contain:

github.com

/commit/

LinkedIn:

Must contain:

linkedin.com

Deployment:

Must be a valid http/https URL.

Show inline errors.

Do NOT use browser alert().

==================================================

SUBMIT BUTTON

==================================================

Large primary button:

Submit Day 12

Disabled until required information is complete.

When clicked:

Button:

Submitting...

Then:

Success.

==================================================

SUCCESS STATE

==================================================

Show:

✓

Day 12 Complete!

Your proof of work has been submitted.

🔥 12 day streak

12 / 60 days completed

Buttons:

Back to Dashboard

Continue to Day 13

The dashboard must update immediately.

==================================================

FULL STATE MANAGEMENT

==================================================

Use React Context or another clean local state system.

Create:

ABTalksProvider

Store:

student

challenge

progress

submissions

achievements

activity

preferences

Persist state to:

localStorage

Key:

abtalks_state

==================================================

INITIAL MOCK DATA

==================================================

Use:

Name:

Dhanush

Track:

Web Development

Current day:

12

Completed:

11

Current streak:

11

Best streak:

18

Total days:

60

Ranking:

128

Total builders:

2430

Today's challenge:

Build a Developer Portfolio

==================================================

FIRST DAY STATE

==================================================

Support:

currentDay: 1

completedDays: 0

streak: 0

Display:

Your streak starts today.

Complete your first challenge to light the 🔥.

Do not make this state look broken.

==================================================

MISSED DAY STATE

==================================================

Support:

missedDays: [11]

Show:

Day 11 missed

Your streak reset, but your progress didn't.

Important:

Do NOT remove completed challenge history.

Progress and streak are separate concepts.

==================================================

EMPTY PROFILE STATE

==================================================

Support empty profile.

Instead of broken data:

Complete your profile

Add your name, track and profile photo.

Use initials when there is no image.

==================================================

ACHIEVEMENT LOGIC

==================================================

Automatically unlock achievements.

Examples:

completedDays >= 1

→ First Commit

streak >= 7

→ 7 Day Streak

completedDays >= 10

→ 10 Builds

completedDays >= 14

→ 14 Day Streak

completedDays >= 30

→ Halfway There

completedDays >= 60

→ Challenge Complete

==================================================

STREAK LOGIC

==================================================

When today's challenge is completed:

completedDays += 1

currentDay += 1

streak += 1

Update best streak if necessary.

Example:

11 → 12

If a day is missed:

streak = 0

BUT:

completedDays stays unchanged.

==================================================

BUTTON FUNCTIONALITY

==================================================

EVERY BUTTON MUST WORK.

Audit the entire application.

No dead buttons.

Examples:

Start Challenge

→ /dashboard

See How It Works

→ scroll

Open Today's Challenge

→ /day/12

Submit Proof

→ /day/12#submission

Back

→ /dashboard

Continue

→ next challenge

Profile

→ profile UI

Menu

→ mobile menu

Close

→ closes modal

View Progress

→ progress

Reset Demo

→ resets local state

External GitHub links

→ open new tab

LinkedIn links

→ open new tab

Deployment URL

→ open new tab

==================================================

MOBILE DESIGN

==================================================

The evaluator will use:

390px width.

This is the highest priority.

At 390px:

No horizontal scrolling.

Cards must fit inside viewport.

Sidebar becomes a mobile menu.

Bottom navigation is fixed.

Main content has enough bottom padding.

Inputs are full width.

Buttons are full width where appropriate.

Metric cards should become one column or a carefully designed 2-column grid.

Do not make text too small.

Do not make cards excessively tall.

Keep the visual hierarchy strong.

==================================================

MOBILE BOTTOM NAVIGATION

==================================================

Create:

Home

Challenges

Progress

Profile

Fixed at bottom.

White background.

Top border.

Active item:

Purple.

Icons:

Lucide icons.

Do not allow the bottom nav to cover content.

==================================================

DESKTOP RESPONSIVE DESIGN

==================================================

At 1024px+:

Show sidebar.

Use larger content area.

Use two-column layouts.

At 1440px:

Content should have a reasonable max-width.

Do not stretch cards across the entire screen.

Maintain generous whitespace like the reference screenshot.

==================================================

INTERACTIONS

==================================================

Implement:

- Smooth hover states

- Focus states

- Button press states

- Sidebar collapse

- Mobile menu

- Dropdowns

- Checkboxes

- Form validation

- Toast notifications

- Submission loading

- Submission success

- Progress updates

- Achievement unlock

- Collapsible hints

- LocalStorage persistence

Keep animations subtle and fast.

==================================================

TOAST SYSTEM

==================================================

Create reusable toast notifications.

Examples:

✓ Day 12 submitted successfully.

✓ Achievement unlocked!

✓ Profile updated.

⚠ GitHub commit link is required.

Toasts should automatically disappear.

==================================================

ERROR HANDLING

==================================================

Handle:

- Empty inputs

- Invalid URLs

- Missing localStorage

- Corrupted localStorage

- Unknown challenge day

- Duplicate submission

- Empty profile

Never show:

undefined

null

NaN

broken image

blank screen

==================================================

UNKNOWN DAY

==================================================

For:

/day/999

Show:

Challenge not found

That challenge doesn't exist yet.

Button:

Back to Dashboard

==================================================

LOADING STATES

==================================================

When submitting:

Submit Day 12

↓

Submitting...

↓

Day 12 Complete ✓

Prevent duplicate clicks.

==================================================

ACCESSIBILITY

==================================================

Use:

- Semantic HTML

- Proper headings

- Labels

- Keyboard navigation

- Focus states

- Accessible buttons

- aria-labels for icon buttons

- Good contrast

==================================================

DESIGN DETAILS FROM REFERENCE

==================================================

Use the uploaded screenshot as a visual reference for the following:

1. Sidebar on desktop

2. Soft lavender application background

3. White cards

4. Purple accent

5. Large rounded corners

6. Thin lavender borders

7. Subtle shadows

8. Compact top navigation

9. Clean SaaS typography

10. Section labels

11. Large metric numbers

12. Card-based information architecture

13. Generous whitespace

14. Minimal visual noise

15. Professional dashboard aesthetic

The final UI should feel like:

"premium SaaS dashboard for developers"

not:

"student education portal."

==================================================

IMPORTANT VISUAL RULE

==================================================

DO NOT COPY THE SCREENSHOT LITERALLY.

Do not use:

- Breeth name

- Breeth logo

- Breeth organization name

- Breeth-specific metrics

- API Keys

- Writes

- Intents

- Retrievals

- Knots

- Breeth terminology

Instead transform those concepts into ABTalks equivalents:

Writes

→ Projects Built

Intents

→ Challenges Completed

Retrievals

→ Proof Submissions

Knots

→ Achievements

API Activity

→ Learning Activity

Quick Actions

→ Challenge Actions

==================================================

PROJECT STRUCTURE

==================================================

Use a clean architecture:

src/

  components/

    layout/

      Sidebar

      TopHeader

      MobileBottomNav

    dashboard/

      MetricCard

      ProgressCard

      LearningActivity

      QuickActions

      TodayChallenge

      ProofCard

      Achievements

      Standing

      RecentActivity

    challenge/

      ChallengeHeader

      RequirementList

      AcceptanceCriteria

      SubmissionForm

      SubmissionChecklist

      SuccessState

    ui/

      Button

      Card

      Badge

      ProgressBar

      Toast

      Modal

  pages/

    Landing

    Dashboard

    ChallengeDay

  data/

    student

    challenges

    achievements

  context/

    ABTalksContext

  hooks/

    useABTalks

  utils/

    validation

    storage

==================================================

NO BACKEND

==================================================

Do not build:

- Authentication

- Backend API

- Database

- Admin dashboard

- Recruiter dashboard

Use local mocked data.

The project should run immediately after installation.

==================================================

FINAL TESTING

==================================================

Before finishing, test:

/

 /dashboard

 /day/12

Test at:

360px

390px

414px

768px

1024px

1440px

Verify:

No horizontal overflow.

No console errors.

No TypeScript errors.

No broken routes.

No dead buttons.

No broken navigation.

No broken forms.

No placeholder text.

No undefined data.

No broken images.

No duplicate state.

No inconsistent progress.

No duplicate submissions.

Refresh must preserve state.

==================================================

FINAL USER FLOW

==================================================

The complete flow must work:

Landing

↓

Start Challenge

↓

Dashboard

↓

Open Today's Challenge

↓

Day 12

↓

Read challenge

↓

Complete requirements

↓

Enter GitHub repository

↓

Enter GitHub commit

↓

Enter LinkedIn post

↓

Enter deployment URL

↓

Validation

↓

Submit Day 12

↓

Submitting state

↓

Success state

↓

12-day streak

↓

Dashboard updates

↓

12 / 60 completed

↓

Achievement unlock

↓

Recent activity updates

↓

Continue to Day 13

==================================================

FINAL QUALITY STANDARD

==================================================

Do not deliver a basic template.

Do not deliver a static mockup.

Do not leave buttons inactive.

Do not leave fake forms.

Do not use random placeholder data.

Build a complete functional product prototype.

The final result should look like a polished startup product that could realistically be launched as an MVP.

PRIORITIES:

1. Reference-inspired premium SaaS UI

2. Mobile-first 390px experience

3. ABTalks branding

4. Excellent information hierarchy

5. Fully functional interactions

6. Persistent local state

7. Challenge submission workflow

8. Streak/progress logic

9. Edge cases

10. Responsive desktop experience

Use the uploaded screenshot as the visual design reference while keeping ABTalks completely original.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://buildstreak-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/35f51cce-2cb7-40b5-bc51-1987a468e11f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
